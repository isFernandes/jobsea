package br.com.jobsea;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("http://localhost:3000/")
//		.allowedMethods(HttpMethod.PUT.name(), HttpMethod.DELETE.name())
//		.allowedHeaders("header1", "header2", "header3")
//		.exposedHeaders("header1", "header2")
		.allowCredentials(false)
//		.maxAge(3600)
		;
	}

}
