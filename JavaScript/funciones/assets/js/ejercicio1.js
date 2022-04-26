
const invertir = (palabra = "") => {
    if (palabra.length <=1) return console.warn('No ingresaste texto');

    if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra');
        
    

    let arreglo = palabra.split(""); //lo divide y lo convierte en un arreglo.
    let reverso = arreglo.reverse();
    let unir = reverso.join("");
    console.log(unir);

    return console.log(unir);
}

invertir('Hola mundo'); //mandar a llamar

