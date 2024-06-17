"use client"

import React, {useState} from 'react';
import PageHeader from "@/app/_components/PageHeader";
import {Destination} from "@/app/interfaces";
import PageContainter from "@/app/_components/PageContainter";
import PageContent from "@/app/_components/PageContent";
import DestinationImage from "@/app/destination/_components/DestinationImage";
import DestinationDescription from "@/app/destination/_components/DestinationDescription";

function Page() {
    const [curDestination, setCurDestination] = useState<Destination>("moon");

    return (
        <PageContainter>
                <PageHeader>
                    01 PICK YOUR DESTINATION
                </PageHeader>
                <PageContent>
                    <DestinationImage curDestination={curDestination}/>
                    <DestinationDescription curDestination={curDestination} setCurDestination={setCurDestination}/>
                </PageContent>
            </PageContainter>
    );
}

export default Page;