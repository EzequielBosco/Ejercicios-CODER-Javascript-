do {
  var usuario = prompt("Ingrese su nombre: ")

  if (isNaN(usuario)) {
    alert("Su nombre de usuario ahora es: " + usuario);
    break;
  } else {
    alert("El nombre de usuario debe contener caracteres de texto, intente nuevamente");
  }
} while (usuario != isNaN(usuario))

function resultadosNotaNumerica (nota) {

  if (nota >= 0 && nota < 3) {
      alert("La nota ingresada es muy baja");
  }

  else if (nota >= 3 && nota < 5) {
      alert("La nota ingresada es insuficiente")
  } 

  else if (nota >= 5 && nota < 6) {
      alert("La nota ingresada es un casi apruebo")
  } 

  else if (nota >= 6 && nota < 7) {
      alert("La nota ingresada es un aprobado")
  } 

  else if (nota >= 7 && nota < 8) {
      alert("La nota ingresada es notable")
  } 

  else if (nota >= 8 && nota <= 9) {
      alert("La nota ingresada es notable")
  } 

  else if (nota > 9 && nota <= 10) {
      alert("La nota ingresada es exelente")
  } 
}

var notas = [];
var nota;

function calcularPromedioNotas () {
  do {
    var cantidadNotas = parseInt(prompt(usuario + " Ingrese la cantidad de notas que quiere promediar: "))

    if (cantidadNotas % 1 === 0) {
      alert(`Se van a promediar ${cantidadNotas} notas`)
      break;
    } else {
      alert("El texto ingresado debe ser un numero.")
    }
  } while (isNaN(cantidadNotas))

  let sumaNotas = 0;
  
  for (let i = 1; i <= cantidadNotas; i++) {

    do {
      nota = parseFloat(prompt(`Ingrese la nota ${i}`));

      if (isNaN(nota)) {
        alert(`La nota ${i} ingresada no es válida, vuelva a intentar`);
      } else {
        resultadosNotaNumerica(nota)
      }
    } while (isNaN(nota))

    notas.push(nota);

    sumaNotas += nota;
  }

  var promedio = sumaNotas / cantidadNotas;
  alert(`El promedio de las ${cantidadNotas} notas ingresadas (${notas}) es: ${promedio}`);
}

calcularPromedioNotas()