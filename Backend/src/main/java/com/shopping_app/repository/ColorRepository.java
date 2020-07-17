package com.shopping_app.repository;

import com.shopping_app.model.entity.ColorEntity;
import org.springframework.data.repository.CrudRepository;

public interface ColorRepository extends CrudRepository<ColorEntity, Long>
{
    ColorEntity findByPublicId(String publicId);
}
