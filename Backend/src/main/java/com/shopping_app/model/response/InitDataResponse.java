package com.shopping_app.model.response;

import java.util.List;

public class InitDataResponse
{
    List<ProductResponse> products;
    List<ColorResponse> colors;
    List<SizeResponse> sizes;
    List<CategoryResponse> categories;
    List<BrandResponse> brands;

    public InitDataResponse()
    {
    }

    public InitDataResponse(List<ProductResponse> products, List<ColorResponse> colors, List<SizeResponse> sizes, List<CategoryResponse> categories, List<BrandResponse> brands)
    {
        this.products = products;
        this.colors = colors;
        this.sizes = sizes;
        this.categories = categories;
        this.brands = brands;
    }

    public List<ProductResponse> getProducts()
    {
        return products;
    }

    public void setProducts(List<ProductResponse> products)
    {
        this.products = products;
    }

    public List<ColorResponse> getColors()
    {
        return colors;
    }

    public void setColors(List<ColorResponse> colors)
    {
        this.colors = colors;
    }

    public List<SizeResponse> getSizes()
    {
        return sizes;
    }

    public void setSizes(List<SizeResponse> sizes)
    {
        this.sizes = sizes;
    }

    public List<CategoryResponse> getCategories()
    {
        return categories;
    }

    public void setCategories(List<CategoryResponse> categories)
    {
        this.categories = categories;
    }

    public List<BrandResponse> getBrands()
    {
        return brands;
    }

    public void setBrands(List<BrandResponse> brands)
    {
        this.brands = brands;
    }
}
