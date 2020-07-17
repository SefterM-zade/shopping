package com.shopping_app;

import com.shopping_app.service.FileStorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Resource;

@SpringBootApplication
public class ShoppingAppApplication
{
    public static void main(String[] args) {
        SpringApplication.run(ShoppingAppApplication.class, args);
    }

}
