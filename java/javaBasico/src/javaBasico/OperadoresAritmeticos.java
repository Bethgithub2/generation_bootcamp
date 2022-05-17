package javaBasico;

public class OperadoresAritmeticos {

	public static void main(String[] args) {
		//suma
		byte suma = 10 + 5;
		
		//resta
		int resta = 200 - 50;
		
		//multiplicacion
		int multiplicacion = 5 * 5 ;
		
		//division
		float division = 10 / 3f;
		
		//modulo %
		
		int modulo = 7%2;
		
		//Post incremento
		float numero = 10;
		numero ++;
		++numero;
		//preincremento 
		
		//decremento
		
		numero --;
		--numero;
		
		//numero = a numero +2
		numero +=2;
		
		numero -=10;
		
		//numero *=5
		numero *=6;
		
		numero/=3;
		//convertir numero a float
		numero = (float) numero / 7;
		
		
		System.out.println(suma);
		System.out.println(resta);
		System.out.println(multiplicacion);
		System.out.println(division);
		System.out.println(modulo);
		System.out.println(numero);
	} 

}
