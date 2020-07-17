package com.shopping_app.model.request;

public class ImageRequest
{
    private String originalName;
    private String name;
    private long size;

    public ImageRequest()
    {
    }

    public ImageRequest(String originalName, String name, long size)
    {
        this.originalName = originalName;
        this.size = size;
        this.name = name;
    }

    public String getOriginalName()
    {
        return originalName;
    }

    public void setOriginalName(String originalName)
    {
        this.originalName = originalName;
    }

    public long getSize()
    {
        return size;
    }

    public void setSize(long size)
    {
        this.size = size;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
