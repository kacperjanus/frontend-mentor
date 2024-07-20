import React from 'react';
import MobileNavigationSection from "@/app/_components/MobileNavigationSection";

function QuickMenu() {
    return (
        <div
            className="bg-white h-[750px] tablet:h-[340px] w-full flex flex-col tablet:flex-row justify-evenly items-center desktop:max-w-[1110px] desktop:mx-auto">
            <MobileNavigationSection to="/headphones" title="headphones"
                                     image="/assets/shared/desktop/image-category-thumbnail-headphones.png"/>
            <MobileNavigationSection to="/speakers" title="speakers"
                                     image="/assets/shared/desktop/image-category-thumbnail-speakers.png"/>
            <MobileNavigationSection to="/earphones" title="earphones"
                                     image="/assets/shared/desktop/image-category-thumbnail-earphones.png"/>
        </div>
    );
}

export default QuickMenu;