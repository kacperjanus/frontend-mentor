import React from 'react';
import Link from "next/link";

function Logo() {
    return (
        <Link href="/" className="mx-auto tablet:mr-auto tablet:ml-10 desktop:mx-0">
            <img src="/assets/shared/desktop/logo.svg" alt="Logo"/>
        </Link>
    );
}

export default Logo;