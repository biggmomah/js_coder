class Persona{
    constructor(nombre, saldo, edad){
        this.nombre=nombre;
        this.saldo=saldo;
        this.edad=edad;
    }
}

function buscarPersonas(x, y){
    return x.find(elemento=> elemento.nombre === y);
}

let ingresados="";
const personas=[];
const cantidad= Number(prompt("Cuantas personas desea agregar?"));


for (let i=0; i < cantidad; i++){
    let persona = new Persona(prompt("Nombre"),
    Number(prompt("Saldo a agregar:")),
    Number(prompt("Edad:")))
  
    personas.push(persona)
    console.log(personas)
    let menu= prompt("Desea verificar datos de algun cliente?" + `\n Si ` + `\n No`)

    if(menu != "no" || menu != "NO"){
        let busqueda= buscarPersonas(personas, prompt("Ingrese nombre"))
        if(busqueda != undefined){
            alert(`Cliente ${busqueda.nombre}, su saldo es ${busqueda.saldo}`)
        }else{
            alert("No existe cliente con ese nombre.")
        }
    }

}  