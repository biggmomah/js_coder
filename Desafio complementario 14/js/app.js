function shoppingCart(){
    const addToShoppingCart = document.querySelector('.btn-producto');

    addToShoppingCart.forEach( (addToCarButtons)=>{
        addToCarButtons.addEventListener('click', addToCartBtnClick)
    })

    function addToCartBtnClick(e){
        let btn = e.target;
        const producto= btn.closest('producto')

        const prodImg= producto.querySelector('.producto-img');
        const prodTitle= producto.querySelector('.producto-title')
        const prodPrecio= producto.querySelector('.producto-precio')

        modalCart(prodImg, prodTitle,prodPrecio)

        cartCounterUpdate();
    }

}

const showCart