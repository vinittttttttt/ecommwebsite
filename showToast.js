export function showToast(operation,id){
    const toast= document.createElement("div")
    toast.classList.add("toast")


    if(operation==="add"){
        toast.textContent=`product with id ${id} has been added`

    }else{
        toast.textContent=`product with id ${id} has been Deleted`
    }
    document.body.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },2000)
    }