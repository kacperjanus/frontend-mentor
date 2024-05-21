import React from 'react';
import Link from "next/link";

function Navigation() {
    return (
        <div>
            <ul className="flex gap-10 text-dark-grayish-blue">
                <li><Link href="/">Home</Link></li>
                <li><Link href={'/'}>New</Link></li>
                <li><Link href={'/'}>Popular</Link></li>
                <li><Link href={'/'}>Trending</Link></li>
                <li><Link href={'/'}>Categories</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;