import React from 'react';
import {UseFormRegister} from "react-hook-form";

interface TextFieldProps {
    label: string
    placeholder: string
    error?: boolean
    errorType: string | undefined
    register: UseFormRegister<any>,
    name: string
    required: boolean
    pattern?: RegExp
}

function TextField({label, errorType, placeholder, error, register, name, required, pattern}: TextFieldProps) {
    return (
        <div className="w-full flex flex-col gap-2 mb-6">
            <div className="flex justify-between items-center">
                <label className={`${error ? "text-red-700" : ""} text-[12px] font-bold`}
                       htmlFor={label}>{label}</label>
                {error &&
                    <span className="text-red-700 text-[12px]">{errorType === "required" ? "This field is required" : "Wrong format"}</span>}
            </div>
            <input className={`border-solid border-[2px] w-full font-bold rounded-lg py-4 px-6 placeholder:font-medium placeholder:text-[14px] focus:border-earthy focus:outline-none  ${error ? " border-red-700" : "border-[#CFCFCF]"}`}
                   type="text" placeholder={placeholder} {...register(name, {
                required: required,
                pattern: pattern || /.*?/
            })}/>
        </div>
    );
}

export default TextField;