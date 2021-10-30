// // >> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
// Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
// Armar la estructura HTML del proyecto.
// Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
// Utilizar funciones para realizar esas operaciones.


const opciones = () =>{
    let opcion= Number(prompt('Que operación desea realizar? \n1- Ingresar dinero \n2-Retirar dinero \n 3-Salir'));
    return opcion;
} 


const suma = (ingreso_dinero) => {
    saldo += ingreso_dinero;
    alert(`Su nuevo saldo es ${saldo}`);
}

const resta= (saldo_retirado) =>{
    if (saldo_retirado >= saldo){
        alert(`Monto excede saldo, su saldo actual es ${saldo}`);
    } else{
        saldo-=saldo_retirado
        alert(`Su nuevo saldo es ${saldo}`);
    }
}
let saldo=100000;
let menu = opciones()



while (menu!= 3) {
    
    switch(menu){
        case 1:
            ingreso_dinero = parseInt(prompt('Cuanto dinero desea agregar?'));
            suma(ingreso_dinero);
            menu=opciones()
            break;
        case 2:
            saldo_retirado=parseInt(prompt("Cuanto dinero desea retirar?"));
            resta(saldo_retirado);
            menu=opciones();
            break;
        default:
            break;
    }
}