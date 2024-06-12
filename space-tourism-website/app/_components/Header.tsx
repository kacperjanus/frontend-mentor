import React from 'react';
import Logo from "@/app/_components/Logo";
import NavigationItem from "@/app/_components/single-components/NavigationItem";

function Header() {
    return (
        <div className="text-white w-full pl-6 py-6 flex items-center justify-between">
            <Logo/>
            <nav className="hidden tablet:flex gap-[40px] backdrop-blur-lg bg-[rgba(255,255,255,0.1)] pl-40 pr-6">
                <NavigationItem to={"/"} number={0} name={"Home"} active={0}/>
                <NavigationItem to={"/destination"} number={1} name={"Destination"} active={0}/>
                <NavigationItem to={"/crew"} number={2} name={"Crew"} active={0}/>
                <NavigationItem to={"/technology"} number={3} name={"Technology"} active={0}/>
            </nav>
            <img className="block tablet:hidden pr-6" src="/shared/icon-hamburger.svg" alt="Hamburger icon"/>
        </div>
    );
}

export default Header;