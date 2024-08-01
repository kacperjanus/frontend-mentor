import React from 'react';
import Logo from "@/app/_components/Logo";
import Tabs from "@/app/_components/Tabs";
import Image from "next/image";

function Header() {
    return (
        <div className="w-full py-4 pl-6 pr-4 bg-white flex justify-between items-center">
            <div className="pr-5">

                <Logo mini={true}/>
            </div>
            <Tabs labels={["", ""]} icons={["/assets/images/icon-link.svg", "/assets/images/icon-profile-details-header.svg"]}/>
            <div className="px-4 py-[11px] border-2 border-dark-lavender rounded-lg">
                <Image width={20} height={20} src="/assets/images/icon-preview-header.svg" alt="Eye icon"/>
            </div>
        </div>
    );
}

export default Header;