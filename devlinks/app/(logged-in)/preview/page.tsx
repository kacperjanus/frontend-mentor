import React from 'react';
import Button from "@/app/_components/Button";
import PreviewItem from "@/app/_components/PreviewItem";
import Image from "next/image";

function Page() {
    return (
        <div>
            <div className="flex gap-4 px-6 py-4">
                <Button href="/links" variant="secondary">Back to Editor</Button>
                <Button variant="primary">Share link</Button>
            </div>
            <div className="w-[237px] flex flex-col mx-auto gap-[56px] mt-24">
                <div className="flex flex-col gap-[25px]">
                    <div className="flex justify-center">
                        <Image src="/assets/images/IMG_3644.jpeg" className="rounded-full border-4 border-dark-lavender w-[108px] h-[108px]" width={108} height={108} alt="User's avatar"/>
                    </div>
                    <div className="text-center">
                        <h1 className="heading-m">Ben Wright</h1>
                        <h2 className="body-m text-gray">ben@example.com</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <PreviewItem service="Github" link="github.com"/>
                    <PreviewItem service="YouTube" link="github.com"/>
                    <PreviewItem service="LinkedIn" link="github.com"/>
                </div>
            </div>
        </div>
    );
}

export default Page;