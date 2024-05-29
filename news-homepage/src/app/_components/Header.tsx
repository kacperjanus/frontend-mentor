"use client"
import React, {useState} from 'react';
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div
            className="max-w-[68rem] mx-auto pt-10 md:pt-20 pb-16 flex justify-between items-center bg-off-white px-4">
            <Logo/>
            <Navigation isNavOpen={isNavOpen}/>
            <p onClick={() => setIsNavOpen(s => !s)} className="fixed right-5 md:hidden z-20 text-5xl">{isNavOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            }</p>
        </div>
    );
}

export default Header;