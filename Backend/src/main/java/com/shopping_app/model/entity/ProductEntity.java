package com.shopping_app.model.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name = "products")
public class ProductEntity
{
    public ProductEntity() {}

    public ProductEntity(long id, String name, double price, double firstPrice, String description, boolean discount, String publicId, Date createdDate, boolean isEdited, Date updatedDate)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.finalPrice = firstPrice;
        this.description = description;
        this.discount = discount;
        this.publicId = publicId;
        this.createdDate = createdDate;
        this.isEdited = isEdited;
        this.editedDate = updatedDate;
    }

    public ProductEntity(String name, double price, String description, String publicId, Date createdDate, float rating)
    {
        this.name = name;
        this.price = price;
        this.description = description;
        this.publicId = publicId;
        this.createdDate = createdDate;
        this.rating = rating;
    }
    public ProductEntity(String name,
                         String publicId,
                         String description,
                         double price,
                         Date createdDate,
                         List<CategoryEntity> categoryEntityList,
                         List<ColorEntity> colorEntityList,
                         List<SizeEntity> sizeEntityList,
                         BrandEntity brandEntity,
                         List<ImageEntity> imageEntityList)
    {
        this.name = name;
        this.publicId = publicId;
        this.description = description;
        this.price = price;
        this.createdDate = createdDate;
        this.categoryEntityList = categoryEntityList;
        this.sizeEntityList = sizeEntityList;
        this.colorEntityList = colorEntityList;
        this.brandEntity = brandEntity;
        this.imageEntityList = imageEntityList;
    }
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private double price;
    private double finalPrice = 0;
    private String description;
    private boolean discount = false;
    private String publicId;
    private Date createdDate;
    private boolean isEdited = false;
    private Date editedDate = null;
    private float rating = 5;

    @OneToMany
    private List<ImageEntity> imageEntityList;

    public List<ImageEntity> getImageEntityList()
    {
        return imageEntityList;
    }

    public void setImageEntityList(List<ImageEntity> imageEntityList)
    {
        this.imageEntityList = imageEntityList;
    }

    @ManyToOne
    private BrandEntity brandEntity;

    @ManyToMany
    private List<CategoryEntity> categoryEntityList;

    @ManyToMany
    private List<ColorEntity> colorEntityList;

    @ManyToMany
    private List<SizeEntity> sizeEntityList;


    public BrandEntity getBrandEntity()
    {
        return brandEntity;
    }

    public void setBrandEntity(BrandEntity brandEntity)
    {
        this.brandEntity = brandEntity;
    }

    public List<CategoryEntity> getCategoryEntityList()
    {
        return categoryEntityList;
    }

    public void setCategoryEntityList(List<CategoryEntity> categoryEntityList)
    {
        this.categoryEntityList = categoryEntityList;
    }

    public List<ColorEntity> getColorEntityList()
    {
        return colorEntityList;
    }

    public void setColorEntityList(List<ColorEntity> colorEntityList)
    {
        this.colorEntityList = colorEntityList;
    }

    public List<SizeEntity> getSizeEntityList()
    {
        return sizeEntityList;
    }

    public void setSizeEntityList(List<SizeEntity> sizeEntityList)
    {
        this.sizeEntityList = sizeEntityList;
    }

    public float getRating()
    {
        return rating;
    }

    public void setRating(float rating)
    {
        this.rating = rating;
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
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

    public double getFinalPrice()
    {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice)
    {
        this.finalPrice = finalPrice;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
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
}
