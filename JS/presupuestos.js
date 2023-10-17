// const lanaGruesa = { nombre: "Lana Gruesa", precio: "200" }
// const lanaFina = { nombre: "Lana Fina", precio: "120" }
// const aguja = { nombre: "Aguja", precio: "25" }
// const hiloSeda = { nombre: "Hilo de Seda", precio: "10" }

let precioTotal = 0

function finDeCompra() {
    alert("Gracias por tu compra! Te llegará un mail con tu factura")
}

function sumaTotal() {
    let sumaTotalFinal = alert("Tu total de compra es" + " " + precioTotal)
}

function sumarProducto(){
    if (agregarProducto === "si") {
        procesoCompra();
    }
    if (agregarProducto === "no") {
        sumaTotal();
        finDeCompra();
    } else {
        alert("No se reconoce")
    }
}

function procesoCompra() {
    let productoElegido = prompt("Ingresa los productos que te interesan de esta lista: Lana Gruesa, Lana Fina, Aguja, Hilo de Seda");
    console.log(productoElegido);
    while (productoElegido !== "") {
        if (productoElegido === "Lana Fina") {
            precioTotal += 120
            console.log(productoElegido)
            agregarProducto = prompt("Desea agregar algo más?");
            sumarProducto();  
            break;   
    }
    if (productoElegido === "Lana Gruesa"){
        precioTotal += 200
        console.log(productoElegido)
        agregarProducto = prompt("Desea agregar algo más?");
        sumarProducto();  
        break;
    }
    if (productoElegido === "Aguja"){
        precioTotal += 25
        console.log(productoElegido)
        agregarProducto = prompt("Desea agregar algo más?");
        sumarProducto();  
        break;
    }
    if (productoElegido === "Hilo de Seda"){
        precioTotal += 10
        console.log(productoElegido)
        agregarProducto = prompt("Desea agregar algo más?");
        sumarProducto();  
        break;
    } else {
        alert("No se reconoce inténtelo nuevamente")
        procesoCompra();
    }
}
}


procesoCompra();
