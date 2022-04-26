/*PROPIEDADES Algunas cosas que podemos hacern con DOM */
console.log(window.document);
console.log(document);
console.log(document.head);//regresa el head del documento
console.log(document.body);//regresa el body
console.log(document.documentElement);//regresa todo el html
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);//links de lA pagina
console.log(document.images);//imagenes que tenemos
console.log(document.styleSheets); //documentos de css que tenemos
console.log(document.scripts);//regresa etiquetas script

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000); //retardar una accion

document.write('Hola mundo desde document write'); //escribir e el texto pero no es una buena practica
document.write('<h2>Hola mundo desde document write </>');//solamente en desarrollo

console.log(document.getSelection().toString());