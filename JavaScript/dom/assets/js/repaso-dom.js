
const $padre = document.querySelector('.padre');
//getElementaryById es mas rapido que querySelector y querySelectorAll
/* 
#llamar un id
. llamar una clase.

*/
//2.crear eun elemento =FORMA MAS CORRECTA
const $parr = document.querySelector('p');
//3.crear contenido dentro del elemento creado
/* $parr.textContent = ' Lorem ipsum';
$parr.textContent += ' Lorem ipsum';
$parr.textContent += ' Lorem ipsum'; */
//seleccionar el elemento dentro del cual queremos que se agregue texto
//$padre.appendChild($parr); //agregarle hijos al elemento padre

//innerHTML: Nos permite agregar elementos html dentro de un elemento que seleccionemos .

const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML = ''; //inicializar el contenido del elemento.
$cuadro.innerHTML = `
                    <a href = "#">Este es un enlace</a>
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                    </ol>
                    `;


const estaciones = ['Primavera','Verano','Otoño','Invierno'];

const $lista = document.createElement('ul');

estaciones.forEach(elemento =>{
    const $li = document.createElement ('li');
    $li.textContent = elemento;
    $lista.appendChild($li);


});
$cuadro.appendChild($lista)
//document.body.appendChild($lista);

//////////////////////////////////
 const continentes = ['Africa','America','Asia','Europa','Oceania'];

 const $ol = document.createElement('ol');
 $cuadro.appendChild($ol);

 continentes.forEach(continentes =>{$ol.innerHTML += `<li>${continentes}</li>`})

 