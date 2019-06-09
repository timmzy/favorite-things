from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from django.db import transaction
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.admin.models import LogEntry

# Create your models here.

def validate_length(value):
    if len(value) <= 10:
        raise ValidationError(
            _('Value must be more than 10'),
            params={'value': value},
        )

def ranking(obj, insert):
    value = list(insert.values())[0]
    if value in list(obj.values()):
        first = value
        id = [i for i in obj if obj[i] == first][0]
        second = {id: obj[id] + 1}
        with transaction.atomic():
            FavoriteThing.objects.filter(pk=id).update(ranking=second[id])
        del obj[id]
        ranking(obj, second)
    else:
        return None
    return obj

class FavoriteThing(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000, null=True, blank=True, validators=[validate_length])
    ranking = models.IntegerField()
    metadata = models.TextField(max_length=100, blank=True, null=True)
    category = models.ForeignKey('FavoriteCategory', on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    modified_date = models.DateField(auto_now=True)
    audit_log = models.ManyToManyField('Audit', editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title

    @property
    def category_name(self):
        return self.category.title

    def save(self, *args, **kwargs):
        if self.id:
            audit = Audit(models_objects='FavoriteThing', title=self.title, action_flag='Updated', user=self.user)
            audit.save()
        else:
            audit = Audit(models_objects='FavoriteThing', title=self.title, action_flag='Created', user=self.user)
            audit.save()
        super(FavoriteThing, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        audit = Audit(models_objects='FavoriteCategory', title=self.title, action_flag='Delete', user=self.user)
        audit.save()
        super(FavoriteThing, self).delete(*args, **kwargs)

class FavoriteCategory(models.Model):
    CATEGORY_CHOICES = (
        ('person', "Person"),
        ('place', "Place"),
        ('food', "Food")
    )

    title = models.CharField(max_length=100, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Favorite Categories"

    def save(self, *args, **kwargs):
        if self.id:
            audit = Audit(models_objects='FavoriteCategory', title=self.title, action_flag='Updated', user=self.user)
            audit.save()
        else:
            audit = Audit(models_objects='FavoriteCategory', title=self.title, action_flag='Created', user=self.user)
            audit.save()
        super(FavoriteCategory, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        audit = Audit(models_objects='FavoriteCategory', title=self.title, action_flag='Delete', user=self.user)
        audit.save()
        super(FavoriteCategory, self).delete(*args, **kwargs)

class Audit(models.Model):
    models_objects = models.CharField(max_length=500)
    title = models.CharField(max_length=100)
    action_flag = models.CharField(max_length=10)
    time_stamp = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.models_objects


@receiver(pre_save, sender=FavoriteThing)
def doit(sender, instance, *args, **kwargs):
    rank = {x.id:x.ranking for x in FavoriteThing.objects.filter(category=instance.category)}
    get_review = ranking(rank, {'x':instance.ranking})
