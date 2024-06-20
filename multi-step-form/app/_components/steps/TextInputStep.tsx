import React, {FormEventHandler, useState} from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import {z} from "zod";
import validator from "validator";
import {InitialValuesInterface, textInputField} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface StepOneProps {
    fields: textInputField[],
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    values: InitialValuesInterface
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>
    stepNumber: number
}

function TextInputStep({fields, setStepNumber, values, setValues, stepNumber}: StepOneProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        // if(nameParse && emailParse && phoneNumberParse){
            setStepNumber((s)=>s+1)
        // }
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = function(e){
        e.preventDefault();
        setIsSubmitted(true)
    }

    const nameParse = z.string().safeParse(values.name).success;
    const emailParse = z.string().email().safeParse(values.email).success;
    const phoneNumberParse = z.string().refine(validator.isMobilePhone).safeParse(values.phoneNumber).success;

    console.log(values)

    return (
        <div className="h-full mb-4">
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between" noValidate>
            <div>
                {fields.map((el: textInputField, i: number)=><Input
                    index={i}
                    key={fields[i].label}
                    label={fields[i].label}
                    placeholder={fields[i].placeholder}
                    isSubmitted={isSubmitted}
                    zodParse={el.regex === "name" ? nameParse : el.regex === "email" ? emailParse : el.regex === "phoneNumber" ? phoneNumberParse : true}
                    value={values[stepNumber-1][i]}
                    onChange={(value)=>setValues(values.with(stepNumber-1, values[stepNumber-1].with(i, value)))}
                />)}
            </div>
            <NavigationButtons step={stepNumber} setStepNumber={setStepNumber}/>
        </form>
        </div>
    );
}

export default TextInputStep;