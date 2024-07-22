"use client"

import React from 'react';

interface NumbersProps {
    max: number
    count: number
    minusFn: () => void
    plusFn: () => void
}

function Numbers({max, count, minusFn, plusFn}: NumbersProps) {

    const increase = function () {
        if (count < max) {
            plusFn()
        }
    }

    const decrease = function () {
        if (count != 0) {
            minusFn()
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