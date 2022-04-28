//Escribe un ciclo anidado que imprima el siguiente patron

/* 
 *  
 * *  
 * * *  
 * * * *  
 * * * * *
 */

/* for (let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write('*');
        //console.log('ciclo hijo \n');
    }
   document.write('<br>');
} */

//Ejercicio 1

//Escribe un ciclo que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

/* let numeroPositivo = 10;
do {
    numeroPositivo = numeroPositivo - 0.5;
    console.log(numeroPositivo);
} while (numeroPositivo>0); */

//Ejercicio 2
//Imprime todos los números impares entre 1 y 100
//ulises

/* for (let i = 0; i <= 100; i++) {
    if(i%2!=0) {
        console.log('El numero ' + i + ' es impar');
    }
}
 */


//Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

/* let n=6;
let contador=1;
while (contador<=n) {
    document.write("["+contador+"]");
    contador++;
} */


//Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

let n=15;
let suma=0;

for(let i=1; i <=n; i++){
    suma=suma+i;
}
console.log(suma);
