import React from 'react';
import Logo from "@/app/_components/Logo";

function Footer() {
    return (
        <div className="bg-very-dark-violet">
            <div className="text-white flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start max-w-5xl mx-auto gap-20 pt-10 mb-10">
                <div className="mr-0 lg:mr-20">
                    <Logo className="invert"/>
                </div>
                <div className="flex sm:flex-row sm:gap-24 gap-12 flex-col">

                <div>
                    <h3 className="text-sm mb-4">Features</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Link Shortening</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Branded Links</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Analytics</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm mb-4">Resources</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Blog</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Developers</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Support</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm mb-4">Company</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">About</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Our Team</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Careers</li>
                        <li className="text-xs text-gray hover:text-cyan cursor-pointer">Contact</li>
                    </ul>
                </div>
                </div>
                <div className="flex gap-6">
                    <img className="w-6 h-6 cursor-pointer" src="/icon-facebook.svg"/>
                    <img className="w-6 h-6 cursor-pointer" src="/icon-twitter.svg"/>
                    <img className="w-6 h-6 cursor-pointer" src="/icon-pinterest.svg"/>
                    <img className="w-6 h-6 cursor-pointer" src="/icon-instagram.svg"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;