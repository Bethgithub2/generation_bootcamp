package com.generation.demo.service;

import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImpl implements PersonaService{

	@Override
	public String registro(String nombre) {
		
		 return "El usuario " + nombre + " ha sido registrado";
	}

	
	
	
}
