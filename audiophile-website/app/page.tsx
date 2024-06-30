import HeroSection from "@/app/_components/HeroSection";
import MobileNavigationSection from "@/app/_components/MobileNavigationSection";
import React from "react";
import ProductHighlight from "@/app/_components/ProductHighlight";
import About from "@/app/_components/About";

export default function Home() {
    return (
        <div className="mx-6 tablet:mx-10">
            <HeroSection name="XX99 MARK II HEADPHONES" header="new product"
                         description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
                         image={["/assets/home/mobile/image-header.jpg", "/assets/home/tablet/image-header.jpg", "/assets/home/desktop/image-hero.jpg"]}/>
            <div
                className="bg-white h-[750px] tablet:h-[340px] w-full flex flex-col tablet:flex-row justify-evenly items-center desktop:max-w-[1110px] desktop:mx-auto">
                <MobileNavigationSection to="/headphones" title="headphones"
                                         image="/assets/shared/desktop/image-category-thumbnail-headphones.png"/>
                <MobileNavigationSection to="/speakers" title="speakers"
                                         image="/assets/shared/desktop/image-category-thumbnail-speakers.png"/>
                <MobileNavigationSection to="/earphones" title="earphones"
                                         image="/assets/shared/desktop/image-category-thumbnail-earphones.png"/>
            </div>

            <ProductHighlight name={"zx9 speaker"}
                              description={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
                              image={["/assets/home/mobile/image-speaker-zx9.png", "/assets/home/tablet/image-speaker-zx9.png", "/assets/home/desktop/image-speaker-zx9.png"]}
                              type={"primary"}/>
            <ProductHighlight name={"zx7 speaker"}
                              image={["/assets/home/mobile/image-speaker-zx7.jpg", "/assets/home/tablet/image-speaker-zx7.jpg", "/assets/home/desktop/image-speaker-zx7.jpg"]}
                              type={"secondary"}/>
            <ProductHighlight name={"yx1 earphones"}
                              image={["/assets/home/mobile/image-earphones-yx1.jpg", "/assets/home/tablet/image-earphones-yx1.jpg", "/assets/home/desktop/image-earphones-yx1.jpg"]}
                              type={"tertiary"}/>

            <About/>
        </div>
    );
}
