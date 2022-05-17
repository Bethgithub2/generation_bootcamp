package com.perritos;

public class Perro {
	//atributos o propiedades; variables que ya contienen estas clases
	String nombre = "Anonimo";
	int edad;
	String raza;
	String tamanio;
	
	//constructor
	public Perro (String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	
	
	
	//Metodos=funciones
	public void ladrar() {
		System.out.println("El perro " + nombre + "Hace Guauf");
		
	}
	
	public int edadPerruna () {
		return edad * 7;
	}
	//Metodos estaticos
	//Nos permite utilizarlo sin instanciar un objeto
	public static void mensaje() {
		System.out.println("Esta es una clase Perro");
	}
	
	
}
