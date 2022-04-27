
/* const invertir = (palabra = "") => {
    if (palabra.length <=1) return console.warn('No ingresaste texto');

    if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra');
        
    

    let arreglo = palabra.split(""); //lo divide y lo convierte en un arreglo.
    let reverso = arreglo.reverse();
    let unir = reverso.join("");
    console.log(unir);

    return console.log(unir);
} */

//invertir('Hola mundo'); //mandar a llamar


/* 1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.  */
/* function palindromo(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromo("salas")); */ // es palindromo


/* 2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* function repetir(cadena){
    let cadenaRepetida = cadena.repeat(3);
    console.log(cadenaRepetida);
}
repetir("Hola mundo"); */

/* *** ejercicio 3 Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

/* let cadena = "Hola mundo";
function cortarcadena (cadena, numero){
    let extraida= cadena.substring (0,numero);
    console.log(extraida);
}

cortarcadena (cadena,6) */

/* Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/


/* const factorial = (numero=undefined)=>{
    if (numero === 0)return console.error("El número no puede ser 0");
    let factorial=1;
    for (let i=numero;i>1;i--){
        factorial *=i;
    }
    return console.log(`El factorial de ${numero} es ${factorial}`);
}
factorial (5); */




/* function factorial(n){
    if(n==1){
        return 1;
    } return n * factorial (n-1);} console.log(factorial(5)); */


    /* salas */