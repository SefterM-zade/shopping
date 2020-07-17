package com.shopping_app.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Date;
import java.util.List;

@Entity(name = "colors")
public class ColorEntity
{
    public ColorEntity()
    {
    }

    public ColorEntity(long id, String name, String hashCode, String publicId, Date createdDate, Date editedDate, boolean isEdited)
    {
        this.id = id;
        this.name = name;
        this.hashCode = hashCode;
        this.publicId = publicId;
        this.createdDate = createdDate;
        this.editedDate = editedDate;
        this.isEdited = isEdited;
    }

    public ColorEntity(String name, String hashCode, String publicId, Date createdDate)
    {
        this.name = name;
        this.hashCode = hashCode;
        this.publicId = publicId;
        this.createdDate = createdDate;
    }

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String hashCode;
    private String publicId;
    private Date createdDate;
    private Date editedDate;
    private boolean isEdited = false;

    @ManyToMany(mappedBy = "colorEntityList")
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

    public String getHashCode()
    {
        return hashCode;
    }

    public void setHashCode(String hashCode)
    {
        this.hashCode = hashCode;
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
