package com.shopping_app.service.impl;

import com.shopping_app.model.response.InitDataResponse;
import com.shopping_app.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InitDataServiceImpl implements InitDataService
{
    private final ProductService productService;
    private final ColorService colorService;
    private final SizeService sizeService;
    private final CategoryService categoryService;
    private final BrandService brandService;

    @Autowired
    public InitDataServiceImpl(ProductService productService, ColorService colorService, SizeService sizeService, CategoryService categoryService, BrandService brandService)
    {
        this.productService = productService;
        this.colorService = colorService;
        this.sizeService = sizeService;
        this.categoryService = categoryService;
        this.brandService = brandService;
    }


    @Override
    public InitDataResponse initData()
    {
        return new InitDataResponse(productService.getAllProducts(), colorService.getAllColors(), sizeService.getAllSizes(), categoryService.getAllCategories(), brandService.getAllBrands());
    }
}
