package com.shopping_app.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity(name = "images")
public class ImageEntity
{
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String publicId;
    private long size;
    private Date createdDate;

    @ManyToOne
    private ProductEntity productEntity;

    public ProductEntity getProductEntity()
    {
        return productEntity;
    }

    public void setProductEntity(ProductEntity productEntity)
    {
        this.productEntity = productEntity;
    }

    public ImageEntity()
    {
    }

    public ImageEntity(long id, String name, String publicId, long size, Date createdDate)
    {
        this.id = id;
        this.name = name;
        this.publicId = publicId;
        this.size = size;
        this.createdDate = createdDate;
    }

    public ImageEntity(String name, String publicId, long size, Date createdDate)
    {
        this.name = name;
        this.publicId = publicId;
        this.size = size;
        this.createdDate = createdDate;
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

    public String getPublicId()
    {
        return publicId;
    }

    public void setPublicId(String publicId)
    {
        this.publicId = publicId;
    }

    public long getSize()
    {
        return size;
    }

    public void setSize(long size)
    {
        this.size = size;
    }

    public Date getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }
}
