from rest_framework import serializers
from django.utils.translation import get_language
from .models import Hospital, HospitalImage, HospitalNews

class HospitalImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalImage
        fields = ['id', 'image', 'caption']  # caption은 다국어 아님

class HospitalNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalNews
        fields = ['id', 'title', 'url', 'published_at']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        lang = get_language() or 'ko'
        data['title'] = getattr(instance, f'title_{lang}', instance.title)
        return data

class HospitalListSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Hospital
        fields = ['slug', 'name', 'summary', 'category', 'thumbnail']

    def get_thumbnail(self, obj):
        image = obj.images.first()
        return image.image.url if image else None

    def get_category(self, obj):
        return obj.get_category_display()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        lang = get_language() or 'ko'
        data['name'] = getattr(instance, f'name_{lang}', instance.name)
        data['summary'] = getattr(instance, f'summary_{lang}', instance.summary)
        return data

class HospitalDetailSerializer(serializers.ModelSerializer):
    images = HospitalImageSerializer(many=True, read_only=True)
    news = HospitalNewsSerializer(many=True, read_only=True)

    class Meta:
        model = Hospital
        fields = [
            'id', 'slug', 'name', 'title', 'location',
            'summary', 'description', 'category',
            'images', 'news'
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        lang = get_language() or 'ko'

        data['name'] = getattr(instance, f'name_{lang}', instance.name)
        data['title'] = getattr(instance, f'title_{lang}', instance.title)
        data['summary'] = getattr(instance, f'summary_{lang}', instance.summary)
        data['description'] = getattr(instance, f'description_{lang}', instance.description)

        return data