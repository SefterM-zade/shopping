package com.shopping_app.repository;

import com.shopping_app.model.entity.BrandEntity;
import org.springframework.data.repository.CrudRepository;

public interface BrandRepository extends CrudRepository<BrandEntity, Long>
{
    BrandEntity findByPublicId(String publicId);
}

