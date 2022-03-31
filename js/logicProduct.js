const validarStorageCarrito = () => {
    if (localStorage.getItem('tuCarrito') != null) {
        const storageProductos = JSON.parse(localStorage.getItem('tuCarrito'))
        return storageProductos
    }
    return []
}


const tuCarrito = validarStorageCarrito();
const allProducts = JSON.parse(localStorage.getItem('productos'))




const agregar = (id) => {
    let productoSeleccionado = tuCarrito.find(e => e.id == id);
    if (!productoSeleccionado) {
        let nProd = allProducts.find(e => e.id == id)
        let nNombre = nProd.nombre;
        let nPrecio = nProd.precio;
        let nImg = nProd.img;
        tuCarrito.push({ id: id, cant: 1, nombre: nNombre, precio: nPrecio, img: nImg })
        console.log(`se agrego al Carrito: ${allProducts[id].nombre} $${allProducts[id].precio}`)
        const CantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = 1
        localStorage.setItem('Carrito', JSON.stringify(tuCarrito))
    } else {
        productoSeleccionado.cant = productoSeleccionado.cant + 1;
        validarStock(id, productoSeleccionado.cant)
    }
    console.log(tuCarrito)
}



const validarStock = (id, cantidadPedida) => {
    localStorage.setItem('Carrito', JSON.stringify(tuCarrito))
    let catidadDeStock = allProducts[id].stock - cantidadPedida
    if (catidadDeStock > 0) {
        console.log('stock:' + catidadDeStock)
        console.log(`se agrego al Carrito: ${allProducts[id].nombre} $${allProducts[id].precio}`)
        const CantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadPedida
    }
    else if (catidadDeStock <= 0) {
            botonDelCarrito(id)
            const CantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadPedida
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