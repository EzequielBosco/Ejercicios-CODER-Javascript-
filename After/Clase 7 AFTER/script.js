// Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por pantalla.

/* let materias = ["Matemática", "Física", "Química", "Historia", "Lengua"]

let salida = "Yo estudio:\n"
for (const materia of materias) {
  // salida = salida + materia + "\n"
  salida += materia + "\n"
}
alert(salida) */

// Escribir un programa que almacene 3 asignaturas y su respectiva nota, y después las muestre por pantalla con el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una des las asignaturas del array y <nota> cada una de las correspondientes notas introducidas por el usuario.
/* let materias = []
for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ingrese materia número " + (i+1) + ":") 
  let nota = Number(prompt("Ingrese nota:"))
  materias.push({ nombre: nombre, nota: nota })
  //         nombre prop: valor,  nom p: valor
}
console.log(materias)

let salida = ""
for (const materia of materias) {
  salida += "En " + materia.nombre + " has sacado " + materia.nota + "\n"
}
alert(salida) */

/* let contador = 0
let acumulador = 0
for (let i = 0; i < 3; i++) {
  contador++
  let precio = Number(prompt("Ingrese precio a pagar"))
  // acumulador = acumulador + precio
  acumulador += precio
}
console.log(contador)
console.log(acumulador) */

// Escribir un programa que pregunte al usuario los números ganadores de la lotería primitiva, los almacene en un array y los muestre por pantalla ordenados de menor a mayor.
/* let numerosGanadores = [34, 12, 43, 1, 32, 22]
console.log(numerosGanadores.sort()) */

// Escribir un programa que almacene en un array los números del 1 al 10 y los muestre por pantalla en orden inverso separados por comas
/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.reverse())
console.log(numeros.reverse().join(", ")) */

// Escribir un programa que almacene el abecedario en un array, elimine las letras que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante.
/* let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
// indice      0    1    2    3    4    5    6 ...
// posiciones  1    2    3    4    5    6    7    8 ...
let letrasFinal = []
let numero = Number(prompt("Ingrese multiplo"))

for (let i = 0; i < letras.length; i++) {
  if (chequearPosicion(i+1, numero)) {
    letrasFinal.push(letras[i])
  }
}

function chequearPosicion(posicion, num) {
  if (posicion % num !== 0) {
    return true
  } else {
    return false
  }
}

console.log(letrasFinal) */

/* let materias = ["Matemática", "Física", "Química", "Historia", "Lengua"]
console.log(materias)
console.log(materias.join(", "))
alert(materias.join(", ")) */

// Escribir un programa que almacene en un array los siguientes precios, 50, 75, 46, 22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios
let numeros = [50, 75, 46, 22, 80, 65, 8]
numeros.sort((a, b) => a - b)

console.log("Longitud array: " + numeros.length)
console.log("El menor es " + numeros[0])
console.log("El mayor es " + numeros[numeros.length - 1])
