"use client"

import React, {useState} from 'react';

interface NumbersProps{
    max: number
}

function Numbers({max}: NumbersProps) {
    const [count, setCount] = useState(0)

    const increase = function(){
        if(count < max){setCount(s=>s+1)}
    }

    const decrease = function () {
        if(count != 0){setCount(s=>s-1)}
    }
    return (
        <div className="w-[120px] h-12 bg-grey flex justify-evenly items-center">
            <button onClick={decrease} className="h-full w-[33.33333%] text-[#CFCFCF] hover:text-earthy">-</button>
            <span className="font-bold">{count}</span>
            <button onClick={increase} className="h-full w-[33.33333%] text-[#CFCFCF] hover:text-earthy">+</button>
        </div>
    );
}

export default Numbers;