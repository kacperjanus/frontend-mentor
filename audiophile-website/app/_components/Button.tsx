import React, {MouseEventHandler, ReactNode} from 'react';
import Link from "next/link";

function Button({type, children, link, fn}: {
    type: string,
    children?: ReactNode,
    link?: string,
    fn?: MouseEventHandler<HTMLDivElement>
}) {
    function ButtonPrimary() {
        return <button className="w-40 h-12 bg-earthy hover:bg-earthy-light"><span
            className="uppercase text-[13px] font-bold text-white">{children}</span></button>
    }

    function ButtonSecondary() {
        return <button
            className="w-40 h-12 bg-transparent border-[1px] border-solid border-black hover:bg-black group"><span
            className="uppercase text-[13px] group-hover:text-white font-bold text-black">{children}</span></button>
    }

    function ButtonTertiary() {
        return <button className="w-[58px] h-[18px] group flex items-center gap-[13px]"><span
            className="uppercase text-[13px] font-bold text-[#808080] group-hover:text-earthy">{children}</span><span
            className="inline-block"><img alt="Right arrow icon"
                                          src="/assets/shared/desktop/icon-arrow-right.svg"/></span></button>
    }

    if (type === "primary") {
        if (link) {
            return <Link href={link || ""}>
                <ButtonPrimary/>
            </Link>
        }

        if (fn) {
            return <div onClick={fn}>
                <ButtonPrimary/>
            </div>
        }

        return <ButtonPrimary/>;
    }

    if (type === "secondary") {
        if (link) {
            return <Link href={link || ""}>
                <ButtonSecondary/>
            </Link>
        }

        if (fn) {
            return <div onClick={fn}>
                <ButtonSecondary/>
            </div>
        }

        return <ButtonSecondary/>
    }

    if (type === "tertiary") {
        if (link) {
            return <Link href={link || ""}>
                <ButtonTertiary/>
            </Link>
        }

        if (fn) {
            return <div onClick={fn}>
                <ButtonSecondary/>
            </div>
        }

        return <ButtonTertiary/>
    }
}

export default Button;