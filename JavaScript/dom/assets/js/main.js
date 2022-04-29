/*este es un nodo de comentario  */
const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p');
const $card = document.querySelector('.card')
//nodeName
console.log($titulo.nodeName);
console.log($parr.nodeName);

//textContent usar el contenido de un elemento o reasignarlo
console.log($parr.textContent);
$parr.textContent += "Hola mundo!"
console.log($parr.textContent);

$titulo.textContent = 'Modificando elementos con JavaScript '
//innerText -es mejor no usarla

//innerHTML agregar elementos dentro //RESMPLAZA LO QUE HAY DENTRO EL ELEMENTO SELECCIONADO
console.log($parr.innerHTML);
//$parr.innerHTML += '<a href = "#">Este e un nlace </a>'

//outer.HTML
$parr.innerHTML = '<a href = "#">Este es un Enlace </a>'; //REEMPLAZA TOSO, INCLUYENDO EL ELEMENTO SELECCIONADO 

//crear elementos de html

console.log(document);

function crearElemento (){
    const img = document.createElement('img')
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";
     
    //appendChild hacer uso de los elementos creados 
    $card.appendChild(img);
}

crearElemento()