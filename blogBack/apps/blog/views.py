from django.shortcuts import get_object_or_404, render
from django.db.models.query_utils import Q

from .models import Post
from .serializers import PostSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from apps.category.models import Category

class BlogListView(APIView):

    def get(self, request, format=None):
        
        if Post.postobjects.all().exists():
            
            posts = Post.postobjects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class BlogListCategoryView(APIView):
    def get(self, request, category_id, fromat=None):
        
        if Post.objects.exists():
            category = Category.objects.get(id=category_id)
            posts = Post.objects.filter(category=category)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PostDetailView(APIView):
    def get(self, request, post_slug, format=None):
        post = get_object_or_404(Post, slug=post_slug)
        serializer = PostSerializer(post)
        
        return Response({'post': serializer.data}, status=status.HTTP_200_OK) 

class SearchBlogView(APIView):
    def get(self, request, search_term):
        
        matches = Post.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(desciption__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        serializer = PostSerializer(matches, many=True)
        
        return Response({'filtered_posts': serializer.data}, status=status.HTTP_200_OK)