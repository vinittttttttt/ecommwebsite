import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS()
 
export const addToCart=(event,id,stock)=>{

    let arrLocalStorageProduct=getCartProductsFromLS()
const currentProdElem=document.querySelector(`#card${id}`)
// console.log(currentProdElem);
let quantity= currentProdElem.querySelector(".productQuantity").innerText;
let price =currentProdElem.querySelector(".productPrice").innerText
// console.log(quantity,price);
price= price.replace("₹",'')

let existingprod=arrLocalStorageProduct.find(
    (curpod)=>curpod.id===id)
    console.log(existingprod);
    
    if(existingprod&& quantity>1){
quantity=Number(existingprod.quantity)+Number(quantity)
price= Number(price*quantity)
let updatedCart={id,quantity,price}

updatedCart= arrLocalStorageProduct.map((curpod)=>{
    return curpod.id===id ? updatedCart : curpod
})
console.log(updatedCart);

localStorage.setItem("cartProductLS",JSON.stringify(updatedCart))


    // show toast when product added to the cart
    showToast("delete",id)
    }

if(existingprod){
return false
}

price= Number(price*quantity)
quantity=Number(quantity)

arrLocalStorageProduct.push({id,quantity,price})
localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct))

// Update the cart button value

updateCartValue(arrLocalStorageProduct)


    // show toast when product added to the cart
    showToast("delete",id)

}