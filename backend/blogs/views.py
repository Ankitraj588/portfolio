from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404

from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

from .models import Post, PostLike, Bookmark, Comment
from .serializers import PostSerializer


# =========================================================
# BLOG LIST
# GET /api/posts/
# =========================================================

@api_view(['GET'])
def post_list(request):

    posts = Post.objects.all().order_by('-created_at')

    serializer = PostSerializer(
        posts,
        many=True
    )

    data = serializer.data

    for post_data, post in zip(data, posts):

        post_data['likes'] = PostLike.objects.filter(
            post=post
        ).count()

        post_data['comments'] = Comment.objects.filter(
            post=post
        ).count()

    return Response(data)
# =========================================================
# BLOG DETAIL
# GET /api/posts/<id>/
# =========================================================

@api_view(['GET'])
def post_detail(request, pk):

    post = get_object_or_404(Post, pk=pk)

    serializer = PostSerializer(post)

    data = dict(serializer.data)

    # Total likes
    data['likes'] = PostLike.objects.filter(
        post=post
    ).count()

    # User-specific data
    if request.user.is_authenticated:

        data['liked'] = PostLike.objects.filter(
            post=post,
            user=request.user
        ).exists()

        data['bookmarked'] = Bookmark.objects.filter(
            post=post,
            user=request.user
        ).exists()

    else:

        data['liked'] = False
        data['bookmarked'] = False

    # All comments
    comments = Comment.objects.filter(
        post=post
    ).select_related(
        'user'
    ).order_by(
        '-created_at'
    )

    data['comments'] = [
        {
            'id': comment.id,
            'username': comment.user.username,
            'text': comment.text,
            'created_at': comment.created_at,
        }
        for comment in comments
    ]

    return Response(data)


# =========================================================
# REGISTER
# POST /api/register/
# =========================================================

@api_view(['POST'])
def register(request):

    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:

        return Response(
            {
                'detail': 'All fields are required.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(
        username=username
    ).exists():

        return Response(
            {
                'detail': 'Username already exists.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    token, created = Token.objects.get_or_create(
        user=user
    )

    return Response(
        {
            'message': 'Registration successful.',
            'token': token.key,
            'username': user.username
        },
        status=status.HTTP_201_CREATED
    )


# =========================================================
# LOGIN
# POST /api/login/
# =========================================================

@api_view(['POST'])
def user_login(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(
        username=username,
        password=password
    )

    if user is None:

        return Response(
            {
                'detail': 'Invalid username or password.'
            },
            status=status.HTTP_401_UNAUTHORIZED
        )

    token, created = Token.objects.get_or_create(
        user=user
    )

    return Response(
        {
            'token': token.key,
            'username': user.username
        }
    )


# =========================================================
# LIKE / UNLIKE
# POST /api/posts/<id>/like/
# =========================================================

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def toggle_like(request, pk):

    post = get_object_or_404(
        Post,
        pk=pk
    )

    like = PostLike.objects.filter(
        user=request.user,
        post=post
    ).first()

    if like:

        like.delete()
        liked = False

    else:

        PostLike.objects.create(
            user=request.user,
            post=post
        )

        liked = True

    likes_count = PostLike.objects.filter(
        post=post
    ).count()

    return Response(
        {
            'liked': liked,
            'likes': likes_count
        }
    )


# =========================================================
# BOOKMARK / REMOVE BOOKMARK
# POST /api/posts/<id>/bookmark/
# =========================================================

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def toggle_bookmark(request, pk):

    post = get_object_or_404(
        Post,
        pk=pk
    )

    bookmark = Bookmark.objects.filter(
        user=request.user,
        post=post
    ).first()

    if bookmark:

        bookmark.delete()
        bookmarked = False

    else:

        Bookmark.objects.create(
            user=request.user,
            post=post
        )

        bookmarked = True

    return Response(
        {
            'bookmarked': bookmarked
        }
    )


# =========================================================
# ADD COMMENT
# POST /api/posts/<id>/comments/
# =========================================================

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_comment(request, pk):

    post = get_object_or_404(
        Post,
        pk=pk
    )

    text = request.data.get('text')

    if not text or not text.strip():

        return Response(
            {
                'detail': 'Comment cannot be empty.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    comment = Comment.objects.create(
        user=request.user,
        post=post,
        text=text.strip()
    )

    return Response(
        {
            'id': comment.id,
            'username': request.user.username,
            'text': comment.text,
            'created_at': comment.created_at
        },
        status=status.HTTP_201_CREATED
    )