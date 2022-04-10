

// **************************************************************//
// *********************     Functions     **********************//
// **************************************************************//


function validarStorageCarrito() {
    const validarStoragecart = JSON.parse(localStorage.getItem('carrito'))
        return validarStoragecart == null ? [] : JSON.parse(localStorage.getItem('carrito'))
}

const acumuladorCantidad = () => {
    const cantidadTotal = tuCarrito.reduce((acumuladorCantidad, tuCarrito) => acumuladorCantidad + tuCarrito.cant, 0)
    localStorage.setItem('acumularCantidadTotal', JSON.stringify(cantidadTotal))
    const cantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadTotal
}

function productosFetch () {
    fetch('data.json')
    .then( (res) => res.json())
    .then( (data) => {
    mostrarCards(data.productos)
})
}



// const arregloDisabled = (id) => {
//     const productoDisabled = tuCarrito.find( disabled => disabled.id == id);
//     const productoDisableStock = tuCarrito[id].filter( disableStock => disableStock.stock == disableStock.cant )
//     productoDisableStock 
// }


const tuCarrito = validarStorageCarrito()

console.log(tuCarrito)





const agregar = (id) => {
    fetch('data.Json')
    .then( (res) => res.json())
    .then( (data) => {
    let productoSeleccionado = tuCarrito.find(producto => producto.id == id);
    if (!productoSeleccionado) {
        let nProd = data.productos.find(producto => producto.id == id)
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
        text: `Agregaste ${data.productos[id].nombre}`,
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
})
}

const validarStock = (id, cantidadPedida) => {
    fetch('data.Json')
    .then( (res) => res.json())
    .then( (data) => {
    localStorage.setItem('carrito', JSON.stringify(tuCarrito))
    acumuladorCantidad()
    let catidadDeStock = data.productos[id].stock - cantidadPedida
    if (catidadDeStock > 0) {
        localStorage.setItem(`storageEnStock${id}`, JSON.stringify(catidadDeStock))
        console.log('stock:' + catidadDeStock)
        console.log(`se agrego al Carrito: ${data.productos[id].nombre} $${data.productos[id].precio}`)
    }
    else if (catidadDeStock <= 0) {
        botonDelCarrito(id)
        console.log('no tenemos suficiente stock')
    }
})
}



// pendiente, agregar un cantidad = 10 = a botonDelCarrito

const botonDelCarrito = (id) => {
    document.getElementById(`stock${id}`).innerHTML = "Out Stock"
    const buttonProductos = document.getElementById(`btnCart${id}`).innerHTML = `<button
    onclick= agregar(${id})
    class="btn btn-outline-dark mt-auto" disabled>
    Add to cart
    </button> `
}




