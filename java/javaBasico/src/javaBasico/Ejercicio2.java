package javaBasico;



import java.util.Scanner;


public class Ejercicio2 {
	public static void main(String[] arg) {
		float peso, altura, masa;

        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduzca el peso: ");
        peso = teclado.nextFloat();

        System.out.print("Introduzca la altura: ");
        altura = teclado.nextFloat();
        
        System.out.println(peso);
        System.out.println(altura);
        
        masa = peso / (altura*altura);
        
        System.out.println(masa);
        
        if(masa>= 18.5f && masa <= 25f) {
        	System.out.print("Your weigh ratio is good");
        }else {
        	System.out.print("Your health is not good");
        }
	}
}