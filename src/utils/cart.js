// const sampleCart=[
//     {
//         productId:"PRO001",
//         name:"sampleProduct",
//         price:100.99,
//         labledprice:29999,
//         quantity:1,
//         image:"image.url"
//     },
//     {productId:"PRO002",
//         name:"sampleProduct2",
//         price:100.99,
//         labledprice:29999,
//         quantity:1,
//         image:"image.url2"},

import toast from "react-hot-toast";

    
// ]

export function getCart(){
    const cartString = localStorage.getItem("cart")
    if (cartString==null){
        localStorage.setItem("cart","[]");
        return[];
    }else{
        const cart = JSON.parse(cartString);
        return cart;

    }
}

export function addToCart(product,quantity){
    const cart=getCart();
    //check if product is already in cart
    const index=cart.findIndex(
        (item)=>{
            return item.productId == product.productId       
        }
    )
    if (index== -1){
        cart.push({
                    productId:product.productId,
                    name:product.name,
                    price:product.price,
                    labledprice:product.labledPrice,
                    quantity:quantity,
                    image:product.images[0]

        }
    )
    toast.success(`${product.name} added to cart`)
    }else{
        const newQty = cart[index].quantity+quantity
        if(newQty <=0){
            cart.splice(index,1);
            toast.success(`${product.name} removed from cart`)

        }else{
            cart [index].quantity = newQty;
            toast.success(`Updated ${product.name} Quantity to ${newQty}`)

        }
    }    
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart",cartString);
}





export function emptyCart(){
    localStorage.setItem("cart","[]");
}

