//------------------- Trabajo Entregable N°3 --------------------//                   
// **************************************************************//
// *********************     Functions     **********************//
// **************************************************************//

const validarStock = (nombre, stock, precio, cantidadPedida,) => {
    stockProducto = (stock - cantidadPedida)
    if (stockProducto < stock) {
        console.log(`Tenemos Stock, nos quedan ${stock}`)
        total += (precio * cantidadPedida)
        console.log(`Agregaste al Carrito ${nombre} por $${precio} \n total = $${total}`)
        id = tuCarrito.length
        tuCarrito.push(new Producto(nombre, precio, id))
        return stockProducto
    }
    else {
        alert('No tenemos stock suficente para tu pedido \n por favor seleccione menos cantidad')
        console.log('no tenemos suficiente stock')
        stock += cantidadPedida
    }
}

const resumenProducto = (nombre1, precio1, stock1,
    nombre2, precio2, stock2,
    nombre3, precio3, stock3) => {
    const productoSeleccionado = parseInt(prompt(`
    selecciona el numero que desea agregar al carrito...
    1- ${nombre1} $${precio1}
    2- ${nombre2} $${precio2}
    3- ${nombre3} $${precio3}`))
    switch (productoSeleccionado) {
        case 1:
            let cantidadPedida0 = 1
            validarStock(nombre1, stock1, precio1, cantidadPedida0)
            break;
        case 2:
            let cantidadPedida1 = 1
            validarStock(nombre2, stock2, precio2, cantidadPedida1)
            break;
        case 3:
            let cantidadPedida2 = 1
            validarStock(nombre3, stock3, precio3, cantidadPedida2)
            break;
        default:
            alert(`Numero Ingresado Incorrecto`)
    }
}
const eliminar =(nombre) => {
    let index = tuCarrito[nombre]
    if (index != -1) {
        console.log(`sacaste ${tuCarrito[nombre].nombre} de $${tuCarrito[nombre].precio}
        tu nuevo total es de $${total}`)
        tuCarrito.splice(index, 1)
    }
    let resultado = tuCarrito[nombre].precio
    total = total - resultado
}
// *************************************************************//
// *********************    Variables    ***********************//
// *************************************************************//
const tuCarrito = [];
let compra;
let total = 0;
let cantidadTotal = 0;
let editor;
let stockProducto;
// **************************************************************//
// **********************     Usuario     ***********************//
// **************************************************************//

alert('Bienvenidos A ArTechCom')

const usuario = prompt('Ingrese Nombre de Usuario')
console.log(usuario)

const usuarioDiscount = prompt(`Es Nuevo Usuario? \n 1.si \n 2.no`)
if ((usuarioDiscount == '2') || usuarioDiscount == 'no') {
    alert('por volver a utilizar nuestra tienda tienes un 20% de descuento en tu compra')
    console.log('Usuario con Descuento')
}
else if ((usuarioDiscount == '1') || usuarioDiscount == 'si') {
    alert('Bienvenido!!')
    console.log('Nuevo Usuario')
}
else {
    alert('dato inncorrecto')
}

// *************************************************************//
// *********************    constructor    *********************//
// *************************************************************//
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.id = id;
    }
}

// *************************************************************//
// **********************    Producto    ***********************//
// *************************************************************//
const productos = [
    { id: 0, categoria: 'Mouse', nombre: 'Mouse HyperX', precio: 4000, stock: 10 },
    { id: 1, categoria: 'Mouse', nombre: 'Mouse Logitech', precio: 7500, stock: 10 },
    { id: 2, categoria: 'Mouse', nombre: 'Mouse Redragon', precio: 5000, stock: 10 },
    { id: 3, categoria: 'Mouse Pad', nombre: 'Mouse Pad HyperX', precio: 1200, stock: 20 },
    { id: 4, categoria: 'Mouse Pad', nombre: 'Mouse Pad Logitech', precio: 2500, stock: 20 },
    { id: 5, categoria: 'Mouse Pad', nombre: 'Mouse Pad Redragon', precio: 2250, stock: 20 },
    { id: 6, categoria: 'Teclado', nombre: 'Teclado HyperX', precio: 4800, stock: 10 },
    { id: 7, categoria: 'Teclado', nombre: 'Teclado Logitech', precio: 6000, stock: 10 },
    { id: 8, categoria: 'Teclado', nombre: 'Teclado Redragon', precio: 8000, stock: 10 },
]

