from django.apps import AppConfig

class HospitalsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'hospitals'

    def ready(self):
        import hospitals.translation  # ✅ 올바른 위치
        import hospitals.admin
