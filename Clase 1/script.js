let concatenacion = "Hola " + "pepito"
// Hola pepipo tipo string
let otraConcatenacion = "Hola " + 5
// Hola 5 tipo string
let suma = 5 + 2
// 7 tipo number

/* let numero = 1
let nombre = "Juan"
console.log(numero)
console.log(nombre)

let num1 = prompt("Ingrese numero 1")
let num2 = prompt("Ingrese numero 2")
console.log(num1)
console.log(num2)

console.log(num1 + num2)
2 sino que es "2" */

let num = 1
let palabra = "computadora"
console.log(typeof num)
console.log(typeof palabra)

/* let valorNumerico = parseInt(prompt("ingrese un num"))
console.log(valorNumerico) */

let numeroIngresado = prompt("Ingrese numero 1")
// numeroIngresado tiene como valor "2"
numeroIngresado = Number(numeroIngresado)
// numeroIngresado tiene como valor 2

let numeroIngresado2 = Number(prompt("Ingrese numero 2"))
alert(numeroIngresado + numeroIngresado2)

// variables pueden ser de tipo Number, String, Boolean, etc
let tienePlata = false
tienePlata = true
console.log(tienePlata)

console.log(isNaN("Juan"))
console.log(isNaN(NaN))
console.log(isNaN(9))