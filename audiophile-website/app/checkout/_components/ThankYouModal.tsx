"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import Overlay from "@/app/_components/Overlay";
import {useCart} from "@/app/_lib/contexts/CartContext";

function ThankYouModal() {
    const {cart, clearCart} = useCart()

    if (cart.length === 0) return (<>
        <Overlay/>
        <div className="absolute bg-white rounded-lg p-12 tablet:left-1/2 tablet:-translate-x-1/2 top-36 max-w-[327px] tablet:max-w-[540px] flex flex-col gap-4 tablet:gap-10">
            <span>ERROR</span>
        </div>
    </>)

    return (
        <>
            <Overlay className="z-20"/>
            <div className="absolute bg-white z-30 rounded-lg p-8 tablet:p-12 left-1/2 -translate-x-1/2 top-36 w-[327px] tablet:w-[540px] flex flex-col gap-4 tablet:gap-10">
                <img className="w-16 h-16" src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmation icon"/>
                <h1 className="heading-5 tablet:heading-3">Thank you for your order</h1>
                <p className="text-dark-grey font-medium text-[15px]">You will receive an email confirmation
                    shortly.</p>

                <div className="rounded-lg overflow-hidden flex flex-col tablet:flex-row">
                    <div className="bg-grey p-8 desktop:p-4 relative">
                        <div
                            className="grid grid-cols-[auto_2fr_2fr] flex-1 tablet:grid-cols-[auto_7fr_3fr] desktop:grid-cols-[auto_7fr_3fr] gap-2 items-center">
                            <img className="w-16 h-16 rounded-lg" src={`/assets/cart/image-${cart[0].name}.jpg`}
                                 alt={`${cart[0].name} preview`}/>
                            <div className="flex flex-col">
                                <p className="font-bold text-[15px] uppercase">{cart[0].name.slice(0, 9)}</p>
                                <p className="text-[14px] font-bold text-dark-grey">$ {cart[0].pricePerUnit}</p>
                            </div>
                            <span
                                className="justify-self-center font-bold text-[15px] text-dark-grey">x{cart[0].quantity}</span>
                        </div>

                        {cart.length > 1 && <div className="mt-4">
                            <span
                                className="bg-[#979797] absolute left-1/2 -translate-x-1/2 h-[1px] w-[215px] tablet:w-[198px]"></span>
                            <p
                                className="font-bold text-dark-grey text-[12px] text-center pt-4">and {cart.length - 1} other
                                items(s)</p>
                        </div>
                        }
                    </div>
                    <div className="bg-black-light p-8 flex flex-1 flex-col gap-4">
                        <span className="text-dark-grey uppercase">Grand total</span>
                        <span
                            className="text-white text-[18px] font-bold">$ {cart.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0).toLocaleString()}</span>
                    </div>
                </div>

                <Button link="/" fn={clearCart} type="primary" className="w-full">Back to home</Button>
            </div>
        </>
    );
}

export default ThankYouModal;