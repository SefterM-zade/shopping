package com.shopping_app.service;

import com.shopping_app.model.entity.BrandEntity;
import com.shopping_app.model.request.BrandRequest;
import com.shopping_app.model.response.BrandResponse;

import java.util.List;

public interface BrandService
{
    List<BrandResponse> createBrand(BrandRequest brandRequest);

    List<BrandResponse> getAllBrands();

    List<BrandResponse> updateBrand(String publicId, BrandRequest brandRequest);

    List<BrandResponse> deleteBrand(String publicId);

    BrandEntity getBrand(String publicId);
}
