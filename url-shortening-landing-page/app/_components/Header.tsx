"use client"

import React, {useState} from 'react';
import Logo from "@/app/_components/Logo";
import Link from "next/link";

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="bg-white w-screen h-24 px-10 flex items-start md:items-center gap-10 max-w-7xl mx-auto pt-10 justify-between md:justify-normal">
            <Logo/>
            <div className="w-full hidden md:flex md:items-center justify-between">
                <div className="flex gap-6">
                    <Link className="text-grayish-blue font-medium text-sm hover:text-very-dark-violet" href="/">Features</Link>
                    <Link className="text-grayish-blue font-medium text-sm hover:text-very-dark-violet" href="/">Pricing</Link>
                    <Link className="text-grayish-blue font-medium text-sm hover:text-very-dark-violet" href="/">Resources</Link>
                </div>
                <div className="flex gap-10 items-center">
                    <Link className="text-grayish-blue font-medium text-sm hover:text-very-dark-violet" href="/">Login</Link>
                    <Link className="text-white text-sm font-medium bg-cyan px-6 py-2 rounded-full hover:bg-[#9AE2E2]" href="/">Sign Up</Link>
                </div>
            </div>
            {!navOpen && <button onClick={() => setNavOpen(s => !s)} className="md:hidden -mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>}
            {navOpen && <button onClick={() => setNavOpen(s => !s)} className="md:hidden -mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </button>}
            {navOpen && <div
                className="fixed md:hidden z-20 bg-dark-violet top-32 right-10 left-10 rounded-lg text-white py-10 divide-y-[1px] divide-grayish-blue px-2">
                <div className="flex flex-col gap-6 text-lg w-full items-center mb-6">
                    <Link className="font-bold"
                          href="/">Features</Link>
                    <Link className="font-bold"
                          href="/">Pricing</Link>
                    <Link className="font-bold"
                          href="/">Resources</Link>
                </div>
                <div className="flex flex-col gap-6 text-lg items-center pt-6">
                    <Link className="font-bold"
                          href="/">Login</Link>
                    <Link className="text-white font-bold bg-cyan px-6 py-2 rounded-full hover:bg-[#9AE2E2]"
                          href="/">Sign Up</Link>
                </div>
            </div>}
        </div>
    );
}

export default Header;