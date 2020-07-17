package com.shopping_app.map;

import com.shopping_app.model.entity.ImageEntity;
import com.shopping_app.model.response.ImageResponse;

import java.util.ArrayList;
import java.util.List;

public class ImageMapper
{
    public static ImageResponse imageEntityToResponse(ImageEntity imageEntity)
    {
        return new ImageResponse(imageEntity.getName(), imageEntity.getPublicId(), imageEntity.getSize(), imageEntity.getCreatedDate());
    }

    public static List<ImageResponse> imageEntityListToResponse(List<ImageEntity> imageEntityList)
    {
        if (imageEntityList == null) return null;

        List<ImageResponse> returnValue = new ArrayList<>();

        for (ImageEntity imageEntity: imageEntityList)
        {
            returnValue.add(imageEntityToResponse(imageEntity));
        }

        return returnValue;
    }
}
