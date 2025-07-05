from django.db import models
from markdownx.models import MarkdownxField
from ckeditor_uploader.fields import RichTextUploadingField
# hostpital app models.py

class Hospital(models.Model):

    CATEGORY_CHOICES = [
        ('plastic', 'Plastic Surgery'),
        ('derma', 'Dermatology'),
        ('hospital', 'Hospital'),
    ]

    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255, blank=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    location = models.CharField(max_length=255)
    description = RichTextUploadingField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='plastic')
    summary = models.CharField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class HospitalImage(models.Model):
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='hospital_images/')
    caption = models.CharField(max_length=255, blank=True)
    def __str__(self):
        return f"Image for {self.hospital.name}"

class HospitalNews(models.Model):
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name='news')
    title = models.CharField(max_length=255)
    url = models.URLField()
    published_at = models.DateTimeField(null=True, blank=True)  # 선택: 뉴스 날짜

    def __str__(self):
        return f"{self.hospital.name} - {self.title}"