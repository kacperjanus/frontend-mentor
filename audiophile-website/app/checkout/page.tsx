import React from 'react';
import PageContainer from "@/app/_components/PageContainer";
import GoBackButton from "@/app/_components/GoBackButton";
import CheckoutForm from "@/app/checkout/_components/CheckoutForm";

function Page() {
    return (
        <div className="bg-grey pb-4">
            <PageContainer>
                <GoBackButton/>
                <CheckoutForm/>
            </PageContainer>
        </div>
    );
}

export default Page;