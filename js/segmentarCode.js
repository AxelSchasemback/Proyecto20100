fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        productos = data.productos
        const arrayVacio = productosSinStock.filter(vacio => {
            botonDelCarritoDisabled(vacio.id) 
        })

        for (let buscar of tuCarrito) {
            (buscar.cant) && botonDisabled(buscar.id)
        }


        function botonDisabled(id) {
            let productoStock = JSON.parse(localStorage.getItem(`storageEnStock${id}`))
            const recorrerCantidad = tuCarrito.filter((buscar) => {
                if (productoStock == 0) return botonDelCarritoDisabled(buscar.id)
                if (buscar.cant != productos[id].stock) {
                    const renuevoBoton = productosSinStock.filter((sacoDelArray) => sacoDelArray.id != buscar.id)
                    localStorage.setItem("sinStock", JSON.stringify(renuevoBoton))
                    return botonDelCarrito(buscar.id)
                }
            })
        }
    })