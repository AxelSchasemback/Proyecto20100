

// **************************************************************//
// *********************     Functions     **********************//
// **************************************************************//

const tuCarrito = validarStorageCarrito()


const acumuladorCantidad = () => {
    const cantidadTotal = tuCarrito.reduce((acumuladorCantidad, tuCarrito) => acumuladorCantidad + tuCarrito.cant, 0)
    localStorage.setItem('acumularCantidadTotal', JSON.stringify(cantidadTotal))
    const cantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadTotal
}
acumuladorCantidad()

function validarStorageCarrito() {
    const validarStoragecart = JSON.parse(localStorage.getItem('carrito'))
        return validarStoragecart == null ? [] : JSON.parse(localStorage.getItem('carrito'))
}

let productos = []

fetch('data.json')
.then( (res) => res.json())
.then( (data) => {
    productos = data.productos
})


console.log(tuCarrito)


const botonDelCarrito = (id) => {
    console.log(id)
    const bottonOutStock = document.getElementById(`stock${id}`).innerHTML = "Out Stock"
    const buttonCompraDisabled = document.getElementById(`btnCart${id}`).innerHTML = `<button
    onclick= agregar()
    class="btn btn-outline-dark mt-auto" disabled>
    Add to cart
    </button> `
}

botonDelCarrito(10)

const validarStock = (id, cantidadPedida) => {
    console.log(id)
    localStorage.setItem('carrito', JSON.stringify(tuCarrito))
    acumuladorCantidad()
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


const agregar = (id) => {
    console.log(id)
    let productoSeleccionado = tuCarrito.find(producto => producto.id == id);
    if (!productoSeleccionado) {
        let nProd = productos.find(producto => producto.id == id)
        let nNombre = nProd.nombre;
        let nPrecio = nProd.precio;
        let nImg = nProd.img;
        tuCarrito.push({ id: id, cant: 1, nombre: nNombre, precio: nPrecio, img: nImg })
        validarStock(id, 1)
    } else {
        productoSeleccionado.cant = productoSeleccionado.cant + 1;
        validarStock(id, productoSeleccionado.cant)
    }
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
        onClick: function(){} // Callback after click
    }).showToast();
    console.log(tuCarrito)
}

// function botonDisabled () {
//     const recorrerCantidad = tuCarrito.find(( buscar ) => buscar.cant == 10)
//         console.log(recorrerCantidad)
//         botonDelCarrito(recorrerCantidad.id) 
//     }
// botonDisabled()


