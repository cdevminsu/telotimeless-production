from rest_framework import viewsets
from .models import Hospital
from .serializers import HospitalListSerializer, HospitalDetailSerializer

class HospitalViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Hospital.objects.all()
    lookup_field = 'slug' 

    def get_serializer_class(self):
        if self.action == 'list':
            return HospitalListSerializer
        return HospitalDetailSerializer
