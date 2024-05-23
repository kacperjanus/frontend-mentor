import React from 'react';

function Input({label, placeholder}: {label: string; placeholder: string}) {
    return (
        <div className="flex flex-col pt-5">
            <label className="text-marine-blue">{label}</label>
            <input required className="p-3 border-solid border-light-gray border-[1px] rounded-xl" placeholder={placeholder}/>
        </div>
    );
}

export default Input;