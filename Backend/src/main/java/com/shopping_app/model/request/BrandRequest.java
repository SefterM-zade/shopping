package com.shopping_app.model.request;

public class BrandRequest
{
    public BrandRequest()
    {
    }

    public BrandRequest(String name)
    {
        this.name = name;
    }

    private String name;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
