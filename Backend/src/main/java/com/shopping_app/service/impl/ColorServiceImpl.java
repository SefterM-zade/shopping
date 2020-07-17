package com.shopping_app.service.impl;

import com.shopping_app.map.ColorMapper;
import com.shopping_app.model.entity.ColorEntity;
import com.shopping_app.model.request.ColorRequest;
import com.shopping_app.model.response.ColorResponse;
import com.shopping_app.repository.ColorRepository;
import com.shopping_app.service.ColorService;
import com.shopping_app.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ColorServiceImpl implements ColorService
{
    private final ColorRepository colorRepository;

    @Autowired
    public ColorServiceImpl(ColorRepository colorRepository)
    {
        this.colorRepository = colorRepository;
    }


    @Override
    public List<ColorResponse> createColor(ColorRequest colorRequest)
    {
        Date createdDate = new Date();
        ColorEntity colorEntity = new ColorEntity(colorRequest.getName(), colorRequest.getHashCode(), Utils.generateUniquePublicId(colorRequest.getName(), createdDate), createdDate);

        colorRepository.save(colorEntity);

        List<ColorEntity> colorEntityList = (List<ColorEntity>) colorRepository.findAll();
        return ColorMapper.colorEntityListToResponse(colorEntityList);
    }

    @Override
    public List<ColorResponse> getAllColors()
    {
        List<ColorEntity> colorEntityList = (List<ColorEntity>) colorRepository.findAll();

        if (colorEntityList == null) return null;

        return ColorMapper.colorEntityListToResponse(colorEntityList);
    }

    @Override
    public List<ColorResponse> updateColor(String publicId, ColorRequest colorRequest)
    {
        ColorEntity colorEntity = colorRepository.findByPublicId(publicId);

        colorEntity.setName(colorRequest.getName());
        colorEntity.setPublicId(Utils.generateUniquePublicId(colorRequest.getName(), colorEntity.getCreatedDate()));
        colorEntity.setHashCode(colorRequest.getHashCode());
        colorEntity.setEdited(true);
        colorEntity.setEditedDate(new Date());

        colorRepository.save(colorEntity);

        List<ColorEntity> colorEntityList = (List) colorRepository.findAll();

        return ColorMapper.colorEntityListToResponse(colorEntityList);

    }

    @Override
    public List<ColorResponse> deleteColor(String publicId)
    {
        ColorEntity colorEntity = colorRepository.findByPublicId(publicId);

        colorRepository.delete(colorEntity);

        List<ColorEntity> colorEntityList = (List) colorRepository.findAll();

        return ColorMapper.colorEntityListToResponse(colorEntityList);
    }

    @Override
    public ColorEntity getColor(String publicId)
    {
        if (publicId == null || publicId.isBlank()) return null;

        return colorRepository.findByPublicId(publicId);
    }
}
