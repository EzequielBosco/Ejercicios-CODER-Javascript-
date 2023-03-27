/* console.log(Math.PI)
console.log(Math.max(34, 65, 12, 98, 32, -10))
console.log(Math.min(34, 98, 32, -10))

let num = Math.random()
console.log(parseInt(num * 10))
console.log(Math.round(num * 10))
console.log(Math.ceil(num * 10))
console.log(Math.floor(num * 10))

console.log( Math.random() * 10 )
console.log( Math.random() * 10 + 30 ) */

/* console.log(new Date())
console.log(new Date(2022, 11, 24, 23, 59, 59))

let anio = 1995
let mes = 9
let dia = 7

let cumple = new Date(anio, mes - 1, dia)
console.log("MES: ", cumple.getMonth() + 1)
console.log("DIA: ", cumple.getUTCDay())

let fechaCumple = cumple.toLocaleString()
console.log(fechaCumple.substring(0, 8))

const inicio = new Date()

for (let i = 0; i < 1000; i++) {
  console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos") */

let products = [
  {
    id: 1,
    nombre: "pelota",
    categoria: "deportes",
    precio: 5000,
    stock: 3
  },
  {
    id: 2,
    nombre: "remera",
    categoria: "indumentaria",
    precio: 4500,
    stock: 5
  },
  {
    id: 3,
    nombre: "short",
    categoria: "indumentaria",
    precio: 8000,
    stock: 1
  },
  {
    id: 4,
    nombre: "campera",
    categoria: "indumentaria",
    precio: 6200,
    stock: 8
  },
  {
    id: 5,
    nombre: "lentes",
    categoria: "accesorios",
    precio: 1500,
    stock: 2
  },
  {
    id: 6,
    nombre: "gorra",
    categoria: "accesorios",
    precio: 2800,
    stock: 6
  },
  {
    id: 7,
    nombre: "pelota",
    categoria: "deportes",
    precio: 7000,
    stock: 0
  }
]

let productos = products.map(product => {
  return new Producto(product.id, product.nombre, product.categoria, product.precio, product.stock)
})

/* let categoria = prompt("Ingrese una categoria para filtrar productos").toLowerCase() */
// PARA PROPIEDAD QUE SEA ARRAY (para que funcione la siguiente linea la propiedad categoria tiene que ser array)
/* console.log(productos.filter(producto => producto.categoria.includes(categoria))) */
// PARA PROPIEDAD QUE SEA STRING
/* console.log(productos.filter(producto => producto.categoria === categoria)) */

/* let categorias = ["deportes", "indumentaria", "accesorios"]
console.log(categorias.includes("indumentaria")) */

// PRODUCTOS CON PRECIO ENTRE 4500 y 7000
/* console.log(productos.filter(producto => producto.precio >= 4500 && producto.precio <= 7000)) */

let carrito = []

let listaProductos = "Seleccione número de producto: \n0 para salir\n" + productos.map(producto => producto.id + " " + producto.nombre).join('\n')

let opcion
do {
  opcion = Number(prompt(listaProductos))
  let productoBuscado = productos.find(producto => producto.id === opcion)
  
  if (productoBuscado) {
    let posicionProductoBuscado = carrito.findIndex(producto => producto.id === productoBuscado.id)
    if (posicionProductoBuscado != -1) {
      carrito[posicionProductoBuscado].cantidadUnidades++
      carrito[posicionProductoBuscado].subtotal = carrito[posicionProductoBuscado].precioUnidad * carrito[posicionProductoBuscado].cantidadUnidades
    } else {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        cantidadUnidades: 1,
        precioUnidad: productoBuscado.precio,
        subtotal: productoBuscado.precio
      })
    }
  }
  console.log(carrito)
} while (opcion != 0)


