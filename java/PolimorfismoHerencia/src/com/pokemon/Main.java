package com.pokemon;

public class Main {

	public static void main(String[] args) {
		//Pokemon chikorita = new Pokemon (152,1,20,"Chikorita", false);
		//utilizando los metodos de instancia
//		chikorita.comer();
//		chikorita.atacar();
//		chikorita.dormir();
		
		System.out.println("-------------------------------");
		
		TipoPlanta chikorita2 = new TipoPlanta(152,1,20,"Chikorita", false,1);
		
		chikorita2.comer();
		chikorita2.atacar();
		chikorita2.dormir();
		chikorita2.envenenar();
		chikorita2.paralizar();
		
		System.out.println("-------------------------------");
		
		//instanciar
		Chikorita chikorita3 = new Chikorita (152,1,20,"Chikorita 3",false,1,8);
		chikorita3.comer();
		chikorita3.atacar();
		chikorita3.dormir();
		
		chikorita3.envenenar();
		chikorita3.paralizar();
		
		chikorita3.latigo();
		System.out.println("-------------------------------");
		
		Charmander charmander = new Charmander (4,3,50,"Charmander",false);
		charmander.comer();
		charmander.atacar();
		charmander.dormir();
		
		charmander.lanzaLlamas();
		charmander.volar();
		charmander.araniar();
	}
	
	

}
