const validarStorageCarrito = () => {
    if (localStorage.getItem('tuCarrito') != null) {
        const storageProductos = JSON.parse(localStorage.getItem('tuCarrito'))
        return storageProductos
    }
    return []
}


const tuCarrito = validarStorageCarrito();
const allProducts = JSON.parse(localStorage.getItem('productos'))


function buscarProducto() {
    
    const productosBuscados = document.getElementById("buscador").value.toUpperCase().trim();
    console.log(productosBuscados)
    const productosEncontrados = productos.filter((productos) => {
        
        return productos.nombre.toUpperCase().match(productosBuscados);
    })
    console.log(productosEncontrados)
    mostrarCards(productosEncontrados)
}






