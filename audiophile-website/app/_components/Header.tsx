"use client"

import React, {useEffect, useState} from 'react';
import MobileNavigation from "@/app/_components/MobileNavigation";
import {motion, AnimatePresence} from "framer-motion";
import Logo from "@/app/_components/Logo";
import Cart from "@/app/_components/Cart";
import Overlay from "@/app/_components/Overlay";
import {usePathname} from "next/navigation";
import Navigation from "@/app/_components/Navigation";

function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        setIsMobileNavOpen(false)
        setIsCartOpen(false)
    }, [pathname])

    return (
        <>
            <div className="w-full h-[90px] px-6 py-[32px] bg-black z-50 relative">
                <div className="max-w-[1100px] mx-auto flex w-full items-center">
                    <img onClick={() => setIsMobileNavOpen(s => !s)} className="desktop:hidden cursor-pointer"
                         src="/assets/shared/tablet/icon-hamburger.svg" alt="Hamburger icon"/>
                    <div className="mx-auto tablet:mr-auto tablet:ml-10 desktop:mx-0">
                        <Logo/>
                    </div>
                    <Navigation/>
                    <img className="cursor-pointer" onClick={() => setIsCartOpen(s => !s)}
                         src="/assets/shared/desktop/icon-cart.svg"
                         alt="Cart icon"/>
                </div>
            </div>

            {/*MOBILE NAVIGATION*/}
            <AnimatePresence>
                {isMobileNavOpen && <motion.div key="mobile-nav" className="relative z-10" exit={{opacity: 0}}>
                    <Overlay onClick={() => setIsMobileNavOpen(false)}/>
                    <MobileNavigation/>
                </motion.div>}
            </AnimatePresence>

            {/*CART*/}
            <AnimatePresence>
                {isCartOpen &&
                    <motion.div className="relative z-10" exit={{opacity: 0}} transition={{duration: 0.3}}>
                        <Overlay onClick={() => setIsCartOpen(false)}/>
                        <Cart/>
                    </motion.div>}
            </AnimatePresence>
        </>
    );
}

export default Header;