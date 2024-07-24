"use client"

import React, {useEffect, useState} from 'react';
import MobileNavigation from "@/app/_components/MobileNavigation";
import {motion, AnimatePresence} from "framer-motion";
import Cart from "@/app/_components/Cart";
import Overlay from "@/app/_components/Overlay";
import {usePathname} from "next/navigation";
import Header from "@/app/_components/Header";

function HeaderSection() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        setIsMobileNavOpen(false)
        setIsCartOpen(false)
    }, [pathname])

    return (
        <>
            <Header cartFn={setIsCartOpen} navFn={setIsMobileNavOpen}/>

            {/*MOBILE NAVIGATION*/}
            <AnimatePresence>
                {isMobileNavOpen &&
                    <motion.div key="mobile-nav" className="relative z-10 desktop:hidden" exit={{opacity: 0}}>
                        <Overlay onClick={() => setIsMobileNavOpen(false)}/>
                        <MobileNavigation/>
                    </motion.div>}
            </AnimatePresence>

            {/*CART*/}
            <AnimatePresence>
                {isCartOpen &&
                    <motion.div className="relative z-30" exit={{opacity: 0}} transition={{duration: 0.3}}>
                        <Overlay onClick={() => setIsCartOpen(false)}/>
                        <Cart/>
                    </motion.div>}
            </AnimatePresence>
        </>
    );
}

export default HeaderSection;