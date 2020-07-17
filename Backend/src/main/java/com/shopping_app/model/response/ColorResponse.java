package com.shopping_app.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

public class ColorResponse
{
    public ColorResponse()
    {
    }

    public ColorResponse(String name, String publicId, String hashCode, boolean isEdited, Date editedDate, Date createdDate)
    {
        this.name = name;
        this.publicId = publicId;
        this.hashCode = hashCode;
        this.isEdited = isEdited;
        this.editedDate = editedDate;
        this.createdDate = createdDate;
    }

    private String name;
    private String publicId;
    private String hashCode;
    private boolean isEdited;
    private Date editedDate;
    private Date createdDate;

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

    public String getHashCode()
    {
        return hashCode;
    }

    public void setHashCode(String hashCode)
    {
        this.hashCode = hashCode;
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

    public Date getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }
}
