import React, {FormEventHandler, useState} from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import {z} from "zod";
import validator from "validator";
import {textInputField} from "@/app/interfaces";

interface StepOneProps {
    fields: any,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    values: any
    setValues: React.Dispatch<React.SetStateAction<any>>
}

function TextInputStep({fields, setStepNumber, values, setValues}: StepOneProps) {
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

    const nameParse = z.string().safeParse(values.name).success;
    const emailParse = z.string().email().safeParse(values.email).success;
    const phoneNumberParse = z.string().refine(validator.isMobilePhone).safeParse(values.phoneNumber).success;

    return (
        <div className="h-full mb-4">
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between" noValidate>
            <div>
                {fields.map((el: textInputField, i: number)=><Input
                    key={fields[i].label}
                    label={fields[i].label}
                    placeholder={fields[i].placeholder}
                    isSubmitted={isSubmitted}
                    zodParse={el.regex === "name" ? nameParse : el.regex === "email" ? emailParse : el.regex === "phoneNumber" ? phoneNumberParse : true}
                    value={values[fields[i].regex]}
                    onChange={(value)=>setValues({...values, [fields[i].regex]: value})}
                />)}
            </div>
            <div className="md:static w-full fixed bg-white top-[31em] bottom-0 right-0 justify-center md:justify-end flex py-4 pr-4 md:py-0 md:pr-0 self-end md:bg-none ">
                <div className="ml-[10.7rem] md:ml-0">
                <Button setStepNumber={increaseStep} content="Next Step"/>
                </div>
            </div>
        </form>
        </div>
    );
}

export default TextInputStep;