"use client"

import React from 'react';
import Logo from "@/app/_components/Logo";
import NavigationItem from "@/app/_components/single-components/NavigationItem";
import {usePathname} from "next/navigation";

function Header() {
    const pathname = usePathname()
    console.log(pathname)

    const isActive = (href: string) => pathname === href;

    return (
        <div className="text-white w-full py-6 px-6 tablet:px-0 flex items-center justify-between">
            <div className="tablet:px-16">
                <Logo/>
            </div>
            <nav className="hidden tablet:flex tablet:w-full tablet:justify-end desktop:w-fit gap-[40px] backdrop-blur-lg bg-[rgba(255,255,255,0.1)] tablet:px-[40px] desktop:px-[64px]">
                <NavigationItem to={"/"} number={0} name={"Home"} active={isActive("/")}/>
                <NavigationItem to={"/destination"} number={1} name={"Destination"} active={isActive("/destination")}/>
                <NavigationItem to={"/crew"} number={2} name={"Crew"} active={isActive("/crew")}/>
                <NavigationItem to={"/technology"} number={3} name={"Technology"} active={isActive("/technology")}/>
            </nav>
            <img className="block tablet:hidden" src="/shared/icon-hamburger.svg" alt="Hamburger icon"/>
        </div>
    );
}

export default Header;