from.base import *

DEBUG = True

SECRET_KEY = '5d!^l5j$tvrmy-kr=*bu&*b!*gdmg@1!x6ngv0s)n*2g0%l*dz'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'favoritedata',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '',
    }
}

ALLOWED_HOSTS = []

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]