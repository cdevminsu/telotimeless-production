from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from hospitals.views import HospitalViewSet

# Swagger
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

from django.conf import settings
from django.conf.urls.static import static

# ✅ router 설정
router = DefaultRouter()
router.register('hospitals', HospitalViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="Telotimeless API",
        default_version='v1',
        description="의료관광 플랫폼 API 문서",
        contact=openapi.Contact(email="support@telotimeless.com"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('markdownx/', include('markdownx.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')), 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)