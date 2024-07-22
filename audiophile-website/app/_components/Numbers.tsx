"use client"

import React, {SetStateAction} from 'react';

interface NumbersProps {
    max: number
    count: number
    setCount: React.Dispatch<SetStateAction<number>>
}

function Numbers({max, count, setCount}: NumbersProps) {

    const increase = function () {
        if (count < max) {
            setCount(s => s + 1)
        }
    }

    const decrease = function () {
        if (count != 0) {
            setCount(s => s - 1)
        }
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