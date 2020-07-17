package com.shopping_app.model.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name = "brands")
public class BrandEntity
{
    public BrandEntity()
    {
    }

    public BrandEntity(long id, String publicId, String name, Date createdDate, Date editedDate, boolean isEdited)
    {
        this.id = id;
        this.publicId = publicId;
        this.name = name;
        this.createdDate = createdDate;
        this.editedDate = editedDate;
        this.isEdited = isEdited;
    }

    public BrandEntity(String publicId, String name, Date createdDate)
    {
        this.publicId = publicId;
        this.name = name;
        this.createdDate = createdDate;
    }

    public BrandEntity(String publicId, String name, Date createdDate, Date editedDate, boolean isEdited)
    {
        this.publicId = publicId;
        this.name = name;
        this.createdDate = createdDate;
        this.editedDate = editedDate;
        this.isEdited = isEdited;
    }

    @Id
    @GeneratedValue
    private long id;

    private String publicId;
    private String name;
    private Date createdDate;
    private Date editedDate;
    private boolean isEdited = false;

    @OneToMany(mappedBy = "brandEntity")
    private List<ProductEntity> productEntityList;

    public List<ProductEntity> getProductEntityList()
    {
        return productEntityList;
    }

    public void setProductEntityList(List<ProductEntity> productEntityList)
    {
        this.productEntityList = productEntityList;
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public String getPublicId()
    {
        return publicId;
    }

    public void setPublicId(String publicId)
    {
        this.publicId = publicId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Date getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }

    public Date getEditedDate()
    {
        return editedDate;
    }

    public void setEditedDate(Date editedDate)
    {
        this.editedDate = editedDate;
    }

    public boolean isEdited()
    {
        return isEdited;
    }

    public void setEdited(boolean edited)
    {
        isEdited = edited;
    }
}
