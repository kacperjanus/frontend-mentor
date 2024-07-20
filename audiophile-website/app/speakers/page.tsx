import React from 'react';
import PageHeader from "@/app/_components/PageHeader";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";
import ProductDisplay from "@/app/_components/ProductDisplay";
import PageContainer from "@/app/_components/PageContainer";

function Page() {
    return (
        <div>
            <PageHeader>speakers</PageHeader>
            <PageContainer>
                <ProductDisplay title="ZX9 SPEAKER"
                                description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                                isNew={true}
                                image={["/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg", "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg", "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"]}/>
                <ProductDisplay title="ZX7 SPEAKER"
                                description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
                                image={["/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg", "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg", "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"]}/>

                <QuickMenu/>
                <About/>
            </PageContainer>
        </div>
    );
}

export default Page;