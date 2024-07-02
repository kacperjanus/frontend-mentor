import React, {ChangeEventHandler, useEffect, useState} from 'react';
import {z} from "zod";
import validator from "validator";
import {textInputField} from "@/app/interfaces";

interface InputProps {
    el: textInputField,
    index: number,
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    isSubmitted: boolean
    valid: boolean
    setIsValid: React.Dispatch<React.SetStateAction<boolean[]>>
}

function Input({value, onChange, el, index, isSubmitted, valid, setIsValid}: InputProps) {
    const nameParse = (value: string) => z.string().safeParse(value).success;
    const emailParse = (value: string) => z.string().email().safeParse(value).success;
    const phoneNumberParse = (value: string) => z.string().refine(validator.isMobilePhone).safeParse(value).success;

    const [zodParse, setZodParse] = useState<boolean>(false)

    useEffect(() => {
        setZodParse(el.regex === "name" ? nameParse(value) : el.regex === "email" ? emailParse(value) : el.regex === "phoneNumber" ? phoneNumberParse(value) : true)
        setIsValid(s => s.with(index, zodParse))
    }, [el.regex, index, setIsValid, zodParse, value])

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => onChange(e?.target.value)

    return (
        <div className="flex flex-col pt-5">
            <div className="flex justify-between items-center">
                <label className="text-marine-blue">{el.label}</label>
                {isSubmitted && value === "" ?
                    <p className="font-bold text-strawberry-red"> This field is required</p> : isSubmitted && !valid ?
                        <p className="font-bold text-strawberry-red"> Incorrect format</p> : ""}
            </div>
            <input required value={value} onChange={handleChange}
                   className={`${isSubmitted && (value === "" || !zodParse) ? "border-strawberry-red" : "border-light-gray"} p-3 border-solid border-[1px] rounded-xl active:border-marine-blue text-marine-blue font-bold placeholder:font-normal cursor-pointer`}
                   placeholder={el.placeholder}/>
        </div>
    );
}

export default Input;