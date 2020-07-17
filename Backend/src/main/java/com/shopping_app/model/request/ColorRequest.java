package com.shopping_app.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;

public class ColorRequest
{
    public ColorRequest() {}

    public ColorRequest(String name, String hashCode)
    {
        this.name = name;
        this.hashCode = hashCode;
    }

    private String name;
    private String hashCode;

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
}
