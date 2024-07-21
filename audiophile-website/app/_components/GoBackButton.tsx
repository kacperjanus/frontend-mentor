"use client"

import React from 'react';
import {useRouter} from "next/navigation";

function GoBackButton() {
    const router = useRouter()
    return (
        <div className="my-4 desktop:mt-16 desktop:mb-12">
            <button onClick={() => router.back()}>
                <span className="text-[15px] font-medium leading-[25px] text-dark-grey">Go Back</span>
            </button>
        </div>
    );
}

export default GoBackButton;