"use client"

import React, {useState} from 'react';
import PageHeader from "@/app/_components/PageHeader";
import {Technology} from "@/app/interfaces";
import PageContainter from "@/app/_components/PageContainter";
import PageContent from "@/app/_components/PageContent";
import TechnologyImage from "@/app/technology/_components/TechnologyImage";
import TechnologyDescription from "@/app/technology/_components/TechnologyDescription";
import Header from "@/app/_components/Header";
import PageWrapper from "@/app/_components/PageWrapper";

function Page() {
    const [curTechnology, setCurTechnology] = useState<Technology>("launch-vehicle");

    return (
        <PageWrapper>
            <Header/>
            <PageContainter>
                <PageHeader>
                    03 SPACE LAUNCH 101
                </PageHeader>
                <PageContent>
                    <TechnologyImage curTechnology={curTechnology}/>
                    <TechnologyDescription curTechnology={curTechnology} setCurTechnology={setCurTechnology}/>
                </PageContent>
            </PageContainter>
        </PageWrapper>
    );
}

export default Page;