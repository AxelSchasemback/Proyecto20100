// *************************************************************//
// *********************    constructor    *********************//
// *************************************************************//
class Producto {
    constructor(id, categoria, nombre, precio, stock) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.img = img;
    }
}

// *************************************************************//
// **********************    Producto    ***********************//
// *************************************************************//
const productos = [
    { id: 0, categoria: 'Mouse', nombre: 'Mouse HyperX', precio: 4000, stock: 10, img: 'MOUSE_HYPERX.jpg' },
    { id: 1, categoria: 'Mouse', nombre: 'Mouse Logitech', precio: 7500, stock: 10, img: 'MOUSE_LOGITECH.jpg' },
    { id: 2, categoria: 'Mouse', nombre: 'Mouse Redragon', precio: 5000, stock: 10, img: 'MOUSE_REDRAGON.jpg' },
    { id: 3, categoria: 'Mouse Pad', nombre: 'Mouse Pad HyperX', precio: 1200, stock: 20, img: 'MOUSE_PAD_HYPERX.jpg' },
    { id: 4, categoria: 'Mouse Pad', nombre: 'Mouse Pad Logitech', precio: 2500, stock: 20, img: 'MOUSE_PAD_LOGITECH.jpg' },
    { id: 5, categoria: 'Mouse Pad', nombre: 'Mouse Pad Redragon', precio: 2250, stock: 20, img: 'MOUSE_PAD_REDRAGON.jpg' },
    { id: 6, categoria: 'Teclado', nombre: 'Teclado HyperX', precio: 4800, stock: 10, img: 'TECLADO_HYPERX.jpg' },
    { id: 7, categoria: 'Teclado', nombre: 'Teclado Logitech', precio: 6000, stock: 10, img: 'TECLADO_LOGITECH.jpg' },
    { id: 8, categoria: 'Teclado', nombre: 'Teclado Redragon', precio: 8000, stock: 10, img: 'TECLADO_REDRAGON.jpg' },
    { id: 9, categoria: 'Procesador', nombre: 'Procesador AMD RYZEN 5 3600', precio: 32150, stock: 10, img: 'AMD_RYZEN5.jpg' },
    { id: 10, categoria: 'Procesador', nombre: 'Procesador Intel Core i3', precio: 18000, stock: 10, img: 'INTEL_CORE_I3.jpg' },
    { id: 11, categoria: 'Placa Video', nombre: 'Placa de Video PNY GeForce GTX 1650 4GB GDDR6', precio: 54500, stock: 10, img: 'PLACA_GTX1650.jpg' },
    { id: 12, categoria: 'Placa Video', nombre: 'Placa de Video XFX Radeon RX 6500 XT 4GB', precio: 62000, stock: 10, img: 'PLACA_RADEON.jpg' },
    { id: 13, categoria: 'ram', nombre: 'Memoria Team DDR4 8GB 2666MHz', precio: 6000, stock: 10, img: 'RAM_TEAM_8GB.jpg' },
    { id: 14, categoria: 'ram', nombre: 'Memoria Team DDR4 16GB 2666MHz', precio: 9820, stock: 10, img: 'RAM_TEAM_16GB.jpg' },
    { id: 15, categoria: 'monitor', nombre: 'Monitor Gamer ViewSonic 24" VX2458-MHD 144Hz', precio: 43620, stock: 10, img: 'MONITOR_VIEWSONIC24.jpg' },
    { id: 16, categoria: 'monitor', nombre: 'Monitor Gamer ViewSonic 27" XG2705 144Hz', precio: 67960, stock: 10, img: 'MONITOR_VIEWSONIC27.jpg' },
]


// **************************************************************//
// *********************     Functions     **********************//
// **************************************************************//


const validarStorageCarrito = () => {
    const validarStoragecart = JSON.parse(localStorage.getItem('carrito'))
        validarStoragecart == null && []
}

const acumuladorCantidad = () => {
    const cantidadTotal = tuCarrito.reduce((acumuladorCantidad, tuCarrito) => acumuladorCantidad + tuCarrito.cant, 0)
    localStorage.setItem('acumularCantidadTotal', JSON.stringify(cantidadTotal))
}


const storageCarrito = validarStorageCarrito()
const tuCarrito = []



const agregar = (id) => {
    let storageCarrito = JSON.parse(localStorage.getItem('carrito'))
    let validarStorage = storageCarrito == null && []
    let productoSeleccionado = tuCarrito.find(e => e.id == id);
    if (!productoSeleccionado) {
        let nProd = productos.find(e => e.id == id)
        let nNombre = nProd.nombre;
        let nPrecio = nProd.precio;
        let nImg = nProd.img;
        tuCarrito.push({ id: id, cant: 1, nombre: nNombre, precio: nPrecio, img: nImg })
        validarStock(id, 1)
    } else {
        productoSeleccionado.cant = productoSeleccionado.cant + 1;
        validarStock(id, productoSeleccionado.cant)
    }
    console.log(tuCarrito)
}




const validarStock = (id, cantidadPedida) => {
    localStorage.setItem('carrito', JSON.stringify(tuCarrito))
    acumuladorCantidad()
    const cantidadStorage = JSON.parse(localStorage.getItem('acumularCantidadTotal'))
    const CantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadStorage
    let catidadDeStock = productos[id].stock - cantidadPedida
    if (catidadDeStock > 0) {
        localStorage.setItem(`storageEnStock${id}`, JSON.stringify(catidadDeStock))
        console.log('stock:' + catidadDeStock)
        console.log(`se agrego al Carrito: ${productos[id].nombre} $${productos[id].precio}`)
    }
    else if (catidadDeStock <= 0) {
        botonDelCarrito(id)
        console.log('no tenemos suficiente stock')
    }
}



const botonDelCarrito = (id) => {
    document.getElementById(`stock${id}`).innerHTML = "Out Stock"
    const buttonProductos = document.getElementById(`btnCart${id}`).innerHTML = `<button
    onclick= agregar(${id})
    class="btn btn-outline-dark mt-auto" disabled>
    Add to cart
    </button> `
}