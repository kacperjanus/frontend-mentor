"use client"

import React from 'react';
import {useRouter} from "next/navigation";

function GoBackButton() {
    const router = useRouter()
    return (
        <div className="py-4 desktop:pt-16 desktop:pb-12">
            <button onClick={() => router.back()}>
                <span className="text-[15px] font-medium leading-[25px] text-dark-grey">Go Back</span>
            </button>
        </div>
    );
}

export default GoBackButton;