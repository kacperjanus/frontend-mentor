"use client"

import React from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import CartItems from "@/app/_components/CartItems";

function Cart() {
    const {cart, clearCart} = useCart()

    return (
        <div className="absolute rounded-lg bg-white top-5 right-5 left-5 p-8">
            <div className="flex justify-between items-center">
                <h1 className="heading-6">CART ({cart?.length})</h1>
                {cart.length > 0 &&
                    <span className="font-medium text-[15px] underline text-dark-grey"
                          onClick={clearCart}>Remove all</span>}
            </div>

            <CartItems cart={cart}/>
        </div>
    );
}

export default Cart;