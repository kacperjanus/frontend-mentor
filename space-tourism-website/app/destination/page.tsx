"use client"

import React, {useState} from 'react';
import PageHeader from "@/app/_components/PageHeader";
import {Destination} from "@/app/interfaces";
import PageContainter from "@/app/_components/PageContainter";
import PageContent from "@/app/_components/PageContent";
import DestinationImage from "@/app/destination/_components/DestinationImage";
import DestinationDescription from "@/app/destination/_components/DestinationDescription";
import Header from "@/app/_components/Header";
import PageWrapper from "@/app/_components/PageWrapper";

function Page() {
    const [curDestination, setCurDestination] = useState<Destination>("moon");

    return (
        <PageWrapper>

            <Header/>
            <PageContainter>
                <PageHeader>
                    01 PICK YOUR DESTINATION
                </PageHeader>
                <PageContent>
                    <DestinationImage curDestination={curDestination}/>
                    <DestinationDescription curDestination={curDestination} setCurDestination={setCurDestination}/>
                </PageContent>
            </PageContainter>
        </PageWrapper>
    );
}

export default Page;