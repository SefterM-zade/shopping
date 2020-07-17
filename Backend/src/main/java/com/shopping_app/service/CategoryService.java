package com.shopping_app.service;

import com.shopping_app.model.entity.CategoryEntity;
import com.shopping_app.model.request.CategoryRequest;
import com.shopping_app.model.response.CategoryResponse;

import java.util.List;

public interface CategoryService
{
    List<CategoryResponse> createCategory(CategoryRequest categoryRequest);
    List<CategoryResponse> getAllCategories();
    List<CategoryResponse> updateCategory(String publicId, CategoryRequest categoryRequest);
    List<CategoryResponse> deleteCategory(String publicId);
    CategoryEntity getCategory(String publicId);
}
