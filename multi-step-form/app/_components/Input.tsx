import React, {ChangeEventHandler, useState} from 'react';
import {z} from "zod";
import validator from "validator";
import {textInputField} from "@/app/interfaces";

function Input({label, placeholder, value, onChange, el, index}: { el: textInputField, index: number, label: string; placeholder: string, value: string, onChange: React.Dispatch<React.SetStateAction<string>>}) {
    const nameParse = (value: string)=> z.string().safeParse(value).success;
    const emailParse = (value: string)=> z.string().email().safeParse(value).success;
    const phoneNumberParse = (value: string)=> z.string().refine(validator.isMobilePhone).safeParse(value).success;

    const [zodParse, setZodParse] = useState<boolean>(false)

    const handleChange: ChangeEventHandler<HTMLInputElement> = function(e){
        setZodParse(el.regex === "name" ? nameParse(e?.target.value) : el.regex === "email" ? emailParse(e?.target.value) : el.regex === "phoneNumber" ? phoneNumberParse(e?.target.value) : true)
        // setIsValid(s=>s.with(index, zodParse))
        onChange(e?.target.value)
    }


    return (
        <div className="flex flex-col pt-5">
            <div className="flex justify-between items-center">
                <label className="text-marine-blue">{label}</label>
                {/*{isSubmitted && value==="" ? <p className="font-bold text-strawberry-red"> This field is required</p>: isSubmitted && !isValid ? <p className="font-bold text-strawberry-red"> Incorrect format</p>: ""}*/}
                {/*{isSubmitted && value==="" ? <p className="font-bold text-strawberry-red"> This field is required</p> : ""}*/}
            </div>
            {/*<input required value={value} onChange={handleChange} className={`${isSubmitted && value === "" ? "border-strawberry-red" :"border-light-gray"} p-3 border-solid border-[1px] rounded-xl active:border-marine-blue text-marine-blue font-bold placeholder:font-normal cursor-pointer`} placeholder={placeholder}/>*/}
            <input required value={value} onChange={handleChange} className={`border-light-gray p-3 border-solid border-[1px] rounded-xl active:border-marine-blue text-marine-blue font-bold placeholder:font-normal cursor-pointer`} placeholder={placeholder}/>
        </div>
    );
}

export default Input;