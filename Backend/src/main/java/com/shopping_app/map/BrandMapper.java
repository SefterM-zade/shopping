package com.shopping_app.map;

import com.shopping_app.model.entity.BrandEntity;
import com.shopping_app.model.response.BrandResponse;
import com.shopping_app.repository.BrandRepository;
import com.shopping_app.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BrandMapper
{
    private final BrandRepository brandRepository;

    @Autowired
    public BrandMapper(BrandRepository brandRepository)
    {
        this.brandRepository = brandRepository;
    }

    public BrandResponse brandEntityToResponse(BrandEntity brandEntity)
    {
        return new BrandResponse(brandEntity.getName(), brandEntity.getPublicId(), brandEntity.getCreatedDate(), brandEntity.isEdited(), brandEntity.getEditedDate());
    }

    public List<BrandResponse> brandEntityListToResponse(List<BrandEntity> brandEntityList)
    {
        if (brandEntityList == null) return null;

        List<BrandResponse> returnValue = new ArrayList<>();

        for (BrandEntity brandEntity: brandEntityList)
        {
            returnValue.add(brandEntityToResponse(brandEntity));
        }

        return returnValue;
    }

    public BrandEntity brandResponseToEntity(BrandResponse brandResponse)
    {
        if (brandResponse == null) return null;

        return brandRepository.findByPublicId(brandResponse.getPublicId());
    }
}
