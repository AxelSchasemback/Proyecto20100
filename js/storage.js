const actualizarCarrito = JSON.parse(localStorage.getItem('carrito'))
const carrito = actualizarCarrito
const cantidadStorage = JSON.parse(localStorage.getItem('acumularCantidadTotal'))
    const CantidadDelCarro = document.getElementById("cantidadCarrito").innerHTML = cantidadStorage