package com.vini.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Hello world!
 *
 */

@SpringBootApplication
@EnableJpaRepositories (basePackages = {"com.vini.app.repositories"})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
