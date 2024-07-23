"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import Overlay from "@/app/_components/Overlay";
import {useCart} from "@/app/_lib/contexts/CartContext";

function ThankYouModal() {
    const {cart} = useCart()

    if (cart.length === 0) return <div>Error</div>

    return (
        <>
            <Overlay/>
            <div
                className="absolute bg-white rounded-lg p-12 tablet:left-1/2 tablet:-translate-x-1/2 top-36 max-w-[327px] tablet:max-w-[540px] flex flex-col gap-4 tablet:gap-10">
                <img className="w-16 h-16" src="/assets/checkout/icon-order-confirmation.svg"
                     alt="Order Confirmation icon"/>
                <h1 className="heading-5 tablet:heading-3">Thank you for your order</h1>
                <p className="text-dark-grey font-medium text-[15px]">You will receive an email confirmation
                    shortly.</p>

                <div className="rounded-lg overflow-hidden grid grid-rows-[5fr_4fr] desktop:grid-cols-[5fr_4fr]">
                    <div className="bg-grey p-4 desktop:p-8">
                        <li key={cart[0].name}
                            className="grid grid-cols-[auto_2fr_2fr] tablet:grid-cols-[auto_10fr_1fr] desktop:grid-cols-[4fr_10fr_1fr] gap-2 items-center">
                            <img className="w-16 h-16 rounded-lg" src={`/assets/cart/image-${cart[0].name}.jpg`}
                                 alt={`${cart[0].name} preview`}/>
                            <div className="flex flex-col">
                                <p className="font-bold text-[15px] uppercase">{cart[0].name.slice(0, 9)}</p>
                                <p className="text-[14px] font-bold text-dark-grey">$ {cart[0].pricePerUnit}</p>
                            </div>
                            <span className="justify-self-end">x{cart[0].quantity}</span>
                        </li>

                        {cart.length > 1 && <span>and {cart.length - 1} other items(s)</span>}
                    </div>
                    <div className="bg-black-light p-4 flex flex-col gap-4 desktop:p-8">
                        <span className="text-dark-grey uppercase">Grand total</span>
                        <span
                            className="text-white text-[18px] font-bold">$ {cart.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0).toLocaleString()}</span>
                    </div>
                </div>

                {/*TODO create button that can take a link as well as a function*/}
                <Button link="/" type="primary" className="w-full">Back to home</Button>
            </div>
        </>
    );
}

export default ThankYouModal;