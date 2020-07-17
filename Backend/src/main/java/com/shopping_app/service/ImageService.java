package com.shopping_app.service;

import com.shopping_app.model.entity.ImageEntity;
import com.shopping_app.model.request.ImageRequest;
import com.shopping_app.model.response.ImageResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImageService
{
    List<ImageEntity> createImages(List<MultipartFile> images);
    List<ImageResponse> deleteImage(String publicId);
    List<ImageResponse> deleteAllImages();
}
