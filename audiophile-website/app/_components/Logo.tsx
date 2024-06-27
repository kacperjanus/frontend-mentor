import React from 'react';
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <img src="/assets/shared/desktop/logo.svg" alt="Logo"/>
        </Link>
    );
}

export default Logo;