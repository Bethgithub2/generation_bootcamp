/* const url = "https://dog.ceo/api/breeds/image/random"

const imagen = document.getElementById('michi-imagen');
const btnMichi=document.querySelector('.btnMichi');

fetch(url).then(respuesta =>respuesta.json()).then(datos =>{
    console.log(datos);
    imagen.src = datos.message;
});

btnMichi.addEventListener('click',(e)) */


const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById('imagenPerrito');
const btnMichi = document.querySelector('.btn-michi');
// console.log(btnMichi);


btnMichi.addEventListener('click',(e)=>{
    e.preventDefault;
    fetch(url).then(respuesta => respuesta.json()).then(datos =>{
        imagen.src = datos[0].url;
    });
});