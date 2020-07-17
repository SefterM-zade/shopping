package com.shopping_app.service;

import com.shopping_app.model.entity.ColorEntity;
import com.shopping_app.model.request.ColorRequest;
import com.shopping_app.model.response.ColorResponse;

import java.util.List;

public interface ColorService
{
    List<ColorResponse> createColor(ColorRequest colorRequest);
    List<ColorResponse> getAllColors();
    List<ColorResponse> updateColor(String publicId, ColorRequest colorRequest);
    List<ColorResponse> deleteColor(String publicId);
    ColorEntity getColor(String publicId);
}
