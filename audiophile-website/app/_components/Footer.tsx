import React from 'react';
import Logo from "@/app/_components/Logo";
import Link from "next/link";

function Footer() {
    return (
        <div className="relative bg-[#101010] h-[654px] flex flex-col justify-center items-center gap-12 text-white text-center px-6">
            <span className="absolute top-0 h-1 bg-earthy w-24"></span>
            <Logo/>

            <ul className="flex flex-col gap-4">
                <li>
                    <Link href="/">
                        <span className="font-bold tracking-[2px] leading-[25px]">HOME</span>
                    </Link>
                </li>
                <li>
                    <Link href="/headphones">
                        <span className="font-bold tracking-[2px] leading-[25px]">HEADPHONES</span>
                    </Link>
                </li>
                <li>
                    <Link href="/speakers">
                        <span className="font-bold tracking-[2px] leading-[25px]">SPEAKERS</span>
                    </Link>
                </li>
                <li>
                    <Link href="/earphones">
                        <span className="font-bold tracking-[2px] leading-[25px]">EARPHONES</span>
                        </Link>
                </li>
            </ul>

            <p className="text-[#878787]">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

            <p className="font-bold text-[#878787]">Copyright 2021. All Rights Reserved</p>

            <div className="flex gap-4">
                <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook logo"/>
                <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter logo"/>
                <img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram logo"/>
            </div>
        </div>
    );
}

export default Footer;