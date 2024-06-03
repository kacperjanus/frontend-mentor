import React from 'react';
import Logo from "@/app/_components/Logo";
import Link from "next/link";

function Header() {
    return (
        <div className="bg-white w-screen h-24 px-10 flex items-center gap-10 max-w-7xl mx-auto pt-10">
            <Logo/>
            <div className="w-full flex items-center justify-between">
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

        </div>
    );
}

export default Header;