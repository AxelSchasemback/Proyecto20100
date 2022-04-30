

function mostrarElProducto(card) {
    const containerCard = document.getElementById("showProduct")
    containerCard.innerHTML =""
    let verProducto = document.createElement('div')
    verProducto.className = "card"
    verProducto.innerHTML = `
<div class="row gx-4 gx-lg-5 align-items-center" style="margin: auto"<div>
<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" 
src="img/${card.img}" alt="..." style="height: 25em; width: 25em;"></div>
<div class="col-md-6" style="margin: auto">
    <div class="small mb-1">SKU: BST-498</div>
    <h1 class="display-5 fw-bolder">${card.nombre}</h1>
    <div class="fs-5 mb-5">
        <span>$${card.precio}</span>
    </div>
    <p class="lead">lorem ipsum dolor sit amet, consectetur adipis lorem, 
    sed do eiusmod tempor incididunt ut labore lorem.
    Ut enim ad minim veniam,
    lorem ipsum dolor sit amet lorem,
    consectetur adipis lorem,
    sed do eius lorem. Ut enim ad minim </p>
    <div id=stock${card.id} class="badge bg-dark text-white position-absolute" 
            style="top: 0.5rem; right: 0.5rem">
            En Stock
            </div>
    <div class="d-flex" id=btnCart${card.id}>
        <button class="btn btn-outline-dark flex-shrink-0" type="button" Onclick= agregar(${card.id})>
            <i class="bi-cart-fill me-1"></i>
            Add to cart
        </button>
    </div>
</div>
</div>`
    containerCard.appendChild(verProducto)
}


fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        productos = data.productos
        const verCard = JSON.parse(localStorage.getItem("productoAVer"))
        mostrarElProducto(verCard)
        const buscoArrayVacio = productosSinStock.find(( vacio ) => vacio.id == verCard.id)
        if (buscoArrayVacio) {botonDelCarritoDisabled(buscoArrayVacio.id)}

const buscarRelacion = productos.filter(( buscar )=> buscar.categoria == verCard.categoria)
const objetoRelacion = buscarRelacion.find(( objeto )=>{
    const textoRelacion = document.getElementById("relacionNombre").innerHTML = `porque estas mirando ${objeto.categoria}`
    mostrarRelacion(objeto)
})
})

function mostrarRelacion(card) {
    const relatedCard = document.getElementById("ProductRelated")
    let verRelacion = document.createElement('div')
    verRelacion.className = "card"
    verRelacion.innerHTML = `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="img/${card.img}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${card.nombre}</h5>
                                    <!-- Product price-->
                                    ${card.precio}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                            <a OnClick=verProducto(${card.id}) href="verProducto.html" target="_BLANK" 
                            class="btn btn-outline-dark mt-auto" href="#">ver producto</a></div>
                                </div>
                        </div>
                    </div>`
    relatedCard.appendChild(verRelacion)
}

