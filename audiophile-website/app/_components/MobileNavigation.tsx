import React from 'react';
import MobileNavigationSection from "@/app/_components/MobileNavigationSection";
import {motion} from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function MobileNavigation() {
    return (
        <motion.div variants={container}
                    key="mobile-navigation"
                    initial="hidden"
                    animate="visible"
                    className="h-[750px] tablet:h-[340px] w-full flex flex-col tablet:flex-row justify-evenly items-center ">
            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
                <MobileNavigationSection to="/headphones" title="headphones" image="/assets/shared/desktop/image-category-thumbnail-headphones.png"/>
            </motion.div>
            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
                <MobileNavigationSection to="/speakers" title="speakers" image="/assets/shared/desktop/image-category-thumbnail-speakers.png"/>
            </motion.div>
            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
                <MobileNavigationSection to="/earphones" title="earphones" image="/assets/shared/desktop/image-category-thumbnail-earphones.png"/>
            </motion.div>
        </motion.div>
    );
}

export default MobileNavigation;