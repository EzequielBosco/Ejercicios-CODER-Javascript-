let productos = [
  {
    id: 1,
    nombre: "pelota",
    categoria: "deportes",
    precio: 5000,
    stock: 3,
    img: "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg" 
  },
  {
    id: 2,
    nombre: "remera",
    categoria: "indumentaria",
    precio: 4500,
    stock: 5,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp" 
  },
  {
    id: 3,
    nombre: "short",
    categoria: "indumentaria",
    precio: 8000,
    stock: 1,
    img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/08/22/5faa5b9aaa15a.jpeg"
  },
  {
    id: 4,
    nombre: "campera",
    categoria: "indumentaria",
    precio: 6200,
    stock: 8,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45cda144/products/LO_IFW22099/LO_IFW22099-1.JPG"
  },
  {
    id: 5,
    nombre: "lentes",
    categoria: "accesorios",
    precio: 1500,
    stock: 2,
    img: "https://stylewatch.vtexassets.com/arquivos/ids/213324/Lentes_de_lectura_BplusD_BD222578_01.jpg"
  },
  {
    id: 6,
    nombre: "gorra",
    categoria: "accesorios",
    precio: 2800,
    stock: 6,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa22994f3/products/UA_1305457-408/UA_1305457-408-1.JPG"
  },
  {
    id: 7,
    nombre: "pelota",
    categoria: "deportes",
    precio: 7000,
    stock: 0,
    img: "https://monterosport.com.ar/wp-content/uploads/2016/10/pelota-de-fubol-cuero-nacional.jpg"
  }
]

/* console.log(document)
console.dir(document.body) */
/* let contenedorPaises = document.getElementById("paises")
console.log(contenedorPaises)
console.dir(contenedorPaises.id) */

/* let paises = document.getElementsByClassName("pais")
console.dir(paises)
console.dir(paises.length)

for (const nombreNodo of paises) {
  console.log(nombreNodo.innerText)
} */

/* let paises = document.getElementsByTagName("div")
console.log(paises) */

/* let contenedorPaises = document.getElementById("paises")
console.log(contenedorPaises.innerText)
contenedorPaises.innerHTML = contenedorPaises.innerHTML + "<div class='pais'>ESPAÑA</div>"
console.log(contenedorPaises.innerText) */

let contenedor = document.getElementById("contenedorProductos")
productos.forEach(producto => {
  let tarjetaProducto = document.createElement("div")
  tarjetaProducto.className = "tarjetaProducto"
  tarjetaProducto.id = producto.id
  
  let mensaje = `Quedan ${producto.stock} unidades`
  if (producto.stock < 5) {
    mensaje = "ULTIMAS UNIDADES"
    tarjetaProducto.classList.add("rojo")
  }

  tarjetaProducto.innerHTML = `
    <h2 class=tituloProducto>${producto.nombre}</h2>
    <p>${producto.categoria}</p>
    <img src=${producto.img}>
    <h3>PRECIO: ${producto.precio}</h3>
    <p>${mensaje}</p>
  `
  contenedor.appendChild(tarjetaProducto)
})

// OTROS METODOS PARA CAPTURAR NODOS CON NOTACIÓN CSS
let todasLasTarjetas = document.querySelectorAll(".tarjetaProducto")
console.log(todasLasTarjetas)
todasLasTarjetas.remove()

let unElemento = document.querySelector("#contenedorProductos")
console.log(unElemento)