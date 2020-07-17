package com.shopping_app.service.impl;

import com.shopping_app.map.CategoryMapper;
import com.shopping_app.model.entity.CategoryEntity;
import com.shopping_app.model.request.CategoryRequest;
import com.shopping_app.model.response.CategoryResponse;
import com.shopping_app.repository.CategoryRepository;
import com.shopping_app.service.CategoryService;
import com.shopping_app.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService
{
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<CategoryResponse> createCategory(CategoryRequest categoryRequest)
    {
        Date createdDate = new Date();
        CategoryEntity categoryEntity = new CategoryEntity(categoryRequest.getName(), Utils.generateUniquePublicId(categoryRequest.getName(), createdDate), createdDate);

        categoryRepository.save(categoryEntity);

        List<CategoryEntity> categoryEntityList = (List) categoryRepository.findAll();

        return CategoryMapper.categoryEntityListToResponse(categoryEntityList);
    }

    @Override
    public List<CategoryResponse> getAllCategories()
    {
        List<CategoryEntity> categoryEntityList = (List) categoryRepository.findAll();

        return CategoryMapper.categoryEntityListToResponse(categoryEntityList);
    }

    @Override
    public List<CategoryResponse> updateCategory(String publicId, CategoryRequest categoryRequest)
    {
        CategoryEntity categoryEntity = categoryRepository.findByPublicId(publicId);

        categoryEntity.setName(categoryRequest.getName());
        categoryEntity.setPublicId(Utils.generateUniquePublicId(categoryRequest.getName(), categoryEntity.getCreatedDate()));
        categoryEntity.setEdited(true);
        categoryEntity.setEditedDate(new Date());

        categoryRepository.save(categoryEntity);

        List<CategoryEntity> categoryEntityList = (List) categoryRepository.findAll();

        return CategoryMapper.categoryEntityListToResponse(categoryEntityList);
    }

    @Override
    public List<CategoryResponse> deleteCategory(String publicId)
    {
        CategoryEntity categoryEntity = categoryRepository.findByPublicId(publicId);

        categoryRepository.delete(categoryEntity);

        List<CategoryEntity> categoryEntityList = (List) categoryRepository.findAll();

        return CategoryMapper.categoryEntityListToResponse(categoryEntityList);
    }

    @Override
    public CategoryEntity getCategory(String publicId)
    {
        if (publicId == null || publicId.isBlank()) return null;

        return categoryRepository.findByPublicId(publicId);
    }
}
