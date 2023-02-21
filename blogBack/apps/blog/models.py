from django.utils import timezone
from django.db import models

from apps.category.models import Category

def blog_directory_path(instance, filename):
    return f'blog/{instance.title}/{filename}'

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=100, null=False, blank=False)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to=blog_directory_path, null=True, blank=True)
    video = models.FileField(upload_to=blog_directory_path, null=True, blank=True)
    desciption = models.TextField()
    excert = models.CharField(max_length=100)
    # author = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def get_image(self):
        if self.image:
            return self.image.url
        return ''

    def get_video(self):
        if self.video:
            return self.video.url
        return ''

