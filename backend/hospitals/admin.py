import hospitals.translation
from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms
from .models import Hospital, HospitalImage, HospitalNews

# ✅ 다국어 필드용 커스텀 폼
class HospitalAdminForm(forms.ModelForm):
    class Meta:
        model = Hospital
        fields = '__all__'
        widgets = {
            'description_ko': CKEditorUploadingWidget(),
            'description_en': CKEditorUploadingWidget(),
        }

class HospitalImageInline(admin.TabularInline):
    model = HospitalImage
    extra = 1

class HospitalNewsInline(admin.TabularInline): 
    model = HospitalNews
    extra = 1

# ✅ TranslationAdmin + CKEditor form 사용
@admin.register(Hospital)
class HospitalAdmin(TranslationAdmin):
    form = HospitalAdminForm
    inlines = [HospitalImageInline, HospitalNewsInline]
    list_display = ['name', 'category', 'summary']
    list_filter = ['category']
    search_fields = ['name_ko', 'name_en', 'summary_ko', 'summary_en']

@admin.register(HospitalNews)
class HospitalNewsAdmin(TranslationAdmin):
    list_display = ['title', 'hospital']

admin.site.register(HospitalImage)
