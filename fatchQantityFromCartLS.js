import { getCartProductsFromLS } from "./getCartProducts"

export const fatchQantityFromCartLS=(id,price)=>{
    let cartProducts=getCartProductsFromLS()
    let existingProduct=cartProducts.find((curPod)=>curPod.id===id)
    let quantity=1
    
    if(existingProduct){
        quantity=existingProduct.quantity
        price=existingProduct.price
    }
    return{quantity,price}
}