import HeroSection from "@/app/_components/HeroSection";
import React from "react";
import ProductHighlight from "@/app/_components/ProductHighlight";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";
import PageContainer from "@/app/_components/PageContainer";

export default function Home() {
    return (
        <>
            <HeroSection name="XX99 MARK II HEADPHONES" header="new product"
                         description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
                         image={["/assets/home/mobile/image-header.jpg", "/assets/home/tablet/image-header.jpg", "/assets/home/desktop/image-hero.jpg"]}/>
            <PageContainer>
                <QuickMenu/>

                <ProductHighlight name={"zx9 speaker"}
                                  description={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
                                  image={["/assets/home/mobile/image-speaker-zx9.png", "/assets/home/tablet/image-speaker-zx9.png", "/assets/home/desktop/image-speaker-zx9.png"]}
                                  type={"primary"} slug={"/zx9-speaker"}/>
                <ProductHighlight name={"zx7 speaker"}
                                  image={["/assets/home/mobile/image-speaker-zx7.jpg", "/assets/home/tablet/image-speaker-zx7.jpg", "/assets/home/desktop/image-speaker-zx7.jpg"]}
                                  type={"secondary"} slug={"/zx7-speaker"}/>
                <ProductHighlight name={"yx1 earphones"}
                                  image={["/assets/home/mobile/image-earphones-yx1.jpg", "/assets/home/tablet/image-earphones-yx1.jpg", "/assets/home/desktop/image-earphones-yx1.jpg"]}
                                  type={"tertiary"} slug={"/yx1-earphones"}/>

                <About/>
            </PageContainer>
        </>
    );
}
