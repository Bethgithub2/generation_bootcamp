/* 
let tiempo = 3000
let datos
//setInterval()//ejecutar cada cierto tiempo




setTimeout(()=>{
    datos="Lizbeth"
    console.log(datos);
},tiempo)//solo una vez cada cierto tiempo , no es bloqueante//asincrona.

console.log(datos);
console.log("Hola"); */

const datos = [
    {
        nombre:"Lizbeth",
        edad: 25,
    },
    {
        nombre:"Alan",
        edad: 28,
    },
    {
        nombre:"Raul",
        edad: 25,
    },
]

function obtenerDatos(){
    /* setTimeout(()=>{
        return datos
    },3000)
     */

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (datos)
        },3000)
    })
}


/* obtenerDatos().then((datos) => {
    console.log(datos); //cuando se resuelva esto ha esto
}) */

async function obtenerDatosAsync(){
    const datosObtenidos = await  obtenerDatos()
    console.log(datosObtenidos);
}

 obtenerDatosAsync()