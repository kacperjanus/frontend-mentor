"use client"

import React from 'react';
import CheckoutForm from "@/app/checkout/_components/CheckoutForm";
import Summary from "@/app/checkout/_components/Summary";
import {useForm} from "react-hook-form";

function Checkout() {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()

    return (
        <div className="flex flex-col desktop:grid desktop:grid-cols-[2fr_1fr] desktop:gap-6 desktop:items-start">
            <CheckoutForm register={register} errors={errors}/>
            <Summary handleSubmit={handleSubmit} errors={errors}/>
        </div>
    );
}

export default Checkout;