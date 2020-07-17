package com.shopping_app.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;

public class SizeRequest
{
    public SizeRequest() {}

    public SizeRequest(String name)
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
