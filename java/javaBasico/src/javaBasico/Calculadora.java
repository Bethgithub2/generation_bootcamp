package javaBasico;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		float resultado;
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");
		System.out.println("Introduce el numero de la operacion a realizar");
		int opc = teclado.nextInt();
		
		
		System.out.print("Ingresa tu primer numero: ");
		float num1 = teclado.nextFloat();
		System.out.print("Ingresa tu segundo numero: ");
		float num2 = teclado.nextFloat();
		
		teclado.close();
		switch(opc) {
		case 1:
			System.out.println("Suma");
			resultado = num1+num2;
			System.out.println("La suman es: " + resultado);
			break;
		case 2:
			System.out.println("Resta");
			resultado = num1-num2;
			System.out.println("La resta es: " + resultado);
			break;
		case 3:
			System.out.println("Multiplicacion");
			resultado = num1*num2;
			System.out.println("La multiplicacion es: " + resultado);
			break;
		case 4:
			System.out.println("Division");
			resultado = num1/num2;
			System.out.println("La division es: " + resultado);
			break;
		default:
			System.out.println("Se ingreso una opcion incorrecta adios");
			break;
		}	
	}


	}


