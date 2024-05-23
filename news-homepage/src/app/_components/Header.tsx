import React from 'react';
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
    return (
        <div className="max-w-[68rem] mx-auto pt-20 pb-16 flex justify-between items-center bg-off-white px-4">
            <Logo/>
            <Navigation/>
        </div>
    );
}

export default Header;