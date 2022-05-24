package com.generation.test;

import com.generation.model.Perro;

public class PruebaPerro {

	public static void main(String[] args) {
				
		Perro marley = new Perro("Marley","Labrador","Mediano",4,"Blanco");
		System.out.println(marley);
		
		Perro solovino = new Perro ("Solovino","Mestizo", "Mediano", 2, "Negro");
		System.out.println(solovino);
		
		marley.setHumano("Alan");
		solovino.setHumano("Diego");
		
		System.out.println(Perro.buscarHumano(2));
		System.out.println(Perro.buscarHumano(1));
	}

}
