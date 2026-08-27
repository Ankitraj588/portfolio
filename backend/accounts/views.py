from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def register(request):
    if request.method != "POST":
        return JsonResponse(
            {"detail": "Only POST method is allowed."},
            status=405
        )

    try:
        data = json.loads(request.body)

        username = data.get("username", "").strip()
        email = data.get("email", "").strip()
        password = data.get("password", "")

        if not username or not email or not password:
            return JsonResponse(
                {"detail": "Username, email and password are required."},
                status=400
            )

        if User.objects.filter(username=username).exists():
            return JsonResponse(
                {"detail": "Username already exists."},
                status=400
            )

        if User.objects.filter(email=email).exists():
            return JsonResponse(
                {"detail": "Email already exists."},
                status=400
            )

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return JsonResponse(
            {
                "message": "User created successfully.",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                }
            },
            status=201
        )

    except json.JSONDecodeError:
        return JsonResponse(
            {"detail": "Invalid JSON."},
            status=400
        )