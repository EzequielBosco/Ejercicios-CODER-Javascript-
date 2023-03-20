const arr = [{alumno:"ezequiel", edad: "23", materia: "fisica"},
             {alumno:"matias", edad: "20", materia: "matematica"}];
            
arr.push({alumno:"jorge", edad: "43", materia: "programacion"})
console.log(arr)

/* elementos dentro de un array */
for (const persona of arr) {
    console.log(persona)
    console.log(persona.edad)
}


const obj = {alumno:"ezequiel", edad: "23", materia: "fisica"};

/* propiedades dentro de un objeto */
for (const propiedad in obj) {
    console.log("Propiedad: " + obj[propiedad])
}
