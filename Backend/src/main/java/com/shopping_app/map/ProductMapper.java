package com.shopping_app.map;

import com.shopping_app.model.entity.ProductEntity;
import com.shopping_app.model.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ProductMapper
{
    private final ColorMapper colorMapper;
    private final SizeMapper sizeMapper;
    private final CategoryMapper categoryMapper;
    private final BrandMapper brandMapper;

    @Autowired
    public ProductMapper(ColorMapper colorMapper, SizeMapper sizeMapper, CategoryMapper categoryMapper, BrandMapper brandMapper)
    {
        this.colorMapper = colorMapper;
        this.sizeMapper = sizeMapper;
        this.categoryMapper = categoryMapper;
        this.brandMapper = brandMapper;
    }

        public ProductResponse productEntityToResponse(ProductEntity productEntity)
    {
        List<ColorResponse> colorResponseList;

        List<SizeResponse> sizeResponseList;

        List<CategoryResponse> categoryResponseList;

        colorResponseList = colorMapper.colorEntityListToResponse(productEntity.getColorEntityList());
        categoryResponseList = categoryMapper.categoryEntityListToResponse(productEntity.getCategoryEntityList());
        sizeResponseList = sizeMapper.sizeEntityListToResponse(productEntity.getSizeEntityList());

        return new ProductResponse(productEntity.getName(),
                productEntity.getDescription(),
                productEntity.getCreatedDate(),
                productEntity.isEdited(),
                productEntity.getEditedDate(),
                productEntity.getPrice(),
                productEntity.getFinalPrice(),
                productEntity.isDiscount(),
                productEntity.getPublicId(),
                productEntity.getRating(),
                categoryResponseList,
                colorResponseList,
                sizeResponseList,
                brandMapper.brandEntityToResponse(productEntity.getBrandEntity()),
                ImageMapper.imageEntityListToResponse(productEntity.getImageEntityList()));
    }

    public List<ProductResponse> productEntityListToResponse(List<ProductEntity> productEntityList)
    {
        List<ProductResponse> returnValue = new ArrayList<>();

        for(ProductEntity productEntity: productEntityList)
        {
            returnValue.add(productEntityToResponse(productEntity));
        }

        return returnValue;
    }

}
