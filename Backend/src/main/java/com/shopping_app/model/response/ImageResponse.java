package com.shopping_app.model.response;

import java.util.Date;

public class ImageResponse
{
    private String name;
    private String publicId;
    private long size;
    private Date createdDate;

    public ImageResponse()
    {
    }

    public ImageResponse(String name, String publicId, long size, Date createdDate)
    {
        this.name = name;
        this.publicId = publicId;
        this.size = size;
        this.createdDate = createdDate;
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
