"use client"

import React, {useState} from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import Button from "@/app/_components/Button";
import ThankYouModal from "@/app/checkout/_components/ThankYouModal";
import SummaryItems from "@/app/checkout/_components/SummaryItems";
import PaymentInfo from "@/app/checkout/_components/PaymentInfo";

function Summary() {
    const {cart} = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)

    if (cart.length === 0) return <div
        className="bg-white rounded-lg p-8 mt-8 text-dark-grey uppercase text-center">Your cart is
        empty</div>

    return (
        <div className="bg-white rounded-lg p-8 mt-8 desktop:mt-0">
            <h2 className="heading-5">SUMMARY</h2>

            <SummaryItems cart={cart}/>

            <PaymentInfo cart={cart}/>

            <Button fn={() => setIsModalOpen((s) => !s)} className="w-full" type="primary">Continue & Pay</Button>
            {isModalOpen && <ThankYouModal/>}
        </div>
    );
}

export default Summary;