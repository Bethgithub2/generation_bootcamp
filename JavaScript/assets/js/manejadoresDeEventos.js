
window.addEventListener('load', function(){
    this.alert('Se ha terminado de cargar la pagina');
});








function saludar(){
    alert('Hola')
}

/* Manejador de eventos semanticos */
const $botonsemantico = document.getElementById('evento-semantico');
$botonsemantico.onclick = saludar;

$botonsemantico.onclick = function (evento){
    /* alert('hola desde un manejador semantico') */
    console.log(evento.target);/* lugar desde donde se origina el evento */
}

/* Manejador de eventos multiple */
const $botonmultiple = document.getElementById('evento-multiple');

$botonmultiple.addEventListener('click', saludarMultiple);

$botonmultiple.addEventListener('click', function (e){
    console.log(e.target);
})

function saludarMultiple (){
    alert('hola desde manejador multiple')
}

/*  */