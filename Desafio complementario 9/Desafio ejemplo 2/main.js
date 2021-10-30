const inputColor= document.querySelector("#inputColor");
const btnVisualizar= document.querySelector("#btnVisualizar");
const parrafoExa= document.querySelector("#parrafoExa")
const cardColor=document.querySelector("#cardColor");

btnVisualizar.addEventListener('click', ()=>{

    parrafoExa.textContent=inputColor.value
    cardColor.style.backgroundColor=inputColor.value
})  

// inputColor.addEventListener('click', ()=>{
//     parrafoExa.textContent=inputColor.value
//     cardColor.style.backgroundColor=inputColor.value
// })