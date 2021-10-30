alert("Bienvenido al mercadito de rodrigo. En base a la cantidad de productos que compres vas a recibir un descuento.")



const opciones = () =>{
    let opcion= Number(prompt('Que operación desea realizar? \n1- Comprar. \n2-Consultar descuentos y stock disponible. \n 3-Salir'));
    return opcion;
}

// const precio_total = (cantidad) =>{
//     let precio_total;
//     precio_total= ((precio_unitario - descuento) * cantidad);
// }

const compra = (cantidad) => {
    let descuento;
    if (cantidad > 100 && cantidad < 500) {
        stock-= cantidad;
        descuento= precio_unitario *0.05
        alert(`Por la compra de ${cantidad} obtendras un descuento de 5% por unidad. Quedaria un total de ${(precio_unitario - descuento) * cantidad}`);
    } else if (cantidad >= 501 && cantidad <=1000) {
        stock-= cantidad;
        descuento= precio_unitario *0.10
         alert(`Por la compra de ${cantidad}  obtendras un descuento de 10% por unidad. Quedaria un total de ${(precio_unitario - descuento) * cantidad}`);
    } else if (cantidad >= 1000 ) {
        stock-= cantidad;
        descuento= precio_unitario *0.15
         alert(`Por la compra de ${cantidad}  obtendras un descuento de 15% por unidad. Quedaria un total de ${(precio_unitario - descuento) * cantidad}`);
} else{
    alert("Descuentos a partir de las 100 unidades.")
}
}

const tarjetas = (tarjeta) =>{
    if(tarjeta === "Visa" || tarjeta==="Mastercard" || tarjeta === "MercadoPago"){
        alert("Aceptamos estos metodos de pago.")
    } else{
        alert("No aceptamos estos metodos de pago")
    }
}




let menu= opciones();
let stock= 100000;
let precio_unitario= 5;


while (menu != 3){
    switch(menu){
        case 1:
            cantidad = parseInt(prompt('Ingrese la cantidad de productos que desea comprar'));
            compra(cantidad);
            opciones()
            break;
        case 2:
            tarjeta=prompt('Como desea pagar? Solo aceptamos Visa, Mastercard o MercadoPago')
            tarjetas(tarjeta);
            opciones();
            break;
        default:
            opciones()
    }
} alert("Gracias vuelvas prontos")

