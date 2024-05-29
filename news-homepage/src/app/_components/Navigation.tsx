"use client"

import React from 'react';
import Link from "next/link";

function Navigation({isNavOpen} : {isNavOpen: boolean}) {
    return (
        <div>
            <ul className="hidden md:flex text-lg gap-10 text-dark-grayish-blue">
                <li className="hover:text-soft-orange"><Link href="/">Home</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>New</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Popular</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Trending</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Categories</Link></li>
            </ul>
            <div className={`transition-all bg-black h-full top-0 right-0 left-0 z-10 md:hidden opacity-30 ${isNavOpen ? "fixed" : "hidden"}`}></div>
            <ul className={`transition-all z-10 bg-white h-screen ${isNavOpen ? "flex" : "translate-x-[20rem] flex"} fixed flex-col md:hidden text-lg gap-6 top-0 right-0 pt-48 w-[17rem] p-10 font-medium text-very-dark-blue`}>
                <li className="hover:text-soft-orange"><Link href="/">Home</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>New</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Popular</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Trending</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Categories</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;