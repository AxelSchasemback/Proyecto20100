let storageCart = JSON.parse(localStorage.getItem('carrito')) || []
const cantidadTotalCart = JSON.parse(localStorage.getItem('acumularCantidadTotal'))
const actualizarCant = () => {
    const cantActualizada = storageCart.reduce((acumuladorCantidad, cantidad) => acumuladorCantidad + cantidad.cant, 0)
    localStorage.setItem('acumularCantidadTotal', JSON.stringify(cantActualizada))
    const muestroCant = document.getElementById("cantidadCarrito").innerHTML = cantActualizada
}
actualizarCant()



let total = 0;

const remove = (id) => {
    storageCart = JSON.parse(localStorage.getItem('carrito'))
    let selecProducto = storageCart.find((buscar) => buscar.id == id)
    selecProducto.cant = selecProducto.cant - 1
    acumularTotal()
    actualizarCant()
    cardCarrito(storageCart)
    console.log(selecProducto)
    restablecerStorage(id)
    localStorage.setItem('carrito', JSON.stringify(storageCart))
    if (selecProducto.cant == 0) {
        const sacoArray = storageCart.filter((borroArray) => borroArray.id !== id)
        cardCarrito(sacoArray)
        return localStorage.setItem('carrito', JSON.stringify(sacoArray))
    }
}

function restablecerStorage(id) {
    let restaurarStock = JSON.parse(localStorage.getItem(`storageEnStock${id}`))
    const sumarStock = (restaurarStock + 1)
    const guardarStock = localStorage.setItem(`storageEnStock${id}`, JSON.stringify(sumarStock))
}






const acumularTotal = () => {
    total = storageCart.reduce((acumuladorTotal, acum) => acumuladorTotal + (acum.precio * acum.cant), 0)
    localStorage.setItem('totalCarrito', JSON.stringify(total))
    const cantidadTotalDelCarro = document.getElementById("precioTotal").innerHTML = `Total = ${total}`
}
acumularTotal()

function finalizarCompra() {
    swal({
        title: "estas seguro con tus productos?",
        text: "una vez que toques el boton ok, finalizara tu compra!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((sicompra) => {
            if (sicompra) {
                storageCart = []
                cardCarrito(storageCart),
                acumularTotal(),
                actualizarCant(),
                localStorage.removeItem('carrito'),
                swal(`Poof! tu Compra ah sido finalizada \n Puedes Vovler a comprar cuando quieras ;)`, {
                    icon: "success", 
                });
            } else {
                swal("puedes editar tu compra");
            }
        });
}


const verProducto = (id) => {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            let productos = data.productos
            productoQueQuiereVer = productos.find(element => element.id === id);
            localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
        })
}


const mostrarCardsEnElHTML = (cards) => {
    document.getElementById("listado-productos").innerHTML = cards;
};


function cardCarrito(productosAMostrar) {
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
                        onclick=remove(${elementoDelArray.id})
                        class="btn btn-outline-dark mt-auto" href="#">
                        sacar un producto
                    </button>
                    <a href="verProducto.html" target="_BLANK">
                    <button
                        onclick = verProducto(${elementoDelArray.id})
                        class="btn btn-outline-dark mt-auto" href="#" _BLANK>
                        Ver producto
                    </button></a>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

cardCarrito(storageCart)
