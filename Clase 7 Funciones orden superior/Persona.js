class Persona {
  constructor (id, nombre, apellido, edad, mascotas) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.mascotas = mascotas
  }
  nombreCompleto () {
    return this.nombre + " " + this.apellido
  }
}