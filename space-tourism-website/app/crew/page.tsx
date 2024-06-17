"use client"

import React, {useState} from 'react';
import PageHeader from "@/app/_components/PageHeader";
import {CrewMember} from "@/app/interfaces";
import PageContainter from "@/app/_components/PageContainter";
import PageContent from "@/app/_components/PageContent";
import MemberDescription from "@/app/crew/_components/MemberDescription";
import MemberImage from "@/app/crew/_components/MemberImage";

function Page() {
    const [curMember, setCurMember] = useState<CrewMember>("victor-glover")

    return (
        <PageContainter>
            <PageHeader>
                02 MEET YOUR CREW
            </PageHeader>
            <PageContent>
                <MemberDescription curMember={curMember} setCurMember={setCurMember}/>
                <MemberImage curMember={curMember}/>
            </PageContent>
        </PageContainter>
    );
}

export default Page;