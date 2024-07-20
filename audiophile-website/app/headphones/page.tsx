import React from 'react';
import PageHeader from "@/app/_components/PageHeader";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";
import ProductDisplay from "@/app/_components/ProductDisplay";
import PageContainer from "@/app/_components/PageContainer";

function Page() {
    return (
        <div>
            <PageHeader>headphones</PageHeader>
            <PageContainer>
                <ProductDisplay title="XX99 MARK II HEADPHONES"
                                description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                                isNew={true}
                                image={["/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg", "/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg", "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"]}/>
                <ProductDisplay title="XX99 MARK I HEADPHONES"
                                description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                                image={["/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg", "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg", "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"]}/>
                <ProductDisplay title="XX59 HEADPHONES"
                                description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
                                image={["/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg", "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg", "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"]}/>

                <QuickMenu/>
                <About/>
            </PageContainer>
        </div>
    );
}

export default Page;