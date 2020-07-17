package com.shopping_app.model.request;

import com.shopping_app.model.response.*;

import java.util.List;

public class ProductRequest
{
    public ProductRequest() {}

    public ProductRequest(String name,
                          double price,
                          String description,
                          double finalPrice,
                          boolean discount,
                          float rating,
                          List<CategoryResponse> categories,
                          List<SizeResponse> sizes,
                          List<ColorResponse> colors)
    {
        this.name = name;
        this.price = price;
        this.description = description;
        this.discount = discount;
        this.finalPrice = finalPrice;
        this.rating = rating;
        this.categories = categories;
        this.colors = colors;
        this.sizes = sizes;
        this.brand = brand;
    }

    private String name;
    private double price;
    private String description;
    private double finalPrice;
    private boolean discount;
    private float rating;
    private List<CategoryResponse> categories;
    private List<SizeResponse> sizes;
    private List<ColorResponse> colors;
    private BrandResponse brand;

    public BrandResponse getBrand()
    {
        return brand;
    }

    public void setBrand(BrandResponse brand)
    {
        this.brand = brand;
    }

    public List<CategoryResponse> getCategories()
    {
        return categories;
    }

    public void setCategories(List<CategoryResponse> categories)
    {
        this.categories = categories;
    }

    public List<SizeResponse> getSizes()
    {
        return sizes;
    }

    public void setSizes(List<SizeResponse> sizes)
    {
        this.sizes = sizes;
    }

    public List<ColorResponse> getColors()
    {
        return colors;
    }

    public void setColors(List<ColorResponse> colors)
    {
        this.colors = colors;
    }

    public float getRating()
    {
        return rating;
    }

    public void setRating(float rating)
    {
        this.rating = rating;
    }

    public double getFinalPrice()
    {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice)
    {
        this.finalPrice = finalPrice;
    }

    public boolean isDiscount()
    {
        return discount;
    }

    public void setDiscount(boolean discount)
    {
        this.discount = discount;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public double getPrice()
    {
        return price;
    }

    public void setPrice(double price)
    {
        this.price = price;
    }
}
