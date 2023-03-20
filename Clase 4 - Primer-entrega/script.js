/* 
function concatenarNombreYApellido(nombre, apellido) {
  if (!nombre || !apellido) {
    alert("NO PASASTE TODOS LOS PARAMETROS")
  } else {
    nombre + " " + apellido
  }
}

let nombrePersona = prompt("INGRESE NOMBRE")
let concatenacion = concatenarNombreYApellido(nombrePersona, "LOPEZ")
console.log(concatenacion) */

/* function sumar(num1, num2) {
  return num1 + num2
}

let resultado = sumar(4, 6)
console.log(resultado)
resultado = sumar(2, 2)
console.log(resultado)

let otroResultado = sumar(6, 9)
console.log(otroResultado) */

/* let hayAlgo = alert("HOLA") // recibe un parámetro y no retorna nada
console.log(hayAlgo)
let palabra = prompt("Ingrese una palabra") // retorna una valor
console.log(palabra) */

/* function esPar(numero) {
  if (numero % 2 === 0) { // 5 / 2 = 2 y sobra 1
    return true
  } else {
    return false
  }
}

let resultadoFuncion = esPar(8)
console.log(resultadoFuncion)

if (resultadoFuncion) { // si es true o si es false
  console.log("ES PAR")
} else {
  console.log("ES IMPAR")
} */

// (3 + 5) / (2 + 2) * (3 - 1)
function sumar(num1, num2) {
  return num1 + num2
}
// const sumar = (num1, num2) => { return num1 + num2 }

function restar(num1, num2) {
  return num1 - num2
}
// const restar = (num1, num2) => num1 - num2

function hallarResultadoFinal(n1, n2, n3, n4, n5, n6) {
  return sumar(n1, n2) / sumar(n3, n4) * restar(n5, n6)
}

console.log(sumar(3, 5))
console.log(sumar(2, 2))

let resultado = hallarResultadoFinal(3, 5, 2, 2, 3, 1)
console.log(resultado)

/* const sumar = function (num1, num2) { return num1 + num2 }
const restar = function (num1, num2) { return num1 - num2 }
const multiplicar = function (num1, num2) { return num1 * num2 }

// (3 + 5) / (3 - 2)
function hallarResultadoFinal(n1, n2, n3, n4, fn1, fn2) {
  return fn1(n1, n2) / fn2(n3, n4)
}
let resultado = hallarResultadoFinal(3, 5, 3, 2, sumar, restar)
console.log(resultado)

// (3 - 5) / (2 * 2)
let otroResultado = hallarResultadoFinal(3, 5, 3, 2, restar, multiplicar)
console.log(otroResultado) */
/* 
let nombreUsuario = prompt("Registre su user")
alert("Se registró con éxito el usuario " + nombreUsuario)

let nombreUsuarioIngresado = prompt("Ingrese user")
for (let i = 0; i < 3; i++) {
  if (nombreUsuario == nombreUsuarioIngresado) {
    alert("Bienvenido/a " + nombreUsuarioIngresado + "!")
    break
  } else {
    alert("Usuario incorrecto")
    nombreUsuarioIngresado = prompt("Ingrese user")
  }
}  */

/* let total = 0
let mensaje = "Nuestros productos\n1 - Naranja $400 x kg\n2 - Manzana $350 x kg"
let opcion = prompt(mensaje) */
