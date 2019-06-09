from.base import *

DEBUG = False

SECRET_KEY = '5d!^l5j$tvrmy-kr=*bu&*b!*gdmg@1!x6ngv0s)n*2g0%l*dz'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'favoritedata',
        'USER': 'awsuser',
        'PASSWORD': 'awsuser',
        'HOST': 'favoritedata.cohwafmecuz4.us-east-2.rds.amazonaws.com',
        'PORT': '5432',
    }
}

ALLOWED_HOSTS = ["52.15.224.156", "ec2-52-15-224-156.us-east-2.compute.amazonaws.com"]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = "/static/"