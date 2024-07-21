import React, {ReactNode} from 'react';
import Link from "next/link";

function Button({type, children, link}: { type: string, children?: ReactNode, link?: string }) {
    if (type === "primary") return <Link href={link || ""}>
        <button className="w-40 h-12 bg-earthy hover:bg-earthy-light"><span
            className="uppercase text-[13px] font-bold text-white">{children}</span></button>
    </Link>
    if (type === "secondary") return <Link href={link || ""}>
        <button
            className="w-40 h-12 bg-transparent border-[1px] border-solid border-black hover:bg-black group"><span
            className="uppercase text-[13px] group-hover:text-white font-bold text-black">{children}</span></button>
    </Link>
    if (type === "tertiary") return <Link href={link || ""}>
        <button className="w-[58px] h-[18px] group flex items-center gap-[13px]"><span
            className="uppercase text-[13px] font-bold text-[#808080] group-hover:text-earthy">{children}</span><span
            className="inline-block"><img alt="Right arrow icon"
                                          src="/assets/shared/desktop/icon-arrow-right.svg"/></span></button>
    </Link>
}

export default Button;