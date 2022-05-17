package com.calculadora;



public class PruebaCalculadora {

	public static void main(String[] args) {
		
		System.out.println("Vamos a calcular");
		//instanciar-crear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
		//metodo que no retorna nada voud
		cal.sumarMensaje();
		//metodo que ingresa un valor
		String mensaje = cal.mensaje();
		System.out.println(mensaje);
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		//metodos con argumentos
		int suma = cal.sumar(10, 20);
		System.out.println(suma);
		
		cal.sumarM(8,5);
		
		int resta = cal.restar(8,1);
		System.out.println(resta);
		
		//instanciar
		//objeto creado a partir de la clase Areas
		Areas calAreas = new Areas();
		calAreas.mensaje();
		
		int areaCuadrado = calAreas.areaCuadrado(10);
		System.out.println(areaCuadrado);
		
		double areaT = calAreas.areaTriangulo(5, 10);
		System.out.println(areaT);

	}

}
