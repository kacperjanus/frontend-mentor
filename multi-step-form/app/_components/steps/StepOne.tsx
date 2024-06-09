import React, {FormEventHandler, useState} from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import {z} from "zod";
import validator from "validator";

interface StepOneProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    email: string,
    phoneNumber: string,
    name: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function StepOne({setStepNumber, email, name, phoneNumber, setName, setPhoneNumber, setEmail}: StepOneProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        if(nameParse && emailParse && phoneNumberParse){
            setStepNumber((s)=>s+1)
        }
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = function(e){
        e.preventDefault();
        setIsSubmitted(true)
    }

    const emailSchema = z.string().email();
    const phoneNumberSchema = z.string().refine(validator.isMobilePhone);
    const nameSchema = z.string();

    const nameParse = nameSchema.safeParse(name).success;
    const emailParse = emailSchema.safeParse(email).success;
    const phoneNumberParse = phoneNumberSchema.safeParse(phoneNumber).success;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between" noValidate>
            <div>
            <Input zodParse={nameParse} value={name} onChange={setName} isSubmitted={isSubmitted} label="Name" placeholder="e.g. Stephen King"/>
            <Input zodParse={emailParse} value={email} onChange={setEmail} isSubmitted={isSubmitted} label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
            <Input zodParse={phoneNumberParse} value={phoneNumber} onChange={setPhoneNumber} isSubmitted={isSubmitted} label="Phone Number" placeholder="e.g. +1 234 567 890"/>
            </div>
            <div className="md:static w-full fixed bg-white top-[31em] bottom-0 right-0 justify-center md:justify-end flex py-4 pr-4 md:py-0 md:pr-0 self-end md:bg-none ">
                <div className="ml-[10.7rem] md:ml-0">
                <Button setStepNumber={increaseStep} content="Next Step"/>
                </div>
            </div>
        </form>
    );
}

export default StepOne;