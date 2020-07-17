package com.shopping_app.map;

import com.shopping_app.model.entity.SizeEntity;
import com.shopping_app.model.response.SizeResponse;
import com.shopping_app.repository.SizeRepository;
import com.shopping_app.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SizeMapper
{
    private final SizeRepository sizeRepository;

    @Autowired
    public SizeMapper(SizeRepository sizeRepository)
    {
        this.sizeRepository = sizeRepository;
    }

    public static List<SizeResponse> sizeEntityListToResponse(List<SizeEntity> sizeEntityList)
    {
        if (sizeEntityList == null) return null;

        List<SizeResponse> returnValue = new ArrayList<SizeResponse>();

        for (SizeEntity sizeEntity: sizeEntityList)
        {
            returnValue.add(new SizeResponse(sizeEntity.getPublicId(), sizeEntity.getName(), sizeEntity.getCreatedDate(), sizeEntity.isEdited(), sizeEntity.getEditedDate()));
        }

        return returnValue;
    }

    public List<SizeEntity> sizeResponseListToEntity(List<SizeResponse> sizeResponseList)
    {
        if (sizeResponseList == null) return null;

        List<SizeEntity> returnValue = new ArrayList<>();

        for (SizeResponse sizeResponse: sizeResponseList)
        {
            returnValue.add(sizeRepository.findByPublicId(sizeResponse.getPublicId()));
        }

        return returnValue;
    }
}
