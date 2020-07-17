package com.shopping_app.model;

import org.apache.catalina.core.ApplicationPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class Test
{
    private String name;
    private long price;

    public Test()
    {
    }

    public Test(String name, long price)
    {
        this.name = name;
        this.price = price;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public long getPrice()
    {
        return price;
    }

    public void setPrice(long price)
    {
        this.price = price;
    }
}
