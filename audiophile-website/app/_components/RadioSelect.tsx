import React from 'react';

interface RadioSelectProps {
    label: string
}

function RadioSelect({label} : RadioSelectProps) {
    return (
        <div className="w-[309px] flex border-solid border-[1px] font-bold border-[#CFCFCF] hover:border-earthy rounded-lg py-4 px-6 gap-4">
            <input id="id" type="radio" className="relative appearance-none w-6 h-6 border-[#CFCFCF] border-[1px] rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:content-[''] checked:after:w-3 checked:after:h-3 checked:after:bg-earthy checked:after:rounded-full"/>
            <label htmlFor="id">{label}</label>
        </div>
    );
}

export default RadioSelect;