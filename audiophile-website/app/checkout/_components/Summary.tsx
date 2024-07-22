"use client"

import React from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import Button from "@/app/_components/Button";

function Summary() {
    const {cart} = useCart()

    const shippingCost = 50
    const cartValue = cart.reduce((acc, item) => acc + item.quantity * item.pricePerUnit, 0)
    const tax = 0.2 * cartValue

    return (
        <div className="bg-white rounded-lg p-8 mt-8">
            <h2 className="heading-5">SUMMARY</h2>

            <ul className="flex flex-col gap-4 my-10">
                {cart.map((item: CartItem) => <li key={item.name} className="flex justify-between gap-4 items-center">
                    <img className="w-16 h-16 rounded-lg" src={item.image.mobile} alt={`${item.name} preview`}/>
                    <div className="flex flex-col">
                        <p className="font-bold text-[15px] uppercase">{item.name}</p>
                        <p className="text-[14px] font-bold text-dark-grey">$ {item.pricePerUnit}</p>
                    </div>
                    <span>x{item.quantity}</span>
                </li>)}
            </ul>

            <div className="flex flex-col gap-2 mb-8">
                <div className="flex justify-between">
                    <span className="uppercase text-dark-grey text-[15px] font-medium">total</span>
                    <span className="font-bold text-[18px]">$ {cartValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="uppercase text-dark-grey text-[15px] font-medium">shipping</span>
                    <span className="font-bold text-[18px]">$ {shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="uppercase text-dark-grey text-[15px] font-medium">vat (included)</span>
                    <span className="font-bold text-[18px]">$ {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="uppercase text-dark-grey text-[15px] font-medium">grand total</span>
                    <span
                        className="font-bold text-[18px] text-earthy">$ {(cartValue + shippingCost).toLocaleString()}</span>
                </div>
            </div>

            <Button type="primary">Continue & Pay</Button>
        </div>
    );
}

export default Summary;