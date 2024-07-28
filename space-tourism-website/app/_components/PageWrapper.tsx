"use client"
import React from 'react';
import {usePathname} from "next/navigation";

function PageWrapper({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    return (
        <div className={`min-h-screen bg-${pathname.slice(1) === "" ? "home" : pathname.slice(1)}-mobile tablet:bg-${pathname.slice(1) === "" ? "home" : pathname.slice(1)}-tablet desktop:bg-${pathname.slice(1) === "" ? "home" : pathname.slice(1)}-desktop bg-no-repeat bg-cover bg-bottom desktop:bg-right flex flex-col h-full`}>
            {children}
        </div>
    );
}

export default PageWrapper;