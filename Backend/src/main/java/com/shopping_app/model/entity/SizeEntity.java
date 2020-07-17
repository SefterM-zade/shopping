package com.shopping_app.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name = "sizes")
public class SizeEntity
{
    public SizeEntity() {}

    public SizeEntity(long id, String name, String publicId, Date createdDate, boolean isEdited, Date editedDate)
    {
        this.id = id;
        this.name = name;
        this.publicId = publicId;
        this.createdDate = createdDate;
        this.isEdited = isEdited;
        this.editedDate = editedDate;
    }

    public SizeEntity(String name, String publicId, Date createdDate)
    {
        this.name = name;
        this.publicId = publicId;
        this.createdDate = createdDate;
    }

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String publicId;
    private Date createdDate;
    private boolean isEdited = false;
    private Date editedDate;

    @ManyToMany(mappedBy = "sizeEntityList")
    private List<ProductEntity> productEntityList;

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