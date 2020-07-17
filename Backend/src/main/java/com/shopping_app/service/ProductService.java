package com.shopping_app.service;

import com.shopping_app.model.request.CreateProductRequest;
import com.shopping_app.model.request.ProductRequest;
import com.shopping_app.model.response.ProductResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService
{
    ProductResponse createProduct(ProductRequest productRequest);
    List<ProductResponse> getAllProducts();
    List<ProductResponse> updateProduct(String publicId, ProductRequest productRequest);
    List<ProductResponse> deleteProduct(String publicId);
    ProductResponse getProduct(String publicId);
    void addProductImages(String publicId, List<MultipartFile> images);
    void deleteProductImage(String productPublicId, String imagePublicId);
}
