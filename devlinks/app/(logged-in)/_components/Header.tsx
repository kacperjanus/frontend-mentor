import React from 'react';
import Logo from "@/app/_components/Logo";
import Tabs from "@/app/_components/Tabs";
import Image from "next/image";
import Button from "@/app/_components/Button";

function Header() {
    return (
        <div className="w-full tablet:w-auto py-4 pl-6 pr-4 tablet:m-6 bg-white flex justify-between items-center tablet:rounded-xl">
            <div className="pr-5 block tablet:hidden">
                <Logo mini={true}/>
            </div>
            <div className="pr-5 hidden tablet:block">
                <Logo mini={false}/>
            </div>
            <Tabs labels={["Links", "Profile details"]} icons={["/assets/images/icon-link.svg", "/assets/images/icon-profile-details-header.svg"]}/>
            <Button className="w-min" variant="secondary">
                <Image className="block tablet:hidden" width={20} height={20} src="/assets/images/icon-preview-header.svg" alt="Eye icon"/>
                <p className="hidden tablet:block">Preview</p>
            </Button>
        </div>
    );
}

export default Header;