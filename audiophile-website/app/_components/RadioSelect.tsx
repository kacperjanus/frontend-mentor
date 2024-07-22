import React from 'react';

interface RadioSelectProps {
    label: string
    active: boolean
    setChecked: React.Dispatch<React.SetStateAction<number>>
    index: number
}

function RadioSelect({label, active, setChecked, index}: RadioSelectProps) {
    const handleRadioChange: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Done")
        e.stopPropagation();
        setChecked(index)
    }

    return (
        <div
            onClick={handleRadioChange}
            className="w-full flex border-solid border-[1px] font-bold border-[#CFCFCF] hover:border-earthy rounded-lg py-4 px-6 gap-4 mb-6">
            <input readOnly checked={active} id="id" type="radio"
                   className="relative appearance-none w-6 h-6 border-[#CFCFCF] border-[1px] rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:content-[''] checked:after:w-3 checked:after:h-3 checked:after:bg-earthy checked:after:rounded-full"/>
            <label htmlFor={`id-${index}`}>{label}</label>
        </div>
    );
}

export default RadioSelect;