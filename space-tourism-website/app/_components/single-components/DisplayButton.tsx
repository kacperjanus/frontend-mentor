import React from 'react';
import Link from "next/link";

function DisplayButton({children}: {children: React.ReactNode}) {
    return (
        <Link href="/destination">
            <div className="bg-white w-[144px] tablet:w-[272px] h-[144px] tablet:h-[272px] rounded-full mobile-heading-s tablet:heading-s flex items-center justify-center text-very-dark-navy mx-auto transition-all duration-500 after:content-[''] after:w-[20px] after:h-[20px] hover:after:w-[288px] tablet:hover:after:w-[421px] hover:after:h-[288px] tablet:hover:after:h-[421px] hover:after:bg-[rgba(255,255,255,0.1)] hover:after:rounded-full after:transition-all after:duration-600 after:absolute">
                <span>{children}</span>
            </div>
        </Link>
    );
}

export default DisplayButton;