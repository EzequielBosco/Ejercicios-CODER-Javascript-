/* let nombres = ["Juan", "Ana", "Maria", "Pedro"]
//                0       1        2        3
// elementos se posicionan desde 0 a .length-1

nombres[3] = "Marcos"
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])
console.log(nombres.length)

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i])
  nombres[i] = nombres[i] + " Perez"
  // nombres[i] += " Perez"
}

console.log(nombres) */

let nombres = ["Juan", "Ana", "Maria"]
// METODOS PARA AGREGAR ELEMENTOS
nombres.push("Pedro")
nombres.unshift("Carla", "Marcelo")

// ["Carla", "Marcelo", "Juan", "Ana", "Maria", "Pedro"]
//METODOS PARA ELIMINAR ELEMENTOS
nombres.shift()
nombres.pop()

// ["Marcelo", "Juan", "Ana", "Maria"]
// nombres.splice(1, 2)
/* let copiaParteNombres = nombres.slice(1, 3)
console.log(copiaParteNombres) */

/* let posicion = nombres.indexOf("Jorge")
console.log(posicion)

if (posicion != -1) {
  nombres.splice(posicion, 1)
} 
console.log(nombres) */

/* let numeros = [1, 2, 3]
console.log(numeros.join(" - ")) */

let personas = [
  { nombre: "Maria", apellido: "Lopez" },
  { nombre: "Juan", apellido: "Perez" },
  { nombre: "Ana", apellido: "Gomez" },
  { nombre: "Pedro", apellido: "" }
]

for (const persona of personas) {
  console.log(persona.nombre)
  console.log(persona.apellido)
}