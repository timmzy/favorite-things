# How long did you spend on the coding test below?
I spent over 2 days developing the app

# What would you add to your solution (if you had more time)?
I would have created a user profile, where users can add personal details.

# Most useful feature that was added to Django 2.x
It is now required to by foreignkey to add on_delete argument when using it.
With this, you able to instruct Django on what to do when a tables in relations are deleted.
You can use the CASCADE method, the SET_NULL attribute (and more).
For the CASCADE attribute, when a referenced object is deleted it will also delete those rows referenced to it.
For the SET_NULL attribute, it sets the value to null when object referenced to it is deleted.

`category = models.ForeignKey('FavoriteCategory', on_delete=models.CASCADE)`

`category = models.ForeignKey('FavoriteCategory', on_delete=models.SET_NULL)`

Others include, `SET_DEFAULT, SET(), PROTECT`

# How would you track down a performance issue in production?
With the use of line-profiler - <a href="https://github.com/rkern/line_profiler">Line Profiler</a>, you can track the performance of a view.
This can tell us time spent, amount of hits and so on. It's import to carry this observations on production because the way you are likely to get different result on development and production.

**Have i used it?** <br>
I haven't used it yet, thought i have to been able to solve performance issue in Django by optimising database query


