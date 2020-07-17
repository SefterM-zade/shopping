package com.shopping_app.service.impl;

import com.shopping_app.map.BrandMapper;
import com.shopping_app.model.entity.BrandEntity;
import com.shopping_app.model.request.BrandRequest;
import com.shopping_app.model.response.BrandResponse;
import com.shopping_app.repository.BrandRepository;
import com.shopping_app.service.BrandService;
import com.shopping_app.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BrandServiceImpl implements BrandService
{
    private final BrandRepository brandRepository;
    private final BrandMapper brandMapper;

    @Autowired
    public BrandServiceImpl(BrandRepository brandRepository, BrandMapper brandMapper)
    {
        this.brandRepository = brandRepository;
        this.brandMapper = brandMapper;
    }

    @Override
    public List<BrandResponse> createBrand(BrandRequest brandRequest)
    {
        Date createdDate = new Date();
        BrandEntity brandEntity = new BrandEntity(Utils.generateUniquePublicId(brandRequest.getName(), createdDate), brandRequest.getName(), createdDate);
        brandRepository.save(brandEntity);

        List<BrandEntity> brandEntityList = (List) brandRepository.findAll();

        return brandMapper.brandEntityListToResponse(brandEntityList);
    }

    @Override
    public List<BrandResponse> getAllBrands()
    {
        List<BrandEntity> brandEntityList = (List) brandRepository.findAll();

        return brandMapper.brandEntityListToResponse(brandEntityList);
    }

    @Override
    public List<BrandResponse> updateBrand(String publicId, BrandRequest brandRequest)
    {
        BrandEntity brandEntity = brandRepository.findByPublicId(publicId);

        brandEntity.setName(brandRequest.getName());
        brandEntity.setEdited(true);
        brandEntity.setEditedDate(new Date());
        brandEntity.setPublicId(Utils.generateUniquePublicId(brandRequest.getName(), brandEntity.getCreatedDate()));
        brandRepository.save(brandEntity);

        List<BrandEntity> brandEntityList = (List) brandRepository.findAll();

        return brandMapper.brandEntityListToResponse(brandEntityList);
    }

    @Override
    public List<BrandResponse> deleteBrand(String publicId)
    {
        BrandEntity brandEntity = brandRepository.findByPublicId(publicId);

        brandRepository.delete(brandEntity);

        List<BrandEntity> brandEntityList = (List) brandRepository.findAll();

        return brandMapper.brandEntityListToResponse(brandEntityList);
    }

    @Override
    public BrandEntity getBrand(String publicId)
    {
        if (publicId == null || publicId.isBlank()) return null;

        return brandRepository.findByPublicId(publicId);
    }


}
