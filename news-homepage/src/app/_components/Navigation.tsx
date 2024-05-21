import React from 'react';
import Link from "next/link";

function Navigation() {
    return (
        <div>
            <ul className="flex gap-10 text-dark-grayish-blue">
                <li className="hover:text-soft-orange"><Link href="/">Home</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>New</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Popular</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Trending</Link></li>
                <li className="hover:text-soft-orange"><Link href={'/'}>Categories</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;