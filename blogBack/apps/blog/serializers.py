from rest_framework import serializers

from .models import Post

from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='get_image')
    video = serializers.CharField(source='get_video')
    category = CategorySerializer()
    published = serializers.DateTimeField(format='%H:%M %d/%m/%Y')

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'image',
            'video',
            'desciption',
            'excert',
            'category',
            'published',
            'status'
        ]