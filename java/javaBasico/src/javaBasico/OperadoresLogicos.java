

package javaBasico;

import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		
		/*Operadoress de asignacion */
		int num = 12;
		num = 45;
		num = Integer.parseInt("4");//vonvertir cadena a numero
		//System.out.println(num);
		
		//Operadores de comparacion
		
		int num1,num2;
		num1 = 10;
		num2 = 20;
		//System.out.println("num: "+ num1);
		//System.out.println("num: "+ num1);
		//operador== que nos permite compARAR
		//System.out.println(num1 == num2);
		//equals()
		
		//System.out.println(Objects.equals(num1,num2));
		
		// operadores de comparacion
		//<,>,<=,>=
		int num3,num4;
		num3 = 15;
		num4 = 20;
		
		//System.out.println(num3<num4);
		//System.out.println(num3>num4);
		//System.out.println(num3<=num4);
		//System.out.println(num3>=num4);
		
		if (num3<num4) {
			//codigo a ejecutar
			//System.out.println("Numero 3 es menor");
		}else {
			//System.out.println("Numero 3 es Mayor");
		}
		
		//!=
		//System.out.println(num3 != num4);
		
		boolean comparacion = num3 != num4;
		//System.out.println(comparacion);
		
		//operadores logicos
		/*And = &&: Ambos valores tienen que ser true para que regrese true
		 * OR = ||:Solo uno debe ser verdadero para que regrese un true
		 * NOT = !: Invierte resultado */ 
		
		System.out.println(true && true);
		
		System.out.println(true || true);
		
		System.out.println(!true && true);
		
		System.out.println(!(true && true));
		
		
	}

}
