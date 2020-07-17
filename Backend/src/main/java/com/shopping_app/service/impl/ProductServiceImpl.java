package com.shopping_app.service.impl;

import com.shopping_app.map.*;
import com.shopping_app.model.entity.*;
import com.shopping_app.model.request.ProductRequest;
import com.shopping_app.model.response.*;
import com.shopping_app.repository.*;
import com.shopping_app.service.*;
import com.shopping_app.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService
{
    private final ProductRepository productRepository;

    private final ImageService imageService;
    private final CategoryService categoryService;
    private final ColorService colorService;
    private final SizeService sizeService;
    private final BrandService brandService;

    private final SizeMapper sizeMapper;
    private final ColorMapper colorMapper;
    private final CategoryMapper categoryMapper;
    private final ProductMapper productMapper;
    private final BrandMapper brandMapper;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository,
                              ImageService imageService,
                              CategoryService categoryService,
                              ColorService colorService,
                              SizeService sizeService,
                              BrandService brandService,
                              SizeMapper sizeMapper,
                              ColorMapper colorMapper,
                              CategoryMapper categoryMapper,
                              ProductMapper productMapper, BrandMapper brandMapper)
    {
        this.productRepository = productRepository;
        this.imageService = imageService;
        this.categoryService = categoryService;
        this.colorService = colorService;
        this.sizeService = sizeService;
        this.brandService = brandService;

        this.sizeMapper = sizeMapper;
        this.colorMapper = colorMapper;
        this.categoryMapper = categoryMapper;
        this.productMapper = productMapper;
        this.brandMapper = brandMapper;
    }

    @Override
    public ProductResponse createProduct(ProductRequest productRequest)
    {
        ProductEntity productEntity = new ProductEntity();

        Date createdDate = new Date();

        productEntity.setName(productRequest.getName());
        productEntity.setPublicId(Utils.generateUniquePublicId(productRequest.getName(), createdDate));
        productEntity.setPrice(productRequest.getPrice());
        productEntity.setDescription(productRequest.getDescription());
        productEntity.setCreatedDate(createdDate);
        productEntity.setBrandEntity(brandMapper.brandResponseToEntity(productRequest.getBrand()));
        if (productRequest.getSizes() != null)
        {
            productEntity.setSizeEntityList(sizeMapper.sizeResponseListToEntity(productRequest.getSizes()));
        }

        if (productRequest.getColors() != null)
        {
            productEntity.setColorEntityList(colorMapper.colorResponseListToEntity(productRequest.getColors()));
        }

        if (productRequest.getCategories() != null)
        {
            productEntity.setCategoryEntityList(categoryMapper.categoryResponseListToEntity(productRequest.getCategories()));
        }

        ProductEntity savedProductEntity = productRepository.save(productEntity);

        return productMapper.productEntityToResponse(savedProductEntity);
    }

    @Override
    public List<ProductResponse> getAllProducts()
    {
        List<ProductEntity> productEntityList = (List) productRepository.findAll();

        return productMapper.productEntityListToResponse(productEntityList);
    }

    @Override
    public List<ProductResponse> updateProduct(String publicId, ProductRequest productRequest)
    {
        ProductEntity productEntity = productRepository.findByPublicId(publicId);
        productEntity.setName(productRequest.getName());
        productEntity.setPublicId(Utils.generateUniquePublicId(productRequest.getName(), productEntity.getCreatedDate()));
        productEntity.setEdited(true);
        productEntity.setEditedDate(new Date());
        productEntity.setPrice(productRequest.getPrice());
        productEntity.setFinalPrice(productRequest.getFinalPrice());
        productEntity.setDescription(productRequest.getDescription());
        productEntity.setDiscount(productRequest.isDiscount());
        productEntity.setRating(productRequest.getRating());

        if (productRequest.getCategories() != null)
        {
            productEntity.setCategoryEntityList(categoryMapper.categoryResponseListToEntity(productRequest.getCategories()));
        }

        if (productRequest.getColors() != null)
        {
            productEntity.setColorEntityList(colorMapper.colorResponseListToEntity(productRequest.getColors()));
        }

        if (productRequest.getSizes() != null)
        {
            productEntity.setSizeEntityList(sizeMapper.sizeResponseListToEntity(productRequest.getSizes()));
        }

        if (productRequest.getBrand() != null)
        {
            productEntity.setBrandEntity(brandMapper.brandResponseToEntity(productRequest.getBrand()));
        }

        productRepository.save(productEntity);

        return productMapper.productEntityListToResponse((List) productRepository.findAll());
    }

    @Override
    public List<ProductResponse> deleteProduct(String publicId)
    {
        ProductEntity productEntity = productRepository.findByPublicId(publicId);

        List<ImageEntity> productImages = productEntity.getImageEntityList();

        productRepository.delete(productEntity);

        if (productImages != null)
        {
            for (ImageEntity imageEntity: productImages)
            {
                imageService.deleteImage(imageEntity.getPublicId());
            }
        }

        return productMapper.productEntityListToResponse((List) productRepository.findAll());
    }

    @Override
    public ProductResponse getProduct(String publicId)
    {
        ProductEntity productEntity = productRepository.findByPublicId(publicId);

        if (productEntity == null) return null;

        return productMapper.productEntityToResponse(productEntity);
    }

    @Override
    public void addProductImages(String publicId, List<MultipartFile> images)
    {
        ProductEntity productEntity = productRepository.findByPublicId(publicId);

        List<ImageEntity> imageEntityList = imageService.createImages(images);

        productEntity.setImageEntityList(imageEntityList);

        productRepository.save(productEntity);
    }

    @Override
    public void deleteProductImage(String productPublicId, String imagePublicId)
    {
        ProductEntity productEntity = productRepository.findByPublicId(productPublicId);

        List<ImageEntity> productImages = productEntity.getImageEntityList();

        if (productImages != null)
        {
            for (ImageEntity imageEntity: productImages)
            {
                if (imageEntity.getPublicId().equals(imagePublicId))
                {
                    productImages.remove(imageEntity);
                    imageService.deleteImage(imagePublicId);
                }
            }
        }

        productEntity.setImageEntityList(productImages);
    }
}
