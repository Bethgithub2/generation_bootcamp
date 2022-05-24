package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		
		//List - ArrayList
		//picoparentesis
		System.out.println("\tList --- ArrayList");
		List <String> miArray = new ArrayList <String>();
		
		miArray.add("Luis");
		miArray.add("Jose");
		miArray.add("Oscar");
		miArray.add(1,"Lizbeth");
		
		//String elemento = miArray.remove(1);
		boolean elemento = miArray.remove("Jose");
		
		System.out.println(miArray);
		System.out.println(miArray.size());
		System.out.println(elemento);
		imprimir(miArray);
		
		/*wrappers
		 * long==>Long
		 * double==>Double
		 * int==>Integer
		 * boolean ===>Boolean
		 * 
		 * 
		 * */
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1);
		System.out.println(num2.getClass().getSimpleName());
		
		
		
		List<Integer> miArray2= new ArrayList<Integer>();
		//List<Object> miArray2= new ArrayList<Object>();
		miArray2.add(3);
		miArray2.add(13);
		miArray2.add(333);
		
		imprimir(miArray2);
		
		
		System.out.println("\tList --- HasSet");
		Set<String>miSet = new HashSet<String>();
		//no acepta elementos duplicados
		//no los guarda en un orden especifico
		//La coleccion que funciona mas rapido
		miSet.add("Jose");
		miSet.add("Jose");
		miSet.add("Jose");
		miSet.add("Paty");
		miSet.add("Jose");
		
		miSet.add("Gabriel");
		
		miSet.remove("Oscar");
		imprimir(miSet);
		System.out.println(miSet.contains("Yair"));
		
		//Map --HashMap-- indice
		//<Key/Llave,value/valor>
		
		System.out.println("\tMap --- HashMap");
		Map<String,Integer> miMap = new HashMap<String,Integer>();
		
		miMap.put("Valor 1", 50);
		miMap.put("Valor 1", 250);
		miMap.put("Valor 2", 485);
		miMap.put("Valor 3", 45);
		
		miMap.put("Valor 4", 4885);
		
		

		System.out.println(miMap);
		System.out.println(miMap.values());//todos los valores
		System.out.println(miMap.keySet());//todas las llaves

		System.out.println(miMap.get("Valor 1"));
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
		
		
		
	}
	
	public static void imprimir (Collection coleccion) {
		for(Object elemento : coleccion) {
			System.out.println("Elemento = " + elemento);
			
		}
		
	}
}
