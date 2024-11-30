import { getCartProductsFromLS } from "./getCartProducts"
import { updateCartProductTotal } from "./updateCartProductTotal"

 export const incrementDecrement=(event,id,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`)
    const productQuantity=currentCardElement.querySelector(".productQuantity")
    const productPrice=currentCardElement.querySelector(".productPrice")

    let quantity=1
    let localStoragePrice=0
    let localCartProducts=getCartProductsFromLS()
    let existingprod=localCartProducts.find((curProd)=>curProd.id===id)

    if(existingprod){
        quantity=existingprod.quantity
        localStoragePrice=existingprod.price

    }else{
        localStoragePrice=price
        price=price
    }

    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity += 1
        }
        else if(quantity===stock){
            quantity=stock
            localStoragePrice= price*stock
        }
    }
    if((event.target.className==="cartDecrement")){
        if(quantity>1){
         quantity-=1
        }
     }

    //  finally we will update the price in localStorage
    localStoragePrice=price*quantity
localStoragePrice= Number(localStoragePrice.toFixed(2))
    let updatedCart={id,quantity,price:localStoragePrice}

    updatedCart= localCartProducts.map((curpod)=>{
        return curpod.id===id ? updatedCart : curpod
    })
    console.log(updatedCart);
    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart))

    productQuantity.innerText=quantity
    productPrice.innerText=localStoragePrice

    updateCartProductTotal()
        }
        