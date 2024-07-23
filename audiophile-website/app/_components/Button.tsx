"use client"

import React, {ReactNode} from 'react';
import {useRouter} from "next/navigation";

function Button({type, children, link, fn, className}: {
    type: string,
    children?: ReactNode,
    link?: string,
    fn?: () => void
    className?: string
}) {
    const router = useRouter();

    function handleClick() {
        fn && fn()
        link && router.push(link)
    }

    if (type === "primary") return <button onClick={handleClick}
                                           className={`w-40 h-12 bg-earthy hover:bg-earthy-light ${className}`}><span
        className="uppercase text-[13px] font-bold text-white">{children}</span></button>

    if (type === "secondary") return <button onClick={handleClick}
                                             className={`w-40 h-12 bg-transparent border-[1px] border-solid border-black hover:bg-black group ${className}`}><span
        className="uppercase text-[13px] group-hover:text-white font-bold text-black">{children}</span></button>

    if (type === "tertiary") return <button onClick={handleClick}
                                            className={`w-[58px] h-[18px] group flex items-center gap-[13px] ${className}`}><span
        className="uppercase text-[13px] font-bold text-[#808080] group-hover:text-earthy">{children}</span><span
        className="inline-block"><img alt="Right arrow icon"
                                      src="/assets/shared/desktop/icon-arrow-right.svg"/></span></button>
}

export default Button;