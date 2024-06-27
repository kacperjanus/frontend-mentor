"use client"

import React, {useState} from 'react';
import Link from "next/link";
import MobileNavigation from "@/app/_components/MobileNavigation";
import {motion, AnimatePresence} from "framer-motion";
import Logo from "@/app/_components/Logo";

function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    return (
        <>
            <div className="w-full h-[90px] px-6 py-[32px] bg-black z-20 relative">
                <div className="max-w-[1100px] mx-auto flex w-full items-center">
                    <img onClick={()=>setIsMobileNavOpen(s=>!s)} className="desktop:hidden" src="/assets/shared/tablet/icon-hamburger.svg" alt="Hamburger icon"/>
                    <div className="mx-auto tablet:mr-auto tablet:ml-10 desktop:mx-0">
                        <Logo/>
                    </div>
                    <nav className="hidden desktop:block desktop:mx-auto">
                        <ul className="flex h-full gap-[34px]">
                            <li>
                                <Link href="/" className="nav-text">home</Link>
                            </li>
                            <li>
                                <Link href="/headphones" className="nav-text">headphones</Link>
                            </li>
                            <li>
                                <Link href="/speakers" className="nav-text">speakers</Link>
                            </li>
                            <li>
                                <Link href="/earphones" className="nav-text">earphones</Link>
                            </li>
                        </ul>
                    </nav>
                    <img src="/assets/shared/desktop/icon-cart.svg" alt="Cart icon"/>
                </div>
            </div>
            <AnimatePresence>
                {isMobileNavOpen && <motion.div key="mobile-nav" className="relative z-10" exit={{ opacity: 0 }}>
                        <div onClick={()=>setIsMobileNavOpen(false)} className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
                        <MobileNavigation/>
                    </motion.div>}
            </AnimatePresence>
        </>
    );
}

export default Header;