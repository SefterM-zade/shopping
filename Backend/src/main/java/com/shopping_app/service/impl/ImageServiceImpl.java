package com.shopping_app.service.impl;

import com.shopping_app.map.ImageMapper;
import com.shopping_app.model.entity.ImageEntity;
import com.shopping_app.model.response.ImageResponse;
import com.shopping_app.repository.ImageRepository;
import com.shopping_app.service.ImageService;
import com.shopping_app.util.Utils;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ImageServiceImpl implements ImageService
{
    private final ImageRepository imageRepository;

    @Autowired
    public ImageServiceImpl(ImageRepository imageRepository)
    {
        this.imageRepository = imageRepository;
    }

    @Override
    public List<ImageEntity> createImages(List<MultipartFile> images)
    {
        if (images == null) return null;

        List<ImageEntity> returnValue = new ArrayList<>();

        for (MultipartFile image: images)
        {
            String dir = "A:\\projects\\shopping\\shopping_app_v3\\src\\assets\\test\\";
            String imageExt = "";
            char[] c = image.getOriginalFilename().toCharArray();

            for (int i = c.length - 1; i != 0; i --)
            {
                if (c[i] == '.')
                {
                    imageExt = image.getOriginalFilename().substring(i);
                }
            }

            Date createdDate = new Date();

            String imageName = Utils.generateUniquePublicId(image.getName(), createdDate) + imageExt;

            byte[] bytes = new byte[0];

            try
            {
                bytes = image.getBytes();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }

            Path path = Paths.get(dir + imageName);

            try
            {
                Files.write(path, bytes);
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }

            ImageEntity imageEntity = new ImageEntity(image.getOriginalFilename(), imageName, image.getSize(), createdDate);

            imageRepository.save(imageEntity);
            returnValue.add(imageEntity);
        }

        return returnValue;

    }

    @Override
    public List<ImageResponse> deleteImage(String publicId)
    {
        ImageEntity imageEntity = imageRepository.findByPublicId(publicId);

        try {
            Files.deleteIfExists(Paths.get("A:\\projects\\shopping\\shopping_app_v3\\src\\assets\\test\\" + imageEntity.getName()));
        } catch (IOException e) {
            e.printStackTrace();
        }

        imageRepository.delete(imageEntity);

        List<ImageEntity> imageEntityList = (List) imageRepository.findAll();

        return ImageMapper.imageEntityListToResponse(imageEntityList);
    }

    @Override
    public List<ImageResponse> deleteAllImages()
    {
        try
        {
            FileUtils.cleanDirectory(new File("A:\\projects\\shopping\\shopping_app_v3\\src\\assets\\test\\"));
            imageRepository.deleteAll();
        }
        catch (Exception e)
        {
            throw new RuntimeException(e.getMessage());
        }

        List<ImageEntity> imageEntityList = (List) imageRepository.findAll();

        return ImageMapper.imageEntityListToResponse(imageEntityList);
    }
}
