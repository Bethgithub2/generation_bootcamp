package javaBasico;

import java.util.Scanner;

public class Escaner {

	public static void main(String[] args) {
		Scanner escaner = new Scanner(System.in);//tipo de accion que se l pide al metodo
		
		System.out.println("Escribe un numero: ");
		
		int numero = escaner.nextInt();
		
		String palabra = escaner.nextLine();
		
		if (numero < 10) {
			System.out.println("El numero es menor de 10");
		}
		
		
		System.out.println( palabra);
		escaner.close();
	}

}
