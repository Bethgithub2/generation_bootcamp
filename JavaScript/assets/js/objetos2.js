const Lizbeth = {
    nombreCompleto: {
        nombre: "Liz",
        apellido: "Rubio"
    },
    edad: 23,
    pasatiempos: ["comer","hacer ejercicio","ver pelis"]
}

const Mitzi = {
    nomCompleto: {
        nombre: "Mitzi",
        apellido: "Hernandez"
    },
    edad: 23,
    pasatiempo: ["jugar", "dibujar", "ver series"],
}

const victor = {
    nombreCompleto: {
      nombre: "Víctor Manuel",
      apellido: "Soto Alexander",
    },
    edad: 26,
    pasatiempos: ["anime", "leer", "tomar"],
  }

  const nuevaPersona = {
    nombreCompleto: {
    nombre: "Juan",
    apellido: "Vazquez"
    },
    edad: 30,
    pasatiempos: ["coches", "animales","música"],
  }

  const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiemp: ["Cine", "Musica", "Baile"],
  };
  
 
 const cohorte12 = [Lizbeth,Mitzi,victor,nuevaPersona,Katia]
 /* console.log(cohorte12[1]); */

for (i=0; i<cohorte12.length;i++){
/* console.log(cohorte12[i].pasatiempos.includes("leer")); */

if(cohorte12[i].pasatiempos.includes("leer")){
    console.log(cohorte12[i].nombreCompleto.nombre);
}
}