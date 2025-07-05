from modeltranslation.translator import register, TranslationOptions
from .models import Hospital, HospitalNews

@register(Hospital)
class HospitalTranslationOptions(TranslationOptions):
    fields = ('name', 'title', 'summary', 'description')

@register(HospitalNews)
class HospitalNewsTranslationOptions(TranslationOptions):
    fields = ('title',)