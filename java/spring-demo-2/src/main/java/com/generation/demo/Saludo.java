package com.generation.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Saludo {
	// Peticiones web
	//GET, POST, DELETE, PUT
	
	@GetMapping ("api/saludo/saludo")
	public String saludo() {
		return "Hola a todos";
	}
	@GetMapping("api/saludo/Holaspring")
	public String holaSpring(){
		return "Hola mundo desde Sapring";
	}
	
	@PostMapping("api/saludo/login")
	public String login() {
		return "Te registraste";
	}
	
	
}
