fetch('data.json')
.then( (res) => res.json())
.then( (data) => {
    mostrarCards(data.productos)
})


function buscarProducto() {
    fetch('data.json')
.then( (res) => res.json())
.then( (data) => {
    productos = data.productos
    const nombreProductoBuscado = document.getElementById("buscador").value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.nombre.toUpperCase().match(nombreProductoBuscado);
    });
    mostrarCards(productosEncontrados);
})
}




function mostrarCards(productos) {
    const divProductos = document.getElementById("list-cards")
    divProductos.innerHTML = ""
    productos.forEach(element => {
        let card = document.createElement('div')
        card.className = "card"
        card.innerHTML = `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div id=stock${element.id} class="badge bg-dark text-white position-absolute" 
            style="top: 0.5rem; right: 0.5rem">
            En Stock
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="img/${element.img}">
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${element.nombre}</h5>
                    <!-- Product price-->
                    ${element.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center" id=btnCart${element.id}>
                <button 
                onclick= agregar(${element.id})
                class="btn btn-outline-dark mt-auto" href="#">
                Add to cart
                </button> 
                </div>
            </div>
            <a style="display: contents; margin: auto"
                        href="verProducto.html" target="_BLANK">
                        <button class="btn btn-outline-dark mt-auto"
                        onclick= verProducto(${element.id})>
                        Ver Producto
                        </button></a>
        </div>
    </div>
    </div>`
        divProductos.appendChild(card)
    })
}

