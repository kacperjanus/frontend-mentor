import React from 'react';

interface TextFieldProps {
    label: string
    placeholder: string
    error?: boolean
}

function TextField({label, placeholder, error}: TextFieldProps) {
    return (
        <div className="w-full flex flex-col gap-2 mb-6">
            <div className="flex justify-between items-center">
                <label className={`${error ? "text-red-700" : ""} text-[12px] font-bold`}
                       htmlFor={label}>{label}</label>
                {error && <span className="text-red-700 text-[12px]">Wrong format</span>}
            </div>
            <input className={`border-solid border-[1px] w-full font-bold border-[#CFCFCF] rounded-lg py-4 px-6 placeholder:font-medium placeholder:text-[14px] focus:border-earthy focus:outline-none ${error ? "border-[2px] border-red-700" : ""}`}
                   type="text" placeholder={placeholder}/>
        </div>
    );
}

export default TextField;