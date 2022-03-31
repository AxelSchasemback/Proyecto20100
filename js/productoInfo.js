
const verCard = JSON.parse(localStorage.getItem("productoAVer"))

function mostrarElProducto (card){
    const containerCard = document.getElementById("showProduct")
        let verProducto = document.createElement('div')
        verProducto.className = "card"
        verProducto.innerHTML =`
<div class="row gx-4 gx-lg-5 align-items-center" style="margin: auto"<div>
<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="img/${card.img}" alt="..." style="height: 25em; width: 25em;"></div>
<div class="col-md-6">
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
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem" id=stock${card.id}>
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
mostrarElProducto(verCard)



