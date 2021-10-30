let celulares = [
    {marca: 'Apple', precio: 1500},
    {marca: 'Samsung', precio: 1000},
    {marca: 'Xiaomi', precio: 1200},
    {marca: 'Motorola', precio: 800}
]



celulares.sort( (a,b) =>{
    if ( a.precio < b.precio) {
        return -1
    }

    if ( a.precio > b.precio){
        return 1
    }

    return 0
})


console.log(celulares)

