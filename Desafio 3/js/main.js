/* >> Consigna: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales. */



// FUNCION RETIRAR
const retirar_dinero = (egreso) =>{

    if (egreso >= saldo){
        saldo-=egreso;
        console.log('Su nuevo saldo es' + " "+  saldo);
        // Aca tengo un error cuando quiero utilizarlo con ${"ejemplo"}, no me lo resalta
        // console.log(`Su nuevo saldo es {$saldo}`);
    } else {
        console.log("No posee esa cantidad para retirar")
    }
}

// FUNCION INGRESAR

const ingreso_dinero = (ingreso) => saldo + ingreso;

// MENÚ DE OPCIONES 
const opciones = (numero) =>{
    while (numero!= 0){
        numero= Number(prompt("Ingrese una opcion: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
    }
}







while ( menu != 4){
    switch(menu) {
        case 1:
            retirar_dinero
            
            menu= Number(prompt("Desea realizar otra operacion?: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
            break;
        case 2: 
            alert("Cuanto dinero desea retirar?");
            let retiro= Number(prompt('cuanto dinero desea retirar?'));

            if (retiro >= saldo){
                alert("Excede monto a extraer")
                menu= Number(prompt("Desea realizar otra operacion?: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"))
            } else{
                saldo=saldo-retiro
            }
            
            menu= Number(prompt("Desea realizar otra operacion?: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
            break;
        case 3:
            alert("Su saldo es"+ saldo);
            menu= Number(prompt("Desea realizar otra operacion?: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
            break;      
        case 4:
            alert("Desconectando");
            menu= Number(prompt("Desea realizar otra operacion?: 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
            break;
        default:
            menu= Number(prompt("Opcion no valida, ingresa alguna de las siguientes : 1- Ingresar dinero 2- Retirar dinero 3- Consultar saldo 4-Salir"));
            
            break;

    }
}

alert("Te desconectaste con éxito")
