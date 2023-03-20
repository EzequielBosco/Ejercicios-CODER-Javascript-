// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números desde 1 hasta ese número separados por comas

/* let cantidadVeces = Number(prompt("Ingrese numero"))
let salida = ""
for (let i = 0; i < cantidadVeces; i++) {
  salida = salida + (i + 1) + ", "
}
// 1, 
// 1, 2, 
// 1, 2, 3, 
console.log(salida.substring(0, salida.length - 2) + ".") */

// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.
/* let monto = Number(prompt("Ingrese monto a invertir"))
let interesAnual = Number(prompt("Ingrese interés anual (por ej: si es 20% ingrese 20"))
let tiempo = Number(prompt("Ingrese cantidad de años a invertir"))
let total = 0

// 1000 10% 3 1100 1110 1221
let interesPorcentaje = 1 + interesAnual / 100 // 20 1.2

for (let i = 0; i < tiempo; i++) {
  total = total + monto * interesPorcentaje
}

console.log(total) */

// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un número primo o no
/* let esPrimo = true
let numero = Number(prompt("Ingrese un numero p/ ver si es primo"))

for (let i = 2; i < numero / 2; i++) {
  if (!averiguarSiEsPrimo(numero, i)) {
    esPrimo = false
    break
  }
}

if (esPrimo) {
  console.log("El numero ingresado es primo")
} else {
  console.log("El numero ingresado no es primo")
}

function averiguarSiEsPrimo(numero, iteracion) {
  if (numero % iteracion === 0) {
    return false
  } else {
    return true
  }
} */

/* let mensajeGeneral = "Verdulería Juan\n1 - para ver productos\n2 - para ver el total\n3 - para finalizar compra\n0 - para salir"
let listaProductos = "1 - Naranja $350\n2 - Manzana $400\n3 - Durazno - $500"

let opcion
let total = 0
do {
  opcion = pedirOpcion(mensajeGeneral)
  switch (opcion) {
    case 1:
      let producto = pedirOpcion(listaProductos)
      switch (producto) {
        case 1:
          total = total + 350
          break
        case 2:
          total = total + 400
          break
        case 3:
          total = total + 500
          break
        case 0:
          break
        default:
          break
      }
      break
    case 2:
      alert("El total a pagar es: " + total)
      break
    case 3:
      alert("Gracias por su compra")
      total = 0
      break
    default:
      alert("Ingrese una opción correcta")
      break
  }
} while (opcion !== 0 && opcion !== 3)

function pedirOpcion(mensaje) {
  return Number(prompt(mensaje))
} */

// turno dura 30 minutos

let mensaje = "CLINICA JUAN\n1 - turno cardiología\n2 - turno kinesiología\n3 - turno consulta médica\n0 para salir"
let opcion
let tiempoEspera
do {
  let numeroTurno = Number(prompt("Ingrese numero de turno"))
  opcion = prompt(mensaje)
  switch (opcion) {
    case "1":
      informarDemora(30, numeroTurno)
      break;
    case "2":
      informarDemora(60, numeroTurno)
      break
    case "3":
      informarDemora(15, numeroTurno)
      break
    default:
      break;
  }
} while (opcion !== 0)

function informarDemora(tiempoEsperaEspecialidad, numeroDeTurno) {
  let tiempoEspera = numeroDeTurno * tiempoEsperaEspecialidad / 60
  console.log("Debe esperar " + tiempoEspera + " horas")
}


