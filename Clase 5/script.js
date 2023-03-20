const persona = {
  nombre: "Juan",
  edad: 30,
  estadoCivil: "Soltero",
  mayorDeEdad: true,
  sangre: {
    tipo: "A",
    factor: "+"
  }
}

// Notación de punto .
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.mayorDeEdad)
// alert(persona.sangre.tipo + persona.sangre.factor)

persona.nombre = "Homero"
console.log(persona.nombre)

persona.apellido = "Perez"
console.log(persona.apellido)

// persona.nombre || persona["nombre"] es exactamente igual
// Notación de corchetes []
// nombreDePropIngresado = "nombre" || "edad" || "apellido"
// no puedo persona[nombre]
let nombreDePropIngresado = prompt("Ingrese nombre de la propiedad")
console.log(persona[nombreDePropIngresado])

/* const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30
}
// key va a ser "nombre", después "apellido" y finalmente va a ser "edad"
for (const propiedad in persona) {
  // console.log(propiedad)
  console.log(propiedad, ": ", persona[propiedad]) // console.log(persona["nombre"])
}
console.log(persona["nombre"])
console.log(persona["apellido"])
console.log(persona["edad"]) */

/* function Persona(nombre, apellido, edad) {
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido
  }
}

function nombreCompleto(nombre, apellido) {
  return nombre + " " + apellido
}
console.log("Juan", "Perez")
*/

/* class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.casada = false
  }
  nombreCompleto() {
    return this.nombre + " " + this.apellido
  }
}

const persona1 = { nombre: "Juan", apellido: "Perez", edad: 30 }
const persona2 = new Persona("Juan", "Perez", 30)

console.log(persona1)
console.log(persona2)
console.log(persona2.nombreCompleto()) */
