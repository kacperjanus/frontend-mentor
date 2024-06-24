import React from 'react';
import Button from "@/app/_components/Button";
import Link from "next/link";

interface MobileNavigationSectionProps {
    title: string
    image: string
    to: string
}

function MobileNavigationSection({title, image, to}: MobileNavigationSectionProps) {
    return (
        <Link href={to}>
            <div className="w-[327px] h-[165px] tablet:w-[223px] bg-grey rounded-lg flex flex-col justify-end items-center gap-3 p-4">
                <img className="h-[100%]" src={image} alt="Category thumbnail"/>
                <span className="text-[15px] uppercase tracking-[1.07px]">{title}</span>
                <Button type="tertiary">shop</Button>
            </div>
        </Link>
    );
}

export default MobileNavigationSection;