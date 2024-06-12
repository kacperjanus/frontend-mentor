import React from 'react';

function NavigationItem({number, name, active}: {number: number, name: string, active: number}) {
    return (
        <div className={`my-auto nav-text h-full py-10 border-b-2 border-transparent hover:border-b-[rgba(255,255,255,0.5)] cursor-pointer ${number === active ? "border-b-white hover:border-b-white border-b-2" : ""}`}>
            <span>{number < 10 ? `0${number}` : "number"}</span>
            <span> </span>
            <span className="uppercase">{name}</span>
        </div>
    );
}

export default NavigationItem;