"use client"

import React from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import CartItems from "@/app/_components/CartItems";
import {motion} from "framer-motion";

function Cart() {
    const {cart, clearCart} = useCart()

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}}
                    className="absolute rounded-lg z-20 tablet:w-[377px] bg-white top-5 right-5 tablet:right-10 desktop:right-40 left-5 tablet:left-auto p-8">
            <div className="flex justify-between items-center">
                <h1 className="heading-6">CART ({cart?.length})</h1>
                {cart.length > 0 &&
                    <span className="font-medium text-[15px] underline text-dark-grey" onClick={clearCart}>Remove all</span>}
            </div>

            <CartItems cart={cart}/>
        </motion.div>
    );
}

export default Cart;