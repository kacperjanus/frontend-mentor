import React from 'react';
import Link from "next/link";

function Navigation() {
    return (
        <nav className="hidden desktop:block desktop:mx-auto">
            <ul className="flex h-full gap-[34px]">
                <li>
                    <Link href="/" className="nav-text">home</Link>
                </li>
                <li>
                    <Link href="/headphones" className="nav-text">headphones</Link>
                </li>
                <li>
                    <Link href="/speakers" className="nav-text">speakers</Link>
                </li>
                <li>
                    <Link href="/earphones" className="nav-text">earphones</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;