/* nivel 1 */

/* const anioNacimiento = parseFloat(prompt("Escribe tu año de nacimiento: "));
const anioAcutual = 2022;
console.log(anioAcutual-anioNacimiento);

console.log(`Tienes ${anioAcutual-anioNacimiento} años `); */

/* Nivel 2 */

/* opcion 1 */
/* const  anioActual = 2022;

function calcularEdad () {
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual-anioNacimiento} años `)
}
 */
/* opcion 2 */

/* const boton = document.getElementById("calcular")
console.log(boton);
boton.addEventListener("click",()=>{
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual-anioNacimiento} años `)
} ) */

/* Nivel 3 */

const fecha = new Date();
const anioActual = fecha.getFullYear()
console.log(anio);

const mesActual = fecha.getMonth()+1;
console.log(mes);

const diaActual = fecha.getMonth();
console.log(dia);

/* const anioActual = 2022
const mesActual = 4
const diaAcual = 27 */

function mostrarDatos() {
    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimientoDivididio = nacimiento.split("-")
    console.log(nacimientoDivididio);
    const anioNacimiento = parseInt(nacimientoDivididio[0]);
    const mesNacimiento = parseInt(nacimientoDivididio[1]);
    const diaNacimiento = parseInt(nacimientoDivididio[2]);
    console.log(anioNacimiento,mesNacimiento,diaNacimiento);

    if(mesNacimiento<=mesActual&&diaNacimiento<=diaAcual){
        console.log(`Tienes ${anioActual-anioNacimiento} años `)
    }
    else{
        console.log(`Tienes ${anioActual-anioNacimiento-1} años `)
    }

}