alert("por fin")

const color = document.querySelector("#inputColor")
console.log(color)

color.addEventListener("change", function (e) {
    document.body.style.backgroundColor = e.target.value;
    /* funcion anonima */
})

const formulario = document.querySelector (#formulariodatos)

console.log(formulario)

formulario.addEventListener("submit",function (e){
    e.preventDefault() /* cortar la ejecucion */

    const datos = Object.fromEntries(
    new FormData (e.target)
    console.log(datos)
})