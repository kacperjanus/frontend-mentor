import HomePageContainer from "@/app/_components/home/HomePageContainer";
import HomeDescription from "@/app/_components/home/HomeDescription";
import HomeButton from "@/app/_components/home/HomeButton";
import Header from "@/app/_components/Header";
import React from "react";
import PageWrapper from "@/app/_components/PageWrapper";

export default function Home() {
    return (
        <PageWrapper>
            <Header/>
            <HomePageContainer>
                <HomeDescription/>
                <HomeButton/>
            </HomePageContainer>
        </PageWrapper>
    )
}