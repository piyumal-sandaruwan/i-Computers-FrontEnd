import { useState } from "react"
import { getCart, addToCart, getCartTotal } from "../utils/cart"
import { BsChevronUp } from "react-icons/bs"
import { Link } from "react-router-dom"
export default function CartPage() {
    const [cart, setCart] = useState(getCart())

    return (
        <div className="w-full min-h-screen  bg-gray-50 flex flex-col items-center p-6 gap-4">
            <h1 className="text-3xl font-bold self-start max-w-4xl mx-auto w-full mb-4">Shopping Cart</h1>

            {cart.map((item) => {
                return (
                    <div
                        key={item.productId}
                        className="w-full max-w-4xl h-40 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-md transition-shadow flex overflow-hidden"
                    >
                        {/* Image Section */}
                        <div className="h-full aspect-square bg-slate-100">
                            <img src={item.image} className="h-full aspect-square object-cover bg-gray-100" />
                        </div>

                        {/* Product Info Section */}
                        <div className="flex-1 flex flex-col justify-center pl-6">
                            <div className="relative group">
                                <h1 className="text-xl font-bold text-slate-800 cursor-default">
                                    {item.name.length > 25 ?
                                        item.name.substring(0, 25) + "..." :
                                        item.name
                                    }
                                </h1>

                                <span className="absolute left-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>

                            <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                                ID: {item.productId}
                            </p>

                            {/* Unit price and lable Price*/}
                            <div className="flex items-center gap-2 mt-3">
                                <h2 className="text-xl font-bold text-accent">
                                    LKR {(item.price * item.quantity).toFixed(2)}
                                </h2>
                                {item.labledPrice > item.price && (
                                    <h2 className="text-sm text-slate-400 line-through decoration-amber-500/50">
                                        LKR {item.labledPrice.toFixed(2)}
                                    </h2>
                                )}
                            </div>
                        </div>

                        {/* Controls & Subtotal Section */}
                        <div className="flex items-center pr-6 gap-8">
                            {/* Quantity Controls */}
                            <div className="w-12 h-24 border border-gray-200 rounded-lg flex flex-col justify-between items-center py-2 shadow-sm bg-white">
                                <button className="p-1 hover:text-accent transition-colors">
                                    <BsChevronUp
                                        className="text-lg cursor-pointer"
                                        onClick={() => {
                                            addToCart(item, 1);
                                            const newCart = getCart();
                                            setCart(newCart)
                                        }}
                                    />
                                </button>
                                <span className="text-lg font-bold w-8 text-center">{item.quantity}</span>
                                <button className="p-1 hover:text-accent transition-colors">
                                    <BsChevronUp
                                        className="rotate-180 cursor-pointer text-lg"
                                        onClick={() => {
                                            addToCart(item, -1);
                                            const newCart = getCart();
                                            setCart(newCart)
                                        }}
                                    />
                                </button>
                            </div>

                            {/* Total Price for Item */}
                            <div className="w-32 text-right flex flex-col">
                                <p className="text-xs text-slate-400 uppercase font-semibold">Total</p>
                                <span className="text-xl font-black text-slate-700">LKR</span>
                                <span className="text-xl font-black text-slate-800">
                                    {(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
            {/* Grand Total
            <div className="w-full max-w-4xl h-40 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-md transition-shadow flex overflow-hidden">
                
            </div> */}

            
                
{/* Grand Total & Checkout Section */}
            {cart.length > 0 && (
                <div className="w-full max-w-4xl h-32 bg-white rounded-2xl border border-slate-100 shadow-lg flex items-center justify-between px-10 mt-4 mb-10">
                    <div>
                        <p className="text-sm text-slate-400 uppercase font-semibold tracking-wider">Grand Total</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-slate-500">LKR</span>
                            <span className="text-4xl font-black text-slate-900">
                                {getCartTotal().toFixed(2)}
                            </span>
                        </div>
                    </div>

                    
                        <Link to="/checkout"  className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                        state={
                            cart
                        }
                        >
                        Proceed to Checkout
                        </Link>
                </div>
            )}



            {cart.length === 0 && (
                <div className="mt-20 text-slate-400 text-center">
                    <p className="text-xl">Your cart is empty</p>
                 </div>
            )}
        </div>
    )
}