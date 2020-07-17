package com.shopping_app.repository;

import com.shopping_app.model.entity.SizeEntity;
import org.springframework.data.repository.CrudRepository;

public interface SizeRepository extends CrudRepository<SizeEntity, Long>
{
    SizeEntity findByPublicId(String publicId);
}
