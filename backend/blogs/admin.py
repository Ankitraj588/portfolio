from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'author',
        'category',
        'read_time',
        'views',
        'created_at',
    )

    search_fields = (
        'title',
        'content',
        'author__username',
    )

    list_filter = (
        'category',
        'created_at',
    )

    prepopulated_fields = {
        'slug': ('title',)
    }