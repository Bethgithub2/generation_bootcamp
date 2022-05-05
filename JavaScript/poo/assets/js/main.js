//plano que nos permite cerar nuestros objetos
//las clases siempre comienzan en mayuscula

class Persona{
    //atributos
    #id = 0;
    static #contador = 0;
    #nombre = "";//vaariable privada
    #edad = 0;
    #correo = "";
//en js no es necesario declararlos 

    constructor(nombre,edad,correo){
        //asignar datos el valor que pertenece a la clase
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo=correo;
        this.#id = ++Persona.#contador;
    }
    //setters & getters
    //set=fijar  & get= obtener
    //se usan y se llamas como si fueran atributos
//metodos:acciones que puede realizar el objeto

    get getNombre(){
        return this.#nombre;
    }
    get getEdad(){
        return this.#edad;
    }
    get getCorreo(){
        return this.#correo;
    }

    set setNombre(nombre){
        this.#nombre = nombre
    }
    set setEdad(edad){
        this.#edad = edad
    }
    set setCorreo(correo){
        this.#correo = correo
    }

    //metodos

    cambiarNombre(nombre){
        this.#nombre = nombre;
    }
  /*   cambiarEdad(edad){
        this.#edad = edad;
    }
    cambiarCorreo(correo){
        this.#correo = correo;
    } */
    #saludar(){
        let mensaje = `Hola mi nombre es ${this.#nombre}`
        return mensaje;
    }
    mostrarSaludo(){
        return this.#saludar()
    }
    static mostrarContador(){
        return Persona.#contador
    }
}
//crear objeto=instancia
const persona1 = new Persona("Lizbeth",25,"bethrubio2017@gamil.com");
const persona2 = new Persona("Alan",28,"alanjaime@gmail.com");
const persona3 = new Persona ('Martin',40,'martin@gvhdsds')
persona1.setNombre ='Jose';
persona2.setCorreo='bethru23487@gmail';
//persona1.cambiarNombre('Antonio')
 
/* persona1.cambiarEdad(56)
persona1.cambiarCorreo("dhvxdhvdxgh@hbvhv.com") */


console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());;
console.log(persona2.mostrarSaludo());
console.log(Persona.mostrarContador());
//console.log(persona.contador);



//solid codigo manteni ble ,legible, 
//responsabilidad unica> una sola clase haga una sola cosa
/* abierto o cerrado>la funcionalidad este protegida- el codigo no se tenga que cambiar.
3. sustusion liskov > los hijos deben ser iguales al padre

 */