/* funcion: pedazo de codigo que podemos reutilizar
ingresas algun dato, lo procesa y sale de otra maneraa 
*/

function saludar(nombre = "panchito", apellido = ""){
   
    //string normal
     /* console.log('Hola mi nombre es: ', nombre, apellido) */; //templates String || Plantillas literales
   //platilla literal  permite hacer mas funciones 
   //console.log(`Hola mi nombre es: ${nombre?"Lizbeth":"Desconocido"}`);
   return `Mi nombre es: ${nombre} ${apellido}`
}
saludar("", "Rubio"); //invocacion o llamada de la funcion 

let funcionSaludar = saludar ('Felipe','Maqueda');
//console.log(funcionSaludar);
 //console.log(saludar('Alberto','Hernandez').toUpperCase());

 /*
document.write('<h1> Este es un h1</h1>');
console.log('<h1> Este es un h1</h1>');
console.log(`<h1> Este es un h1</h1>`); *///platilla literal


//console.log(funcionSaludar.toLocaleLowerCase());

/* Funcion declarada */
;
function suma(a,b){
    return a+b;

}
console.log(suma(10,20))
/* hoisting:
lo puede acomodar antes que lo inicialice la funcion  */


/* Funciones expresadas| funcion expresion */
const resta = function(a,b){
return a-b;
}
console.log(resta(90,10));

/* setTimeout(()=>{

}, 3000); */

/* funcion fecha */
const multiplicacion = (a,b) =>{
return a*b;
}
console.log(multiplicacion(40,5));