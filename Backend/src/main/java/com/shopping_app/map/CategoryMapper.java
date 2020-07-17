package com.shopping_app.map;

import com.shopping_app.model.entity.CategoryEntity;
import com.shopping_app.model.response.CategoryResponse;
import com.shopping_app.repository.CategoryRepository;
import com.shopping_app.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class CategoryMapper
{
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryMapper(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    public static CategoryResponse categoryEntityToResponse(CategoryEntity categoryEntity)
    {
        if (categoryEntity == null) return null;

        return new CategoryResponse(categoryEntity.getPublicId(), categoryEntity.getName(), categoryEntity.getCreatedDate(), categoryEntity.isEdited(), categoryEntity.getEditedDate());
    }

    public static List<CategoryResponse> categoryEntityListToResponse(List<CategoryEntity> categoryEntityList)
    {
        List<CategoryResponse> categoryResponseList = new ArrayList<CategoryResponse>();

        if (categoryEntityList == null) return null;
        else
        {
            for (CategoryEntity categoryEntity: categoryEntityList)
            {
                categoryResponseList.add(categoryEntityToResponse(categoryEntity));
            }

            return categoryResponseList;
        }
    }

    public List<CategoryEntity> categoryResponseListToEntity(List<CategoryResponse> categoryResponseList)
    {
        if (categoryResponseList == null) return null;

        List<CategoryEntity> returnValue = new ArrayList<>();

        for (CategoryResponse categoryResponse: categoryResponseList)
        {
            returnValue.add(categoryRepository.findByPublicId(categoryResponse.getPublicId()));
        }

        return returnValue;
    }
}
