package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
		
		//Instanciar
		Perro perro1 = new Perro("Patitas",3 );
		
		//cambiar sus atributos
		perro1.nombre = "Patitas ";
		perro1.edad = 3 ;
		perro1.raza = "Huskey ";
		perro1.tamanio = "Mediano ";
		
		//metodo
		perro1.ladrar();
		int edadP = perro1.edadPerruna();
		System.out.println(edadP);
		
		//metodo estatico
		perro1.mensaje();
		Perro.mensaje();//no es necesario crear un objeto
		
		
		Perro perro2 = new Perro("Cookie", 1);
		perro2.nombre = "Cokiees ";
		perro2.edad = 1;
		perro2.raza = "Dalmata ";
		perro2.tamanio = "Grande";
		
		perro2.ladrar ();
	}

}
