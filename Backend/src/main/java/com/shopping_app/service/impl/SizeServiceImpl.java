package com.shopping_app.service.impl;

import com.shopping_app.map.SizeMapper;
import com.shopping_app.model.entity.SizeEntity;
import com.shopping_app.model.request.SizeRequest;
import com.shopping_app.model.response.SizeResponse;
import com.shopping_app.repository.SizeRepository;
import com.shopping_app.service.SizeService;
import com.shopping_app.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SizeServiceImpl implements SizeService
{
    private SizeRepository sizeRepository;

    @Autowired
    public SizeServiceImpl(SizeRepository sizeRepository)
    {
        this.sizeRepository = sizeRepository;
    }

    @Override
    public List<SizeResponse> createSize(SizeRequest sizeRequest)
    {
        Date createdDate = new Date();
        SizeEntity sizeEntity = new SizeEntity(sizeRequest.getName(), Utils.generateUniquePublicId(sizeRequest.getName(), createdDate), createdDate);

        sizeRepository.save(sizeEntity);

        List<SizeEntity> sizeEntityList = (List) sizeRepository.findAll();

        return SizeMapper.sizeEntityListToResponse(sizeEntityList);
    }

    @Override
    public List<SizeResponse> getAllSizes()
    {
        List<SizeEntity> sizeEntityList = (List) sizeRepository.findAll();

        return SizeMapper.sizeEntityListToResponse(sizeEntityList);
    }

    @Override
    public List<SizeResponse> updateSize(String publicId, SizeRequest sizeRequest)
    {
        SizeEntity sizeEntity = sizeRepository.findByPublicId(publicId);

        sizeEntity.setName(sizeRequest.getName());
        sizeEntity.setPublicId(Utils.generateUniquePublicId(sizeRequest.getName(), sizeEntity.getCreatedDate()));
        sizeEntity.setEdited(true);
        sizeEntity.setEditedDate(new Date());

        sizeRepository.save(sizeEntity);

        List<SizeEntity> sizeEntityList = (List) sizeRepository.findAll();

        return SizeMapper.sizeEntityListToResponse(sizeEntityList);
    }

    @Override
    public List<SizeResponse> deleteSize(String publicId)
    {
        SizeEntity sizeEntity = sizeRepository.findByPublicId(publicId);

        sizeRepository.delete(sizeEntity);

        List<SizeEntity> sizeEntityList = (List) sizeRepository.findAll();

        return SizeMapper.sizeEntityListToResponse(sizeEntityList);
    }

    @Override
    public SizeEntity getSize(String publicId)
    {
        if (publicId == null || publicId.isBlank()) return null;

        return sizeRepository.findByPublicId(publicId);
    }
}
