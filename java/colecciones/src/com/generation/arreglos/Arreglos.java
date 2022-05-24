package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {
	
	public static void main (String[]args) {
		
		//Matrices /arreglos//arrays
		//solo pueden tener un tipo de dato y debemos especificar su tamaño.
		//numero=0
		//string=null
		//boolean=false
		
		int [] arrNumeros = new int [5];
		
		
		
		//numeracion basada en 0 
		arrNumeros[0]= 1;
		arrNumeros[1]= Integer.parseInt("2");
		arrNumeros[2]= 11;
		arrNumeros[3]= 112;
		arrNumeros[4]= 21;
		
		

		//convertir arreglos a String 
		//System.out.println(Arrays.toString(arrNumeros));
		System.out.println(arrNumeros[1]);
		System.out.println(arrNumeros[2]);
		System.out.println(arrNumeros[3]);
		
		for(int i=0;i<arrNumeros.length;i++) {
			System.out.println(arrNumeros[i]);
		}
		
		//forEach
		
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento " + conteo + "=" + elemento);
		}
		
		//Arreglo que guarda objetos
		
		Persona persona1 = new Persona("Diego", 6);
		Persona persona2 = new Persona("Alan", 28);
		//Persona persona3 = new Persona("Lizbeth", 25);
		
		//Object arrPersonas [] = new Object [3];
		Persona arrPersonas [] = new Persona [3];
		
		arrPersonas [0] = persona1;
		arrPersonas [1] = persona2;
		//arrPersonas [2] = persona3;
		arrPersonas [2] = new Persona("Lizbeth",25);
		
		System.out.println(Arrays.toString(arrPersonas));
		
		for (Persona elemento : arrPersonas) {
			System.out.println(elemento.nombre + "-" + elemento.edad);
		}
		
		//Arreglos literales
		String [] arrString = {"Hola", "Mi", "nombre", "es"};
		System.out.println(Arrays.toString(arrString));
	}

}
