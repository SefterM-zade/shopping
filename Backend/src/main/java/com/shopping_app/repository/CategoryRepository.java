package com.shopping_app.repository;

import com.shopping_app.model.entity.CategoryEntity;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<CategoryEntity, Long>
{
    CategoryEntity findByPublicId(String publicId);
    CategoryEntity findByName(String name);
}
