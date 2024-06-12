import React from 'react';
import Link from "next/link";

function Logo() {
    return (
        <div className="h-10 w-10">
            <Link href="/">
            <img src="/shared/logo.svg" alt="Logo"/>
            </Link>
        </div>
    );
}

export default Logo;