do {
    const categoriaSeleccionada = prompt(
        `Seleccion de categoria
        1- Mouse
        2- Mouse Pad
        3- Teclado`)
    switch (categoriaSeleccionada) {
        case '1':
            resumenProducto(productos[0].nombre, productos[0].precio, productos[0].stock,
                productos[1].nombre, productos[1].precio, productos[1].stock,
                productos[2].nombre, productos[2].precio, productos[2].stock)
            break;
        case '2':
            resumenProducto(productos[3].nombre, productos[3].precio, productos[3].stock,
                productos[4].nombre, productos[4].precio, productos[4].stock,
                productos[5].nombre, productos[5].precio, productos[5].stock)
            break;
        case '3':
            resumenProducto(productos[6].nombre, productos[6].precio, productos[6].stock,
                productos[7].nombre, productos[7].precio, productos[7].stock,
                productos[8].nombre, productos[8].precio, productos[8].stock)
            break;
        default:
            alert('Numero Ingresado Incorrecto')
            break;
    }
    compra = prompt('desea seguir comprando? s/n')
} while (compra !== 'n')

if ((usuarioDiscount == '2') || usuarioDiscount == 'no') {
    total = (total * 0.80)
    console.log(`te Hicimos 20% de descuento, este es tu total: $${total}`)
}
else {
    console.log(`cantidad total es $${total}`)
}
console.log(`El total de toda tu compra es de $${total}`)
do {
    const nombrePrecio = tuCarrito.map((el) => el.nombre)
    const listaDeCompra = (prompt(`este es tu Carrito:\n${nombrePrecio.join('\n')}\n desea editar su carrito? s/n`))
    if (listaDeCompra == 's') {
        const editCarrito = parseInt(prompt(`Selecciona el Numero que desea Quitar del Carrito:\n${nombrePrecio.join('\n')}`))
        eliminar(editCarrito)
    }
    else if ((listaDeCompra == 'n') || listaDeCompra == 'no') {
        editor = 'n'
    }
} while (editor !== 'n')

    alert('Gracias Por la Compra')
    console.log(tuCarrito)

























//------------------- Trabajo Entregable N°2 --------------------//
// **********************   Constructor   *************************//
// *************************     y     ****************************//
// ***********************    metodos    **************************//
// class producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
//     validarStock(cantidadPedida) {
//         let totalStock = (this.stock - cantidadPedida)
//         if (totalStock > cantidadPedida) {
//             console.log(`se agrego al carrito: ${this.nombre} por ${this.precio} c/u \n cantidad: ${cantidadPedida}`)
//         }
//         else if (totalStock <= cantidadPedida) {
//             alert('No tenemos stock suficente para tu pedido \n por favor seleccione menos cantidad')
//             console.log('no tenemos suficiente stock')
//             return totalStock
//         }
//     }
// }
// const compraP = (parametro) => {
//     compra = prompt('desea agregar mas aderezos? s/n')
// }

// **************************************************************//
// **********************     Usuario     ***********************//
// **************************************************************//

// alert('Bienvenidos A CombosFamiliar')

// const usuario = prompt('Ingrese Nombre de Usuario')
// console.log(usuario)

