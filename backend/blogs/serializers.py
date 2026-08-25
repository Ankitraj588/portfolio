from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

    author_name = serializers.CharField(
        source='author.username',
        read_only=True
    )

    class Meta:
        model = Post

        fields = [
            'id',
            'title',
            'slug',
            'content',
            'author',
            'author_name',
            'category',
            'read_time',
            'views',
            'created_at',
            'updated_at',
        ]