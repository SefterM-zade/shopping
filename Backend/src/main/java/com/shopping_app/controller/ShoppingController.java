package com.shopping_app.controller;

import com.shopping_app.model.Test;
import com.shopping_app.model.request.*;
import com.shopping_app.model.response.*;
import com.shopping_app.service.*;
import com.shopping_app.service.impl.UserDetailsServiceImpl;
import com.shopping_app.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingController
{
    private final ColorService colorService;
    private final CategoryService categoryService;
    private final SizeService sizeService;
    private final ProductService productService ;
    private final BrandService brandService;
    private final FileStorageService fileStorageService;
    private final ImageService imageService;
    private final InitDataService initDataService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtUtil jwtUtil;

    @Autowired
    public ShoppingController(ColorService colorService,
                              CategoryService categoryService,
                              SizeService sizeService,
                              ProductService productService,
                              BrandService brandService,
                              FileStorageService fileStorageService,
                              ImageService imageService,
                              InitDataService initDataService,
                              AuthenticationManager authenticationManager,
                              UserDetailsServiceImpl userDetailsService,
                              JwtUtil jwtUtil)
    {
        this.colorService = colorService;
        this.categoryService = categoryService;
        this.sizeService = sizeService;
        this.productService = productService;
        this.brandService = brandService;
        this.fileStorageService = fileStorageService;
        this.imageService = imageService;
        this.initDataService = initDataService;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception
    {
        try
        {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @GetMapping("/colors")
    public List<ColorResponse> getColors()
    {
        return colorService.getAllColors();
    }

    @PostMapping("/colors")
    public List<ColorResponse> createColor(@RequestBody ColorRequest colorRequest)
    {
        return  colorService.createColor(colorRequest);
    }

    @PutMapping("/colors/{publicId}")
    public List<ColorResponse> updateColor(@PathVariable String publicId, @RequestBody ColorRequest colorRequest)
    {
        return colorService.updateColor(publicId, colorRequest);
    }

    @DeleteMapping("/colors/{publicId}")
    public List<ColorResponse> deleteColor(@PathVariable String publicId)
    {
        return colorService.deleteColor(publicId);
    }

    @GetMapping("/categories")
    public List<CategoryResponse> getCategories()
    {
        return categoryService.getAllCategories();
    }

    @PostMapping("/categories")
    public List<CategoryResponse> createCategory(@RequestBody CategoryRequest categoryRequest)
    {
        return  categoryService.createCategory(categoryRequest);
    }

    @PutMapping("/categories/{publicId}")
    public List<CategoryResponse> updateCategory(@PathVariable String publicId, @RequestBody CategoryRequest categoryRequest)
    {
        return categoryService.updateCategory(publicId, categoryRequest);
    }

    @DeleteMapping("/categories/{publicId}")
    public List<CategoryResponse> deleteCategory(@PathVariable String publicId)
    {
        return categoryService.deleteCategory(publicId);
    }

    @GetMapping("/sizes")
    public List<SizeResponse> getSizes()
    {
        return sizeService.getAllSizes();
    }

    @PostMapping("/sizes")
    public List<SizeResponse> createSize(@RequestBody SizeRequest sizeRequest)
    {
        return sizeService.createSize(sizeRequest);
    }

    @PutMapping("/sizes/{publicId}")
    public List<SizeResponse> updateSize(@PathVariable String publicId, @RequestBody SizeRequest sizeRequest)
    {
        return sizeService.updateSize(publicId, sizeRequest);
    }

    @DeleteMapping("/sizes/{publicId}")
    public List<SizeResponse> deleteSize(@PathVariable String publicId)
    {
        return sizeService.deleteSize(publicId);
    }

    @GetMapping("/products")
    public List<ProductResponse> getProducts()
    {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{publicId}")
    public ProductResponse getProduct(@PathVariable String publicId)
    {
        return productService.getProduct(publicId);
    }

    @PutMapping("/products/{publicId}")
    public List<ProductResponse> updateProduct(@PathVariable String publicId, @RequestBody ProductRequest productRequest)
    {
        return productService.updateProduct(publicId, productRequest);
    }

    @DeleteMapping("/products/{publicId}")
    public List<ProductResponse> deleteProduct(@PathVariable String publicId)
    {
        return productService.deleteProduct(publicId);
    }

    @GetMapping("/brands")
    public List<BrandResponse> getBrands()
    {
        return brandService.getAllBrands();
    }

    @PostMapping("/brands")
    public List<BrandResponse> createBrand(@RequestBody BrandRequest brandRequest)
    {
        return brandService.createBrand(brandRequest);
    }

    @PutMapping("/brands/{publicId}")
    public List<BrandResponse> updateBrand(@PathVariable String publicId, @RequestBody BrandRequest brandRequest)
    {
        return brandService.updateBrand(publicId, brandRequest);
    }

    @DeleteMapping("/brands/{publicId}")
    public List<BrandResponse> deleteBrand(@PathVariable String publicId)
    {
        return brandService.deleteBrand(publicId);
    }

    @GetMapping("/init")
    public InitDataResponse init()
    {
        return initDataService.initData();
    }

    @PostMapping(value = "/test")
    public void test(@RequestParam("image") MultipartFile image, @RequestParam("test") Test test)
    {
        System.out.println("work");
    }

    @PostMapping("/products/{publicId}/images")
    public void createImage(@PathVariable String publicId, @RequestParam("image") List<MultipartFile> images)
    {
        productService.addProductImages(publicId, images);
    }

    @PostMapping("/products")
    public ProductResponse createProduct(@RequestBody ProductRequest productRequest)
    {
        return productService.createProduct(productRequest);
    }

    @DeleteMapping("/products/{productPublicId}/images/{imagePublicId}")
    public void deleteProdctImage(@PathVariable String productPublicId, @PathVariable String imagePublicId)
    {
        productService.deleteProductImage(productPublicId, imagePublicId);
    }
}