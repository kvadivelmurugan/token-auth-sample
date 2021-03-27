package com.vini.app.security.config;

import com.vini.app.services.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Override
    protected void configure (AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
        ///auth.jdbcAuthentication().
        /*auth.inMemoryAuthentication()
                .withUser("user1")
                .password("password")
                .roles("EVENTS_ROLE")
                .and()
                .withUser("user2")
                .password("password")
                .roles("CONTACTS_ROLE")
                .and()
                .withUser("user3")
                .password("password")
                .roles("NOTES_ROLE")
                .and()
                .withUser("user4")
                .password("password")
                .roles("EXPENSES_ROLE");*/
    }

    protected void configure (HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
        .authorizeRequests()
                .antMatchers("/events/**").hasRole("EVENTS")
                .antMatchers("/expenses").hasRole("EXPENSES")
                .antMatchers("/notes/**").hasRole("NOTES")
                .antMatchers("/contacts/**").hasRole("CONTACTS")
                .antMatchers("/auth/**").permitAll()
                .anyRequest().authenticated()
                //.antMatchers("/").permitAll()
                .and().formLogin().disable().
    }

    @Bean
    protected PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource () {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins (Arrays.asList("*"));
        corsConfiguration.setAllowedMethods(Arrays.asList("OPTIONS", "HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
        corsConfiguration.setAllowedHeaders (Arrays.asList("*"));

        UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();
        corsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return corsConfigurationSource;
    }
}
