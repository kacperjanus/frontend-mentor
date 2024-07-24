"use client"

import React from 'react';
import TextField from "@/app/_components/TextField";
import RadioSelectGroup from "@/app/_components/RadioSelectGroup";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {Inputs} from "@/app/interfaces";

function CheckoutForm({register, errors}: {
    register: UseFormRegister<Inputs>,
    errors: FieldErrors<Inputs>
}) {
    return (
        <div className="bg-white rounded-lg p-8">
            <h1 className="heading-4 mb-10">checkout</h1>

            <form>
                {/*BILLING*/}
                <h2 className="subtitle-element mb-6">billing details</h2>
                <div className="tablet:grid tablet:grid-cols-2 tablet:gap-x-4">
                    <TextField errorType={errors?.["name"]?.type} error={!!errors?.["name"]} required={true} register={register} name="name" label={"Name"} placeholder={"Alexei Ward"}/>
                    <TextField pattern={/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim} errorType={errors?.["email"]?.type} error={!!errors?.["email"]} required={true} register={register} name="email" label={"Email Address"} placeholder={"alexei@mail.com"}/>
                    <TextField pattern={/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/} errorType={errors?.["phoneNumber"]?.type} error={!!errors?.["phoneNumber"]} required={true} register={register} name="phoneNumber" label={"Phone Number"} placeholder={"+1 202-555-0136"}/>
                </div>

                {/*SHIPPING*/}
                <h2 className="subtitle-element mb-6">shipping info</h2>
                <div className="tablet:grid tablet:grid-cols-2 tablet:gap-x-4">
                    <div className="col-span-2">
                        <TextField errorType={errors?.["address"]?.type} error={!!errors?.["address"]} required={true} register={register} name="address" label={"Your Address"} placeholder={"1137 Williams Avenue"}/>
                    </div>
                    <TextField pattern={/^(\d{5})(?:-?(\d{4}))?$/} errorType={errors?.["zipCode"]?.type} error={!!errors?.["zipCode"]} required={true} register={register} name="zipCode" label={"ZIP Code"} placeholder={"10001"}/>
                    <TextField pattern={/^(?=.*?[A-Za-z])[A-Za-z+]+$/} errorType={errors?.["city"]?.type} error={!!errors?.["city"]} required={true} register={register} name="city" label={"City"} placeholder={"New York"}/>
                    <TextField pattern={/^(?=.*?[A-Za-z])[A-Za-z+]+$/} errorType={errors?.["country"]?.type} error={!!errors?.["country"]} required={true} register={register} name="country" label={"Country"} placeholder={"United States"}/>
                </div>

                {/*PAYMENT*/}
                <h2 className="subtitle-element mb-6">payment details</h2>
                <RadioSelectGroup mainLabel="Payment Method" labels={["e-Money", "Cash on Delivery"]}/>

                {/*PAYMENT INFO*/}
                <div className="tablet:grid tablet:grid-cols-2 tablet:gap-x-4">
                    <TextField pattern={/^[0-9]+$/} errorType={errors?.["eMoneyNumber"]?.type} error={!!errors?.["eMoneyNumber"]} required={true} register={register} name="eMoneyNumber" label={"e-Money Number"} placeholder={"238521993"}/>
                    <TextField pattern={/^[0-9]+$/} errorType={errors?.["eMoneyPIN"]?.type} error={!!errors?.["eMoneyPIN"]} required={true} register={register} name="eMoneyPIN" label={"e-Money PIN"} placeholder={"6891"}/>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
