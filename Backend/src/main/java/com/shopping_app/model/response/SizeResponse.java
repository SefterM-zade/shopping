package com.shopping_app.model.response;

import java.util.Date;

public class SizeResponse
{
    public SizeResponse() {}

    public SizeResponse(String publicId, String name, Date createdDate, boolean isEdited, Date editedDate)
    {
        this.publicId = publicId;
        this.name = name;
        this.createdDate = createdDate;
        this.isEdited = isEdited;
        this.editedDate = editedDate;
    }

    private String publicId;
    private String name;
    private Date createdDate;
    private boolean isEdited = false;
    private Date editedDate;

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
