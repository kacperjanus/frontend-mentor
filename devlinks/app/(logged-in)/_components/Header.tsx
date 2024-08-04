"use client"

import React from 'react';
import Logo from "@/app/_components/Logo";
import Tabs from "@/app/_components/Tabs";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";

function Header() {
    const pathname = usePathname()
    const router = useRouter();
    const activeTab = pathname === "/links" ? 0 : 1;

    return (
        <div className="w-full tablet:w-auto py-4 pl-6 pr-4 tablet:m-6 bg-white flex justify-between items-center tablet:rounded-xl">
            <div className="pr-5 block tablet:hidden">
                <Logo mini={true}/>
            </div>
            <div className="pr-5 hidden tablet:block">
                <Logo mini={false}/>
            </div>
            <Tabs fns={[() => router.push('/links'), () => router.push('/profile')]} defaultActive={activeTab} labels={["Links", "Profile details"]} icons={["/assets/images/icon-link.svg", "/assets/images/icon-profile-details-header.svg"]}/>
            <Link href={"/preview"} className={`border-[1px] border-dark-lavender px-4 py-[11px] rounded-[8px] heading-s text-dark-lavender`}>
                <Image className="block tablet:hidden" width={20} height={20} src="/assets/images/icon-preview-header.svg" alt="Eye icon"/>
                <p className="hidden tablet:block">Preview</p>
            </Link>
        </div>
    );
}

export default Header;