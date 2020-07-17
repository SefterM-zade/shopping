package com.shopping_app.service;

import com.shopping_app.model.entity.SizeEntity;
import com.shopping_app.model.request.SizeRequest;
import com.shopping_app.model.response.SizeResponse;

import java.util.List;

public interface SizeService
{
    List<SizeResponse> createSize(SizeRequest sizeRequest);
    List<SizeResponse> getAllSizes();
    List<SizeResponse> updateSize(String publicId, SizeRequest sizeRequest);
    List<SizeResponse> deleteSize(String publicId);
    SizeEntity getSize(String publicId);
}
