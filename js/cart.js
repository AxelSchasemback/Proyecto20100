const storageCart = JSON.parse(localStorage.getItem('carrito'))

const remove = (id) => {
    // let sacarDelCarrito = JSON.parse(localStorage.getItem('carrito'))
    let carritoFinal = storageCart.filter( e => e.id != id)
    let cantidadTuCarrito = tuCarrito.cant - 1
    
    localStorage.removeItem('carrito')
    localStorage.setItem('carrito', JSON.stringify(carritoFinal))
}

const mostrarCardsEnElHTML = (cards) => {
    document.getElementById("listado-productos").innerHTML = cards;
};



function cardCarrito(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div id=stockCant${elementoDelArray.id} class="badge bg-dark text-white position-absolute" 
            style="top: 0.5rem; right: 0.5rem">
            ${elementoDelArray.cant}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="img/${elementoDelArray.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.nombre}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"></span>
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="remove(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        sacar un producto
                    </button>
                    <button 
                        onclick="irAlProducto(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        Ver producto
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

cardCarrito(storageCart)



