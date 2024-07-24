"use client"

import React, {SetStateAction} from 'react';
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header({cartFn, navFn}: {
    cartFn: React.Dispatch<SetStateAction<boolean>>,
    navFn: React.Dispatch<SetStateAction<boolean>>
}) {
    return (<div className="w-full h-[90px] px-6 py-[32px] bg-black z-50 relative">
            <div className="max-w-[1100px] mx-auto flex w-full items-center">
                <img onClick={() => navFn(s => !s)} className="desktop:hidden cursor-pointer"
                     src="/assets/shared/tablet/icon-hamburger.svg" alt="Hamburger icon"/>
                <div className="mx-auto tablet:mr-auto tablet:ml-10 desktop:mx-0">
                    <Logo/>
                </div>
                <Navigation/>
                <img className="cursor-pointer" onClick={() => cartFn(s => !s)}
                     src="/assets/shared/desktop/icon-cart.svg"
                     alt="Cart icon"/>
            </div>
        </div>


    );
}

export default Header;