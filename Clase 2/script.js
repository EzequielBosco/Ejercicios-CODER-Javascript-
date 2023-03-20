let unNumero = 5
/* console.log(typeof 5)
console.log(typeof "5")
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 === 5) */

/* if (unNumero == 4) {
  console.log("Es verdadero")
}

let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = prompt("Ingrese user")

console.log(nombreUsuarioBD == nombreUsuarioIngresado)
if (nombreUsuarioBD == nombreUsuarioIngresado) {
  alert("Bienvenido")
} else {
  alert("Usuario incorrecto")
} */

/* let precio = 40
// valor es 40
// tipo de dato Number => numerico
let nombre = "Juan"
// valor es "Juan"
// tipo de dato String => cadena de caracteres
console.log(nombre) // veo el valor
console.log(typeof nombre) // veo el tipo de dato

if (precio < 20) {
  alert("El precio es menor que 20");
} else if (precio < 50) {
  alert("El precio es menor que 50");
} else if (precio < 100) {
  alert("El precio es menor que 100");
} else {
  alert("El precio es mayor que 100");
} */

/* console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false

console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false

let nombreUsuarioBD = "juanca95"
let contraseniaBD = "juan1234"
let nombreUsuarioIngresado = prompt("Ingrese user")
let contraseniaUsuarioIngresado = prompt("Ingrese contraseña")

if (nombreUsuarioBD == nombreUsuarioIngresado && contraseniaBD == contraseniaUsuarioIngresado) {
  alert("Bienvenido")
} else {
  alert("Usuario/contraseña incorrecto/s")
} */

// de 0 a 5 años inclusive pagan $100
// de 6 a 10 años inclusive pagan $200
// de 11 a 15 años inclusive pagan $300
// de 16 en adelante pagan $500

/* let edad = Number(prompt("Ingrese edad"))

if (!isNaN(edad)) {
  if (edad >= 0 && edad <= 5) {
    alert("Debe pagar $100")
  } else if (edad >= 6 && edad <= 10) {
    alert("Debe pagar $200")
  } else if (edad >= 11 && edad <= 15) {
    alert("Debe pagar $300")
  } else if (edad <= 80) {
    alert("Debe pagar $500")
  } else {
    alert("Debe tener como máximo 80 años")
  }
} else {
  alert("El valor ingresado no es un número")
} */

/* let verdura = prompt("ingrese la verdura que desea comprar").toLowerCase()

switch (verdura) {
  case "cebolla":
    alert("El kilo de cebolla sale $350")
    break
  case "zanahoria":
    alert("El kilo de zanahoria sale $500")
    break
  case "papas":
    alert("El kilo de papas sale $400")
    break
  default:
    alert("No tenemos la verdura ingresada")
    break
} */

let edad = Number(prompt("Ingrese edad"))
if (!isNaN(edad)) {
  if (edad >= 0 && edad <= 5) {
    alert("Debe pagar $100")
  } else if (edad >= 6 && edad <= 10) {
    alert("Debe pagar $200")
  } else if (edad >= 11 && edad <= 15) {
    alert("Debe pagar $300")
  } else if (edad <= 80) {
    alert("Debe pagar $500")
  } else {
    alert("Debe tener como máximo 80 años")
  }
} else {
  alert("El valor ingresado no es un número")
}

console.log("FIN")