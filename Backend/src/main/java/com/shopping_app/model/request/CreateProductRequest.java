package com.shopping_app.model.request;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.shopping_app.model.Test;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

public class CreateProductRequest
{
    private ProductRequest productRequest;

    private List<MultipartFile> images;

//    private Test test;

//    List<File> images;

//    public CreateProductRequest(ProductRequest productRequest, List<File> images)
//    {
//        this.productRequest = productRequest;
//        this.images = images;
//    }
//
//    public List<File> getImages()
//    {
//        return images;
//    }
//
//    public void setImages(List<File> images)
//    {
//        this.images = images;
//    }

    public CreateProductRequest()
    {
    }

//    public CreateProductRequest(ProductRequest productRequest, List<MultipartFile> images)
//    {
//        this.productRequest = productRequest;
//        this.images = images;
//    }

    public ProductRequest getProductRequest()
    {
        return productRequest;
    }

    public void setProductRequest(ProductRequest productRequest)
    {
        this.productRequest = productRequest;
    }

    public List<MultipartFile> getImages()
    {
        return images;
    }

    public void setImages(List<MultipartFile> images)
    {
        this.images = images;
    }


//    public CreateProductRequest(ProductRequest productRequest, Test test)
//    {
//        this.productRequest = productRequest;
//        this.test = test;
//    }
//
//    public Test getTest()
//    {
//        return test;
//    }
//
//    public void setTest(Test test)
//    {
//        this.test = test;
//    }
}