// const usuarioDiscount = prompt(`Es Nuevo Usuario? \n 1.si \n 2.no`)
// if ((usuarioDiscount == '2') || usuarioDiscount == 'no') {
//     alert('por volver a utilizar nuestra tienda tienes un 20% de descuento en tu compra')
//     console.log(usuarioDiscount)
// }
// else if ((usuarioDiscount == '1') || usuarioDiscount == 'si') {
//     alert('Bienvenido!!')
//     console.log(usuarioDiscount)
// }
// else {
//     alert('dato inncorrecto')
// }


// *************************************************************//
// **********************    Producto    ***********************//
// *************************************************************//

// const producto1 = new producto('combo de patys', 400, 150)
// const producto2 = new producto('combo de pancho', 250, 150)
// const aderezo1 = new producto('mayonesa', 0, 80)
// const aderezo2 = new producto('mostaza', 0, 80)
// const aderezo3 = new producto('ketchup', 0, 80)

// // let totalStock = 0
// let compra;
// let total = 0
// let adereso;
// let aderezoP;

// do {
//     const productoSeleccionado = prompt(`
// seleccione el numero del producto que desea ordenar.
// 1.${producto1.nombre} $${producto1.precio}
// 2.${producto2.nombre} $${producto2.precio}`)
//     console.log(productoSeleccionado)


//     if (productoSeleccionado == 1) {
//         let cantidadPedida1 = parseInt(prompt(`Seleccione la cantidad que quiere comprar`))
//         total = (producto1.precio * cantidadPedida1)
//         producto1.validarStock(cantidadPedida1);
//     }
//     else if (productoSeleccionado == 2) {
//         let cantidadPedida2 = parseInt(prompt(`Seleccione la cantidad que quiere comprar`))
//         total = (producto2.precio * cantidadPedida2)
//         producto2.validarStock(cantidadPedida2);
//     }
//     else alert('Numero ingresado Incorrecto')

//     comprar = prompt('quiere seguir comprando? s/n')
// } while (comprar !== 'n')

// if ((usuarioDiscount == '2') || usuarioDiscount == 'no') {
//     total = (total * 0.80)
//     console.log(`te Hicimos 20% de descuento, este es tu total: ${total}`)
// }
// else {
//     console.log(`cantidad total es $${total}`)
// }
//     do {
//         const aderezoSeleccionado = parseInt(prompt(`
//     Quiere agregar Algun aderezo?
//     1.${aderezo1.nombre}
//     2.${aderezo2.nombre}
//     3.${aderezo3.nombre}
//     4.no quiero, gracias`))
//     if (aderezoSeleccionado == 1){
//         compraP()
//         console.log(`se agrego el aderezo ${aderezo1.nombre}`)
//     }
//     else if(aderezoSeleccionado == 2) {
//         compraP()
//         console.log(`se agrego el aderezo ${aderezo2.nombre}`)
//     }
//     else if(aderezoSeleccionado == 3) {
//         compraP()
//         console.log(`se agrego el aderezo ${aderezo3.nombre}`)
//     }
//     else{
//         compra = 'n'
//     }

// }
//     while (compra !== 'n')
//     console.log('Gracias por tu compra')




























































// Trabajo etregable N°1 //
// const Nota = [ 2, 5, 7, 1, 8, 9, 10]
//     for (let i = 0; i < 7; i++) {
//         if ( Nota[i] < 4 ) {
//             console.log(`Tu Nota es un ${Nota[i]}, tenes que estudiar mas. \n desaprobado`)
//         }
//             else if ( Nota[i] < 7 ) {
//                 console.log(`Tu Nota es un ${Nota[i]}, falto mas practica. \n desaprobado`)
//             }
//                 else if ( Nota[i] == 7 ) {
//                     console.log('Tu Nota es un 7, esta bien \n aprobado')
//                 }
//                     else if ( Nota[i] > 7 && Nota[i] < 10 ) {
//                         console.log(`Tu Nota es un ${Nota[i]}, muy bien hecho!. \n aprobado`)
//                     }
//                         else if ( Nota[i] == 10 ) {
//                             console.log('Tu Nota es un 10, muy sobresaliente. \n aprobado')
//                         }
// }