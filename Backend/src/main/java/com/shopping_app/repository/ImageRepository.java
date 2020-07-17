package com.shopping_app.repository;

import com.shopping_app.model.entity.ImageEntity;
import org.springframework.data.repository.CrudRepository;

public interface ImageRepository extends CrudRepository<ImageEntity, Long>
{
    ImageEntity findByPublicId(String publicId);

    boolean existsByName(String name);


}
