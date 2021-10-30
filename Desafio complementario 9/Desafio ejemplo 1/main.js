const probando = document.querySelector('.probando')
const btnSaludar= document.querySelector(".btn-info")
const btnDespedirse= document.querySelector(".btn-danger")


let div= document.createElement('div')


btnSaludar.addEventListener('click', ()=>{
    div.innerHTML=`<h2> Hola Tomi, como estas? </h2>
    <p> la verdad que me esta costando horrores darme maña con los desafios, veo en internet que son todos iguales y pienso que seria copiar. 
    acaso eso esta <strong> mal!? <strong>`
     probando.appendChild(div)

})

btnDespedirse.addEventListener('click', ()=>{
    div.innerHTML=' <p>Espero el desafio cumpla con las condiciones, sin darme cuenta el desafio entregable tiene lo que pide el complementario...</p>'
})