"use client"

import React, {useState} from 'react';
import {useCart} from "@/app/_lib/contexts/CartContext";
import Button from "@/app/_components/Button";
import ThankYouModal from "@/app/checkout/_components/ThankYouModal";
import SummaryItems from "@/app/checkout/_components/SummaryItems";
import PaymentInfo from "@/app/checkout/_components/PaymentInfo";
import {FieldErrors, SubmitHandler, UseFormHandleSubmit} from "react-hook-form";

function Summary({handleSubmit, errors}: {
    handleSubmit: UseFormHandleSubmit<Inputs, undefined>,
    errors: FieldErrors<Inputs>
}) {
    const {cart} = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        setIsModalOpen((s) => !s)
    }

    const handleContinue = () => {
        handleSubmit(onSubmit)()
    }


    if (cart.length === 0) return <div
        className="bg-white rounded-lg p-8 mt-8 desktop:mt-0 text-dark-grey uppercase text-center">Your cart is
        empty</div>

    return (
        <div className="bg-white rounded-lg p-8 mt-8 desktop:mt-0">
            <h2 className="heading-5">SUMMARY</h2>

            <SummaryItems cart={cart}/>

            <PaymentInfo cart={cart}/>

            <Button fn={handleContinue} className="w-full" type="primary">Continue & Pay</Button>
            {isModalOpen && <ThankYouModal/>}
        </div>
    );
}

export default Summary;