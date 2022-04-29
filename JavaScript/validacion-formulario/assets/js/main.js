const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form")
//console.log(formulario);

const inputs = document.querySelectorAll("input")
//console.log(inputs);

const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telError = document.querySelector("#errorTel");

/* console.log(telError);
console.log(nombreError);
console.log(apellidoError);
console.log(emailError);
console.log(passwordError); */

//guardar si los datos estan correctos
const statusInf = {
	nombre : false,
	apellido : false,
	email : false,
	password : false,
	telefono : false
}



inputs.forEach((input)=>{
	//console.log(input);
	input.addEventListener("keyup",(e)=>{
		//console.log(e.target.name);


		switch(e.target.name){
			case "nombre":
			//console.log(e.target.value);
			if(expresiones.nombre.test(e.target.value)){
				statusInf.nombre = true
				//console.log("Nombre correcto");
				nombreError.textContent = ""
			}
			else{
				statusInf.nombre = false
				//console.log("Nombre incorrecto");
				nombreError.textContent = "Error"
			}

			break
			case "apellido":
			//console.log(e.target.value);
			if(expresiones.nombre.test(e.target.value)){
				statusInf.apellido = true
				//console.log("Apellido correcto");
				apellidoError.textContent = ""

			}
			else{
				//console.log("Apellido incorrecto");
				statusInf.apellido = false
				apellidoError.textContent = "Error"
			}
			break
			case "email":
			//console.log(e.target.value);
			if(expresiones.email.test(e.target.value)){
				statusInf.email = true
				//console.log("email correcto");
				emailError.textContent = ""
			}
			else{
				//console.log("email incorrecto");
				statusInf.email = false
				emailError.textContent = "Error"
			}
			break
			case "pasword":
			//console.log(e.target.value);
			if(expresiones.password.test(e.target.value)){
				statusInf.password = true
				//console.log("password correcto");
				passwordError.textContent = ""
			}
			else{
				//console.log("password incorrecto");
				statusInf.password = true
				passwordError.textContent = "Error"
			}
			break
			case "telefono":
			//console.log(e.target.value);
			if(expresiones.telefono.test(e.target.value)){
				statusInf.telefono = true
				//console.log("telefono correcto");
				telError.textContent = ""
			}
			else{
				//console.log("telefono incorrecto");
				statusInf.telefono = false;
				telError.textContent = "Error";
			}
			break


		}

	})
	
})


formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	/* console.log(Object.values(statusInf);
	console.log(Object.values(statusInf).includes(false)); */
	const check = document.querySelector("#terminos").checked
	//console.log(check);
	if (Object.values(statusInf).includes(false) && check == true){
		//console.log("Enviado");
		document.querySelector(".alert-danger").style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formulario.reset()

//desaparece
	}
	else{
		//console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block"
//ocupa el ancho de la pantalla 
	}
	
})





