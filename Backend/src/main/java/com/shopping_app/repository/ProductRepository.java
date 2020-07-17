package com.shopping_app.repository;

import com.shopping_app.model.entity.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductEntity, Long>
{
    ProductEntity findByPublicId(String publicId);
}
