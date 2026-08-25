from django.urls import path

from .views import (
    post_list,
    post_detail,
    register,
    user_login,
    toggle_like,
    toggle_bookmark,
    add_comment,
)


urlpatterns = [

    path(
        'posts/',
        post_list,
        name='post-list'
    ),

    path(
        'posts/<int:pk>/',
        post_detail,
        name='post-detail'
    ),

    path(
        'register/',
        register,
        name='register'
    ),

    path(
        'login/',
        user_login,
        name='login'
    ),

    path(
        'posts/<int:pk>/like/',
        toggle_like,
        name='toggle-like'
    ),

    path(
        'posts/<int:pk>/bookmark/',
        toggle_bookmark,
        name='toggle-bookmark'
    ),

    path(
        'posts/<int:pk>/comments/',
        add_comment,
        name='add-comment'
    ),

]