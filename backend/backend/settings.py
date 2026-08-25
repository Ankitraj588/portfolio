"""
Django settings for backend project.
"""

import os
from pathlib import Path

from dotenv import load_dotenv


# =========================================
# BASE DIRECTORY
# =========================================

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / '.env')


# =========================================
# SECURITY
# =========================================

SECRET_KEY = os.getenv('SECRET_KEY')

DEBUG = os.getenv(
    'DEBUG',
    'False'
) == 'True'

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    'portfolio-blogging.onrender.com',
]


# =========================================
# CORS
# =========================================

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
     'https://portfolio-blogging.vercel.app',
]


# =========================================
# APPLICATIONS
# =========================================

INSTALLED_APPS = [

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework.authtoken',

    'corsheaders',

    'accounts',
    'blogs',
]


# =========================================
# REST FRAMEWORK
# =========================================

REST_FRAMEWORK = {

    'DEFAULT_AUTHENTICATION_CLASSES': [

        'rest_framework.authentication.TokenAuthentication',

    ],

}


# =========================================
# MIDDLEWARE
# =========================================

MIDDLEWARE = [

    'django.middleware.security.SecurityMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',

    'django.middleware.common.CommonMiddleware',

    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',

    'django.contrib.messages.middleware.MessageMiddleware',

    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'corsheaders.middleware.CorsMiddleware',

]


# =========================================
# URL CONFIGURATION
# =========================================

ROOT_URLCONF = 'backend.urls'


# =========================================
# TEMPLATES
# =========================================

TEMPLATES = [

    {

        'BACKEND':
            'django.template.backends.django.DjangoTemplates',

        'DIRS': [],

        'APP_DIRS': True,

        'OPTIONS': {

            'context_processors': [

                'django.template.context_processors.request',

                'django.contrib.auth.context_processors.auth',

                'django.contrib.messages.context_processors.messages',

            ],

        },

    },

]


WSGI_APPLICATION = 'backend.wsgi.application'


# =========================================
# DATABASE
# =========================================

DATABASES = {

    'default': {

        'ENGINE': 'django.db.backends.mysql',

        'NAME': os.getenv('DB_NAME'),

        'USER': os.getenv('DB_USER'),

        'PASSWORD': os.getenv('DB_PASSWORD'),

        'HOST': os.getenv(
            'DB_HOST',
            'localhost'
        ),

        'PORT': os.getenv(
            'DB_PORT',
            '3306'
        ),

    }

}


# =========================================
# PASSWORD VALIDATION
# =========================================

AUTH_PASSWORD_VALIDATORS = [

    {
        'NAME':
            'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },

    {
        'NAME':
            'django.contrib.auth.password_validation.MinimumLengthValidator',
    },

    {
        'NAME':
            'django.contrib.auth.password_validation.CommonPasswordValidator',
    },

    {
        'NAME':
            'django.contrib.auth.password_validation.NumericPasswordValidator',
    },

]


# =========================================
# INTERNATIONALIZATION
# =========================================

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# =========================================
# STATIC FILES
# =========================================

STATIC_URL = 'static/'


# =========================================
# EMAIL
# =========================================

MAILERS = {

    'default': {

        'BACKEND':
            'django.core.mail.backends.console.EmailBackend',

    },

}


# =========================================
# DEFAULT PRIMARY KEY
# =========================================

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'