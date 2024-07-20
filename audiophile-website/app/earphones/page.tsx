import React from 'react';
import PageHeader from "@/app/_components/PageHeader";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";
import ProductDisplay from "@/app/_components/ProductDisplay";
import PageContainer from "@/app/_components/PageContainer";

function Page() {
    return (
        <div>
            <PageHeader>earphones</PageHeader>
            <PageContainer>
                <ProductDisplay title="YX1 WIRELESS EARPHONES"
                                description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                                isNew={true}
                                image={["/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg", "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg", "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"]}/>

                <QuickMenu/>
                <About/>
            </PageContainer>
        </div>
    );
}

export default Page;