/* let nombres = ["ANA", "MARIA", "JUAN"]

function porCadaUno(arrayDeElem, funcion) {
  for (const elem of arrayDeElem) {
    funcion(elem)
  }
}

porCadaUno(nombres, console.log)
porCadaUno(nombres, alert)
porCadaUno([2, 5, 8], console.log) */

/* function mayorQue(n) {
  return (m) => m > n
}

function retornada(m) {
  return m > 10
}

let mayorQueDiez = mayorQue(10)
// (m) => m > 10

let mayorQueCinco = mayorQue(5)
// (m) => m > 5
console.log(mayorQueCinco(4))


console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

function sumar(num1, num2) {
  return num1 + num2 // 7
}

let resultado = sumar(2, 5) */

// MÉTODOS DE ARRAYS
let personitas = [
  { id: 0, nombre: "", apellido: "lopez", edad: 27, mascotas: true },
  { id: 1, nombre: "", apellido: "lopez", edad: 27, mascotas: true },
  /* { id: 2, nombre: "juan", apellido: "perez", edad: 45, mascotas: false },
  { id: 3, nombre: "maría", apellido: "gomez", edad: 54, mascotas: true },
  { id: 4, nombre: "pedro", apellido: "martinez", edad: 23, mascotas: false }, */
]

let personas = personitas.map(personita => {
  return new Persona(personita.id, personita.nombre, personita.apellido, personita.edad, personita.mascotas)
})

/* console.log(personitas)
console.log(personas)
console.log(personas[0].nombreCompleto()) */

// FIND retorna UN elemento o undefined
/* let personaBuscada = personas.find(persona => persona.id === 2)
let personaBuscada2 = personas.find(persona => persona.id === 20)
console.log(personaBuscada2) */

// FILTER retorna un array de elementos [] [{...}] [{...}, {...}, {...}]
/* let personasMayoresDe30 = personas.filter(persona => persona.edad > 30)
console.log(personasMayoresDe30)

let personasConMascotas = personas.filter(persona => persona.mascotas)
console.log(personasConMascotas)

let personasSinMascotas = personas.filter(persona => !persona.mascotas)
console.log(personasSinMascotas)

let personasConAEnElNombre = personas.filter(persona => persona.nombre.toLowerCase().includes("a") || persona.apellido.toLowerCase().includes("a"))
console.log(personasConAEnElNombre)
 */

// SOME devuelve true o false
// console.log(personitas.some(persona => persona.nombre === "pedro"))

/* let personasModificadas = personas.map(persona => {
  return {id: persona.id, nombre: persona.nombre, apellido: persona.apellido}
})
console.log(personasModificadas)

let nombres = personas.map(persona => persona.nombreCompleto())
console.log(nombres) */

/* let totalEdades = personas.reduce((acum, persona) => acum + persona.edad, 0)
console.log(totalEdades) */

/* personas.sort((a, b) => {
  if (a.nombre < b.nombre) {
      return 1
  }
  if (a.nombre > b.nombre) {
      return -1
  }
  return 0
})
console.log(personas) */

/* personas = personas.map(persona => {
  let nombre = prompt("Ingrese nombre")
  return {id: persona.id, nombre: nombre, apellido: persona.apellido, edad: persona.edad, mascostas: persona.mascotas}
})
console.log(personas) */