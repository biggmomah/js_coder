const botones= document.querySelectorAll('.btn-producto')
const carrito= document.getElementById("carrito");
const template= document.getElementById("template");
const fragment= document.createDocumentFragment();

let carritoArray =  [];

const agregarAlCarrito=(e)=>{
    console.log(e.target.dataset.nombre)

    const producto= {
        titulo: e.target.dataset.nombre,
        id: e.target.dataset.nombre,
        cantidad: 1
    }

  // buscamos el indice
  const index = carritoArray.findIndex((item) => item.id === producto.id);

  // si no existe empujamos el nuevo elemento
  if (index === -1) {
      carritoArray.push(producto);
  } else {
      // en caso contrario aumentamos su cantidad
      carritoArray[index].cantidad++;
  }

    contadorCarrito()
}

const contadorCarrito=()=>{

    carrito.textContent=""

        carritoArray.forEach((item)=>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent=item.titulo;

        clone.querySelector('.badge').textContent=item.cantidad

        fragment.appendChild(clone);

    }) 

    carrito.appendChild(fragment)
   
}

$('.btn-producto').click((e)=>{
    console.log(e.target)

    if(e.target.dataset.nombre == "mentorias"){
       agregarAlCarrito(e)
    }

    if(e.target.dataset.nombre == "gestion"){
      agregarAlCarrito(e)
    }


    
})


// botones.forEach((btn)=>{
//    btn.addEventListener('click',agregarAlCarrito)
// })

// VARIABLES 

// const user =JSON.parse(localStorage.getItem('usuarios')) || []

// const nombreSubmit= document.querySelector("#nombreSubmit");
// const emailSubmit= document.querySelector('#emailSubmit')
// const consultaSubmit= document.querySelector("#consultaSubmit");
// const btn= document.querySelector('#btnSubmit')
// const listaConsultas=document.querySelector('#listaConsultas')
// let consulta;
// // let menu = opciones();
// let contador=0;

// document.addEventListener('DOMContentLoaded', ()=>{
//     const consultaStorage= JSON.parse(localStorage.getItem('consulta'))

//     consulta= consultaStorage || [];

//     agregarConsulta();
// })



// function agregarConsulta(e){
//     e.preventDefault();
//     // Como podria hacer para que si pongo algo en blanco tire error?

//     const div=document.createElement('div');
//     div.innerHTML= `Nombre: ${nombreSubmit.value}
//                     email: ${emailSubmit.value}
//                     consulta: ${consultaSubmit.value}
    
//     `

//     listaConsultas.appendChild(div)



// }

// function Consultas(){
//     listaConsultas.innerHTML=''
// }

// btn.addEventListener('click',agregarConsulta)


//  CLASES Y OBJETOS


// class User{
//     constructor(userNombre, userConsulta, userEmail){
//     this.nombre=userNombre;
//     this.consulta=userConsulta;
//     this.email=userEmail;
//     }
// }

// class Servicios{
//     constructor(servicio, precio){
//         this.servicio= servicio;
//         this.precio=precio;
//     }
// }

// const servicio=["Clase 1 a 1", 100]


// while (menu != 3){

// if ( menu == 1 ){
//     datos(user)  
//     menu=opciones()
// }else if(menu==2){
//     for (let i = 0; i < servicio.length; i++) {
//        alert(`estas adquiriendo ${servicio}`) 
//     }
//     contador++;
//     menu=opciones()
// }

// }alert("Gracias por visitarnos.")



// for(const registro of user){
//     let div= document.createElement('div');
//     div.innerHTML=`<h2> ${registro.nombre}
//     <p> ${registro.consulta} / ${registro.email}
//     <hr>`;
//     document.body.appendChild(div)
// }
// const nombreSubmit= document.querySelector("#nombreSubmit");
// const emailSubmit= document.querySelector('#emailSubmit')
// const consultaSubmit= document.querySelector("#consultaSubmit");
// const btn= document.querySelector('#btnSubmit')
// const listaConsultas=document.querySelector('#listaConsultas')
// const botonProducto= document.querySelector("#botonProducto")
// const carrito= document.querySelector('#carrito')

// document.addEventListener('DOMContentLoaded', ()=>{
//     mostrarProductos(productos)
// })



// document.addEventListener('DOMContentLoaded', ()=>{
//     const consultaStorage= JSON.parse(localStorage.getItem('consulta'))

//     consulta= consultaStorage || [];

//     agregarConsulta();
// })


// function mostrarProductos(productos){
//     productos.forEach(producto => {
//         const html=`
//         <div class="container">
//             <div class="row">
//                 <div class="col-4">
//                     <div class="card">
//                         <img src="${producto.imagen}" class="card-img-top img-thumbnail">
//                         <h4 class="text-center">${producto.nombre}</h4>
//                         <p>Estas interesado en conocer más sobre la blockchain?</p>
//                         <button class="btn btn-primary w-100" id="botonProducto" >Conocenos!</button>
//                     </div>
//                 </div>
            
//             </div>
//         </div>
//         `
//     listaConsultas.innerHTML+=html
//     });
// }

// // function agregarProductos(e){
// //     e.preventDefault();   
// //     console.log(e.target)
// // }

// function agregarConsulta(e){
//     e.preventDefault();
//     // Como podria hacer para que si pongo algo en blanco tire error?

//     const div=document.createElement('div');
//     div.innerHTML= `Nombre: ${nombreSubmit.value}
//                     email: ${emailSubmit.value}
//                     consulta: ${consultaSubmit.value}
    
//     `

//     carrito.appendChild(div)

// }

