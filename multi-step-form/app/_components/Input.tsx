import React, {ChangeEventHandler} from 'react';

function Input({label, placeholder, value, onChange, isSubmitted, zodParse}: {label: string; placeholder: string, value: string, onChange: React.Dispatch<React.SetStateAction<string>>, isSubmitted: boolean, zodParse: boolean}) {
    const handleChange: ChangeEventHandler<HTMLInputElement> = function(e){
        onChange(e?.target.value)
    }

    return (
        <div className="flex flex-col pt-5">
            <div className="flex justify-between items-center">
                <label className="text-marine-blue">{label}</label>
                {isSubmitted && value==="" ? <p className="font-bold text-strawberry-red"> This field is required</p>: isSubmitted && !zodParse ? <p className="font-bold text-strawberry-red"> Incorrect format</p>: ""}
            </div>
            <input required value={value} onChange={handleChange} className={`${isSubmitted && value === "" ? "border-strawberry-red" :"border-light-gray"} p-3 border-solid border-[1px] rounded-xl active:border-marine-blue text-marine-blue font-bold placeholder:font-normal cursor-pointer`} placeholder={placeholder}/>
        </div>
    );
}

export default Input;