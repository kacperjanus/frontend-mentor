import React from 'react';
import Logo from "@/app/_components/Logo";

function Header() {
    return (
        <div className="text-white w-full p-6 flex justify-between items-center">
            <Logo/>
            <img src="/shared/icon-hamburger.svg" alt="Hamburger icon"/>
        </div>
    );
}

export default Header;