/* let numero = 10
numero = numero + 1
numero += 1
numero++ */

/* let cantidad = Number(prompt("Ingrese la cantidad de veces que quiere ver ejecutar"))
let porcentaje = Number(prompt("Ingrese el porcentaje a incrementar"))

for (let i = 0; i < cantidad; i++) {
  let numero = Number(prompt("Ingrese un numero para incrementar: "))
  alert(numero * (1 + porcentaje / 100))
} */

/* for (let i = 10; i > 0; i--) {
  console.log(i)
} */

/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  console.log(i)
} */


/*
let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = prompt("Ingrese user")
let contador = 1
while (contador < 3) {
  if (nombreUsuarioBD == nombreUsuarioIngresado) {
    break
  }
  nombreUsuarioIngresado = prompt("Ingrese user")
  contador++
} */

/* let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = ""
let contador = 0
do {
  nombreUsuarioIngresado = prompt("Ingrese user")
  contador++
} while (contador < 3 && nombreUsuarioBD != nombreUsuarioIngresado)

if (nombreUsuarioBD == nombreUsuarioIngresado && contador <= 3) {
  alert("BIENVENIDO " + nombreUsuarioBD)
} else {
  alert("Intente nuevamente más tarde")
} */

/* let opcion = 0
do {
  let num1 = 0
  let num2 = 0
  // let num1 = Number(prompt("ingrese valor número 1: "))
  // let num2 = Number(prompt("ingrese valor número 2: "))
  let menu = "1 - para sumar\n2 - para restar\n3 - para multiplicar\n4 - para ingresar valores\n0 - para salir"
  alert(menu)

  opcion = Number(prompt("ingrese la opción: "))
  while (isNaN(opcion)) {
    opcion = Number(prompt("ingrese un número correcto: "))
  }
  if (opcion === 1) {
    alert("La suma es: " + (num1 + num2))
  } else if (opcion === 2) {
    alert("La diferencia es: " + (num1 - num2))
  } else if (opcion === 3) {
    alert("El producto es: " + (num1 * num2))
  }
  else if (opcion === 4) {
    num1 = Number(prompt("ingrese valor número 1: "))
    num2 = Number(prompt("ingrese valor número 2: "))
  }
} while (opcion != 0) */

let numero = Number(prompt("Ingrese numero para ver su tabla del 1 al 10"))
for (let i = 0; i < 10; i++) {
  console.log(numero + " X " + (i + 1) + " = " + (numero * (i + 1))) 
}

console.log("OTRAS INSTRUCCIONES")


