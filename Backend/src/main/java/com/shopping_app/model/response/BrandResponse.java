package com.shopping_app.model.response;

import java.util.Date;

public class BrandResponse
{
    public BrandResponse()
    {
    }

    public BrandResponse(String name, String publicId, Date createdDate, boolean isEdited, Date editedDate)
    {
        this.name = name;
        this.publicId = publicId;
        this.createdDate = createdDate;
        this.isEdited = isEdited;
        this.editedDate = editedDate;
    }

    private String name;
    private String publicId;
    private Date createdDate;
    private boolean isEdited;
    private Date editedDate;

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
