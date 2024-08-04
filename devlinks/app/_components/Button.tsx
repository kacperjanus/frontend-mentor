"use client"

import {useRouter} from "next/navigation";

export default function Button({
                                   children,
                                   variant,
                                   fn,
                                   href,
                                   className,
                                   active,
                                   disabled
                               }: { children: React.ReactNode, variant: "primary" | "secondary", fn?: () => void, href?: string, className?: string, active?: boolean, disabled?: boolean }) {
    const router = useRouter()

    const handleClick = () => {
        fn && fn()
        href && router.push(href)
    }

    if (variant === "primary") return <button onClick={handleClick} className={`text-white w-[227px] h-[46px] px-[27px] py-[8px] rounded-[8px] heading-s ${disabled ? "bg-disabled-lavender" : "bg-dark-lavender"} ${active ? "bg-lavender" : "bg-dark-lavender"} ${className}`}>{children}</button>
    if (variant === "secondary") return <button onClick={handleClick} className={`border-[1px] border-dark-lavender w-[227px] h-[46px] px-[20px] py-[8px] rounded-[8px] heading-s text-dark-lavender ${active ? "bg-light-lavender" : "bg-transparent"} ${disabled ? "text-disabled-lavender border-disabled-lavender" : ""} ${className}`}>{children}</button>
}