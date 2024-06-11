import React from 'react';
import Link from "next/link";

function DisplayButton({children}: {children: React.ReactNode}) {
    return (
        <Link href="/explore" className="bg-white w-[144px] h-[144px] rounded-full mobile-heading-s flex items-center justify-center text-very-dark-navy mx-auto transition-all duration-500 hover:after:content-[''] hover:after:w-[288px] hover:after:h-[288px] hover:after:bg-white hover:after:absolute hover:after:rounded-full hover:after:z-[-1] hover:after:opacity-10">
            <span>{children}</span>
        </Link>
    );
}

export default DisplayButton;