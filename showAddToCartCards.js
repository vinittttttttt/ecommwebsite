
import products from"./api/products.json";
import { fatchQantityFromCartLS } from "./fatchQantityFromCartLS";
import { getCartProductsFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts=getCartProductsFromLS()

let filterProducts= products.filter((curPod)=>{
return cartProducts.some((curElem)=>curElem.id===curPod.id)
})
console.log(filterProducts);

const cartElement=document.querySelector("#productCartContainer")
const templateContainer=document.querySelector("#productCartTemplate")

const showCartProduct=()=>{
    filterProducts.forEach((curPod)=>{
        const{category,id,image,name,stock,price}= curPod

        const lSActualData=fatchQantityFromCartLS(id,price)

    let productClone= document.importNode(templateContainer.content,true)
    productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    productClone.querySelector(".category").textContent=category
    productClone.querySelector(".productName").textContent=name
    productClone.querySelector(".productImage").src=image
    productClone.querySelector(".productQuantity")
    .textContent=lSActualData.quantity
productClone.querySelector(".productPrice").textContent=lSActualData.price

productClone.querySelector(".stockElement")
.addEventListener("click",(event)=>{
    incrementDecrement(event,id,stock,price)
})


productClone.querySelector(".remove-to-cart-button")
.addEventListener("click",()=>removeProdFromCart(id))

    cartElement.appendChild(productClone)
    })
}
showCartProduct()



updateCartProductTotal()