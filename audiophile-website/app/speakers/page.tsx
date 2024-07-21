import React from 'react';
import PageHeader from "@/app/_components/PageHeader";
import About from "@/app/_components/About";
import QuickMenu from "@/app/_components/QuickMenu";
import PageContainer from "@/app/_components/PageContainer";
import ProductDisplays from "@/app/_components/ProductDisplays";

function Page() {
    return (
        <div>
            <PageHeader>speakers</PageHeader>
            <PageContainer>
                <ProductDisplays route="speakers"/>

                <QuickMenu/>
                <About/>
            </PageContainer>
        </div>
    );
}

export default Page;