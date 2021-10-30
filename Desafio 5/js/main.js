class Persona{
    constructor(nombre, saldo, edad){
        this.nombre=nombre;
        this.saldo=saldo;
        this.edad=edad;
    }

    info(){
        alert(`Tu nombre es: ${this.nombre} y dispones de $${this.saldo}`)
    }

    credito(){
        if(this.saldo < 100){
            alert("no podes pedir credito");
        }else{
            alert("podes pedir credito");
        }
    }

    infoedad(){
        if(this.edad >= 18){
            alert("mayor de edad")
        }
        else{
            alert("menor de edad")
        }
    }

    agregarSaldo(saldo){
        this.saldo+= saldo
    }
}

const persona1= new Persona("pepe", 100, 18);

let ingresados='';

for (let i=0; i < 1; i++){
    let persona = new Persona(prompt("Nombre"),
    Number(prompt("Saldo a agregar:")),
    Number(prompt("Edad:")))

    ingresados+=`Nombre: ${persona.nombre}, su nuevo saldo es $${persona.saldo} y su edad es ${persona.edad}` + "\n"
}

alert(ingresados)

