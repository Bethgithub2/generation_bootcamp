const nombre = "Lizbeth";
const nombre2 = new String ("Lizbeth");
/* console.log(nombre.toLocaleLowerCase);
console.log(nombre2.toLocaleLowerCase); */

const persona = new Object(); /* declarar un nuevo objeto forma antiguA*/

persona.nombre = "Lizbeth"
persona.apellido ="Rubio"
persona.edad = "23"

console.log(persona);

const  nuevaPersona = {
    /* atributos o propiedades */
    nombreCompleto:{
    nombre:"Lizbeth",
    apellido:"Rubio"},
    edad: "23",
    pasatiempos: ["correr","hacer ejercicio","comer"],
    tieneTrabajo: false,
    /* metodo cuando guardamos una funcion */
    saludar: function(){
        console.log("Hola");
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1+n2}`);
    }
}
"Hola".length /* atributo o propiedad */
"Hola".toLowerCase()/* metodo */
console.log(nuevaPersona.edad); /* simples */
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[2]);


nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/* para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona);

/* agrgar nuevo atributo */
nuevaPersona.colorFavorito = "Azul"
console.log(nuevaPersona.colorFavorito);

console.log(nuevaPersona.hasOwnProperty("edad"));/* nos permite verificar si nuestro objeto tiene un cierto atributo */

console.log(Object.keys(nuevaPersona)); /* llaves */
console.log(Object.values(nuevaPersona));/* valores */

/* crear un objeto con mi nombre, edad, pasatiempo  */

