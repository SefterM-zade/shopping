package com.shopping_app.map;

import com.shopping_app.model.entity.ColorEntity;
import com.shopping_app.model.response.ColorResponse;
import com.shopping_app.repository.ColorRepository;
import com.shopping_app.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ColorMapper
{
    private final ColorRepository colorRepository;

    @Autowired
    public ColorMapper(ColorRepository colorRepository)
    {
        this.colorRepository = colorRepository;
    }

    public static ColorResponse colorEntityToResponse(ColorEntity colorEntity)
    {
        return new ColorResponse(
                colorEntity.getName(),
                colorEntity.getPublicId(),
                colorEntity.getHashCode(),
                colorEntity.isEdited(),
                colorEntity.getEditedDate(),
                colorEntity.getCreatedDate()
        );
    }

    public static List<ColorResponse> colorEntityListToResponse(List<ColorEntity> colorEntityList)
    {
        List<ColorResponse> returnValue = new ArrayList<ColorResponse>();

        for (ColorEntity colorEntity: colorEntityList)
        {
            returnValue.add(colorEntityToResponse(colorEntity));
        }

        return returnValue;
    }

    public List<ColorEntity> colorResponseListToEntity(List<ColorResponse> colorResponseList)
    {
        if (colorResponseList == null) return null;

        List<ColorEntity> returnValue = new ArrayList<>();

        for (ColorResponse colorResponse: colorResponseList)
        {
            returnValue.add(colorRepository.findByPublicId(colorResponse.getPublicId()));
        }

        return returnValue;
    }
}
