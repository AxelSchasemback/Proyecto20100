// **************************************************************//
// *********************     Functions     **********************//
// **************************************************************//

let tuCarrito = validarStorageCarrito()
let productosSinStock = sinStock()


const acumuladorCantidad = () => {
    const cantidadTotal = tuCarrito.reduce((acumuladorCantidad, tuCarrito) => acumuladorCantidad + tuCarrito.cant, 0)
    localStorage.setItem('acumularCantidadTotal', JSON.stringify(cantidadTotal))
    const cantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadTotal
}
acumuladorCantidad()

function sinStock() {
    const validarStorageStock = JSON.parse(localStorage.getItem('sinStock'))
    return validarStorageStock == null ? [] : JSON.parse(localStorage.getItem('sinStock'))
}


function validarStorageCarrito() {
    const validarStoragecart = JSON.parse(localStorage.getItem('carrito'))
    return validarStoragecart == null ? [] : JSON.parse(localStorage.getItem('carrito'))
}

let productos = []

fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        productos = data.productos
        const arrayVacio = productosSinStock.find( vacio => {
            botonDelCarrito(vacio.id) || []
        })
    })


const verProducto = (id) => {
    productoQueQuiereVer = productos.find(element => element.id === id);
    localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
}


for (let buscar of tuCarrito) {
    (buscar.cant) && botonDisabled(buscar.id)
}


function botonDisabled(id) {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            productos = data.productos
            const recorrerCantidad = tuCarrito.filter((buscar) => {
                (buscar.cant == productos[id].stock) && botonDelCarrito(buscar.id)
            })
        })
}



function botonDelCarrito(id) {
    const bottonOutStock = document.getElementById(`stock${id}`).innerHTML = "Out Stock"
    const buttonCompraDisabled = document.getElementById(`btnCart${id}`).innerHTML = `<button
    onclick= agregar()
    class="btn btn-outline-dark mt-auto" disabled>
    Add to cart
    </button> `
}


const agregar = (id) => {
    let productoSeleccionado = tuCarrito.find(producto => producto.id == id);
    if (!productoSeleccionado) {
        let nProd = productos.find(producto => producto.id == id)
        let nNombre = nProd.nombre;
        let nPrecio = nProd.precio;
        let nImg = nProd.img;
        tuCarrito.push({ id: id, cant: 1, nombre: nNombre, precio: nPrecio, img: nImg })
    } else {
        productoSeleccionado.cant = productoSeleccionado.cant + 1;
    }
    validarStock(id)
    Toastify({
        text: `Agregaste ${productos[id].nombre}`,
        duration: 2000,
        destination: "carrito.html",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #808080, #000000)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


const validarStock = (id) => {
    localStorage.setItem('carrito', JSON.stringify(tuCarrito))
    acumuladorCantidad()
    let stockProducto = localStorage.getItem(`storageEnStock${id}`) || productos[id].stock
        stockProducto = stockProducto - 1
        localStorage.setItem(`storageEnStock${id}`, stockProducto)
    if (stockProducto <= 0) {
        botonDelCarrito(id)
        const buscarStockVacio = tuCarrito.find(( buscar ) => buscar.id == id)
        productosSinStock.push(buscarStockVacio)
        localStorage.setItem(`sinStock`, JSON.stringify(productosSinStock))
    }
}

