import React from 'react';
import PageContainer from "@/app/_components/PageContainer";
import Button from "@/app/_components/Button";
import ProductOverview from "@/app/[product]/_components/ProductOverview";
import Features from "@/app/[product]/_components/Features";
import InTheBox from "@/app/[product]/_components/InTheBox";
import Gallery from "@/app/[product]/_components/Gallery";
import YouMayAlsoLike from "@/app/[product]/_components/YouMayAlsoLike";
import GoBackButton from "@/app/[product]/_components/GoBackButton";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";

async function Page({params}: { params: { product: string } }) {
    const response = await fetch(`http://localhost:3000/api/products`)
    const data: Product[] = await response.json();
    const productData: Product | undefined = data.find(item => item.slug === params.product);

    if (!productData) return <div>Product not found</div>

    return (
        <div>
            <PageContainer>
                <GoBackButton/>

                <ProductOverview productData={productData}/>
                
                <div className="desktop:grid desktop:grid-cols-[3fr_2fr] desktop:gap-32 desktop:mb-32">
                    <Features productData={productData}/>

                    <InTheBox productData={productData}/>
                </div>

                <Gallery productData={productData}/>

                <YouMayAlsoLike productData={productData}/>

                <QuickMenu/>

                <About/>

            </PageContainer>
        </div>
    );
}

export default Page;