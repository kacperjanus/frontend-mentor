import React from 'react';
import Link from "next/link";

function DisplayButton({children}: {children: React.ReactNode}) {
    return (
        <Link href="/explore" className="bg-white w-[144px] tablet:w-[272px] h-[144px] tablet:h-[272px] rounded-full mobile-heading-s flex items-center justify-center text-very-dark-navy mx-auto transition-all duration-500 after:content-[''] after:w-[20px] after:h-[20px] hover:after:w-[288px] tablet:hover:after:w-[421px] hover:after:h-[288px] tablet:hover:after:h-[421px] hover:after:bg-[rgba(255,255,255,0.1)] after:absolute hover:after:rounded-full after:z-[-1] after:transition-all after:duration-400">
            <span>{children}</span>
        </Link>
    );
}

export default DisplayButton;