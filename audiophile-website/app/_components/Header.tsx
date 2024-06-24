"use client"

import React, {useState} from 'react';
import Link from "next/link";
import MobileNavigation from "@/app/_components/MobileNavigation";
import {motion, AnimatePresence} from "framer-motion";

function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    return (
        <>
            <div className="w-full h-[90px] px-6 py-[32px] bg-black">
                <div className="max-w-[1440px] mx-auto flex w-full items-center">
                    <img onClick={()=>setIsMobileNavOpen(s=>!s)} className="desktop:hidden" src="/assets/shared/tablet/icon-hamburger.svg" alt="Hamburger icon"/>
                    <Link href="/" className="mx-auto tablet:mr-auto tablet:ml-10 desktop:mx-0">
                        <img src="/assets/shared/desktop/logo.svg" alt="Logo"/>
                    </Link>
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
                {isMobileNavOpen && <motion.div key="mobile-nav" exit={{ opacity: 0 }}>
                        <MobileNavigation/>
                    </motion.div>}
            </AnimatePresence>
        </>
    );
}

export default Header;