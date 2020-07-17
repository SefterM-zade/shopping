package com.shopping_app.model.response;

import java.util.Date;
import java.util.List;

public class ProductResponse
{
    public ProductResponse() {}

    public ProductResponse(String name,
                           String description,
                           Date createdDate,
                           boolean isEdited,
                           Date editedDate,
                           double price,
                           double firstPrice,
                           boolean discount,
                           String publicId,
                           float rating,
                           List<CategoryResponse> categories,
                           List<ColorResponse> colors,
                           List<SizeResponse> sizes,
                           BrandResponse brand, List<ImageResponse> images)
    {
        this.name = name;
        this.description = description;
        this.createdDate = createdDate;
        this.isEdited = isEdited;
        this.editedDate = editedDate;
        this.price = price;
        this.finalPrice = firstPrice;
        this.discount = discount;
        this.publicId = publicId;
        this.rating = rating;
        this.sizes = sizes;
        this.categories = categories;
        this.colors = colors;
        this.brand = brand;
        this.images = images;
    }

    private String name;
    private String description;
    private Date createdDate;
    private boolean isEdited;
    private Date editedDate;
    private double price;
    private double finalPrice;
    private boolean discount;
    private String publicId;
    private float rating;
    private List<CategoryResponse> categories;
    private List<ColorResponse> colors;
    private List<SizeResponse> sizes;
    private BrandResponse brand;
    private List<ImageResponse> images;

    public List<ImageResponse> getImages()
    {
        return images;
    }

    public void setImages(List<ImageResponse> images)
    {
        this.images = images;
    }

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

    public List<ColorResponse> getColors()
    {
        return colors;
    }

    public void setColors(List<ColorResponse> colors)
    {
        this.colors = colors;
    }

    public List<SizeResponse> getSizes()
    {
        return sizes;
    }

    public void setSizes(List<SizeResponse> sizes)
    {
        this.sizes = sizes;
    }

    public float getRating()
    {
        return rating;
    }

    public void setRating(float rating)
    {
        this.rating = rating;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public Date getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }

    public boolean isEdited()
    {
        return isEdited;
    }

    public void setEdited(boolean edited)
    {
        isEdited = edited;
    }

    public Date getEditedDate()
    {
        return editedDate;
    }

    public void setEditedDate(Date editedDate)
    {
        this.editedDate = editedDate;
    }

    public double getPrice()
    {
        return price;
    }

    public void setPrice(double price)
    {
        this.price = price;
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

    public String getPublicId()
    {
        return publicId;
    }

    public void setPublicId(String publicId)
    {
        this.publicId = publicId;
    }

}
