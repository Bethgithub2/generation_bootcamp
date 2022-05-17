package ciclos;

import javax.sound.midi.SysexMessage;

public class CicloFor {
	public static void main(String[] args) {
		
//		for(int i=0; i<5; i++) {
//			
//			System.out.println("Hola  " + i);
//		
//	}
//		for(int i=5; i>0; i--) {
//			System.out.println("Holax2  " + i);
//		}
//		
//		for (int i=0; i<20; i+=2) {//i=i+2;
//			System.out.println("Holax3  " + i);
//		}
		
		//continue&&break
		
		for (int i=0; i<10; i++) {
			
			if(i%2==1) {
				//continue;//saltar
				break;//detiene
			}
			
			System.out.println(i);
		}
		
}
}
