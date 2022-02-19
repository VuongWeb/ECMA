let cart =[];

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newPro,next) =>{
    const existPro = cart.find(pro => pro.id === newPro.id);
    if(!existPro){
        cart.push(newPro);
    }else{
        existPro.quantity += newPro.quantity;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    next();
}

export const numberFormat = new Intl.NumberFormat('en');
