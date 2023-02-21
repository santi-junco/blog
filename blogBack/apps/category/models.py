from django.db import models

class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=200, unique=True)
    image = models.ImageField(upload_to='media/categories/')

    def __str__(self):
        return self.name

    def get_image(self):
        if self.image:
            return self.image.url
        
        return ''