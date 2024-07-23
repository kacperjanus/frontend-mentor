import React from 'react';
import PageContainer from "@/app/_components/PageContainer";
import Button from "@/app/_components/Button";
import Checkout from "@/app/checkout/_components/Checkout";

function Page() {
    return (
        <div className="bg-grey pb-4 relative">
            <PageContainer>
                <Button type="back"/>
                <Checkout/>
            </PageContainer>
        </div>
    );
}

export default Page;