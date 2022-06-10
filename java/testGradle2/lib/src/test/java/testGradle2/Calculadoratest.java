package testGradle2;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName ("Test de la clase calculadora")
public class Calculadoratest {
			
		@Test
		@DisplayName ("Metodo para comprobar suma")
		public void sumaTest() {
			Calculadora sumaCalc = new Calculadora ();
			Assertions.assertEquals(2,sumaCalc.suma(1, 1),"El resultado deberia ser 2");
		}
		
		@Test
		@DisplayName ("Metodo para comprobar assertions")
		public void assertionTest() {
			//boolean calorBoolean = false;
			//assertTrue(valorBoolean);
			assertAll(
			"Encabezado",
			()-> assertEquals(2,1+3,"Deneria ser 2"),
			()-> assertTrue(false,"Deberia ser true")
					);
			
			
		}
		
	}


