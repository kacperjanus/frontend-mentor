"use client"

import React from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import Button from "@/app/_components/Button";
import Numbers from "@/app/_components/Numbers";

function Cart() {
    const {cart, clearCart} = useCart()

    return (
        <div className="absolute rounded-lg bg-white top-5 right-5 left-5 p-5">
            <div className="flex justify-between">
                <h1 className="heading-6">CART ({cart?.length})</h1>
                <span onClick={clearCart}>Remove all</span>
            </div>

            <ul className="flex flex-col gap-4 my-10">
                {cart.map((item: CartItem) => <li key={item.name} className="flex justify-between gap-4 items-center">
                    <img className="w-16 h-16 rounded-lg" src={item.image.mobile} alt={`${item.name} preview`}/>
                    <div className="flex flex-col">
                        <p className="font-bold text-[15px] uppercase">{item.name}</p>
                        <p className="text-[14px] font-bold text-dark-grey">$ {item.pricePerUnit}</p>
                    </div>
                    <Numbers max={10} count={item.quantity} setCount={() => {
                    }}/>
                </li>)}
            </ul>

            <div className="flex justify-between mb-8 items-center">
                <span className="font-medium text-[15px] uppercase text-dark-grey">TOTAL</span>
                <span
                    className="font-bold text-[18px]">$ {cart?.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0).toLocaleString()}</span>
            </div>

            <Button type="primary" link="/checkout">Checkout</Button>
        </div>
    );
}

export default Cart;