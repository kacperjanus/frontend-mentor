import React from 'react';
import PageContainer from "@/app/_components/PageContainer";
import GoBackButton from "@/app/_components/GoBackButton";
import CheckoutForm from "@/app/checkout/_components/CheckoutForm";
import Summary from "@/app/checkout/_components/Summary";

function Page() {
    return (
        <div className="bg-grey pb-4 relative">
            <PageContainer>
                <GoBackButton/>
                <div
                    className="flex flex-col desktop:grid desktop:grid-cols-[2fr_1fr] desktop:gap-6 desktop:items-start">
                    <CheckoutForm/>
                    <Summary/>
                </div>
            </PageContainer>
        </div>
    );
}

export default Page;