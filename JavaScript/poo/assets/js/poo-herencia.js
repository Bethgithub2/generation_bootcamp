class Pokemon{
    //atributos
    #nombre = '';
    #edad = 0;
    #evolucion =''  ;
    /* #tipo = '' */

    constructor (nombre,edad,evolucion,/* tipo */){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
        /* this.#tipo = tipo; */

    }
    get nombre(){
        return this.#nombre
    }
    //metodo
    atacar(){
        return console.log(`${this.#nombre},esta atacando`);
    }
    evolucionar() {
        /* || operador de corto circuito 
        //false => toma el valor de la izquierda
        //true => toma el valor de la derecha */
       // const EVOLUCION = this.#evolucion;
       let mensaje = '';
        
        if(this.#evolucion==''){

           mensaje = 'No puedo evolucionar';
            console.log(mensaje);
          
            
        } else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
            this.#nombre = this.#evolucion;
            console.log(mensaje);
        }
        
    }
    
}
/* //objeto
const charmander = new Pokemon('Charmander',2,'charmeleon','Fuego');
const bulbasaur = new Pokemon ('Bulbasaur',1,'Ivysaur', 'Planta');

console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
charmander.evolucionar();
console.log(charmander);
 */

//clase hija
class TipoFuego extends Pokemon{
    //atributos
    #tipo = '';
    constructor (nombre,edad,evolucion){
        super(nombre,edad,evolucion);
        this.#tipo ='Fuego';

    }
    atacar(){
        return console.log(`${this.nombre},esta lanzando un ataque de tipo ${this.#tipo}`);
    }
    

}

const charmander = new TipoFuego('Charmander',2,'charmeleon');
console.log(charmander);
charmander.atacar();
charmander.evolucionar();