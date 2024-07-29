"use client"

import {useRouter} from "next/navigation";

export default function Button({children, variant, fn, href, className, active, disabled}: {children: React.ReactNode, variant: string, fn?: ()=>void, href?: string, className?: string, active?: boolean, disabled?: boolean}) {
    const router = useRouter()

    const handleClick= ()=>{
        fn && fn()
        href && router.push(href)
    }

    if(variant === "primary") return <button onClick={handleClick} className={`bg-dark-lavender text-white w-[227px] h-[46px] px-[27px] py-[8px] rounded-[8px] heading-s ${disabled ? "bg-disabled-lavender" : ""} ${active ? "bg-lavender": "bg-dark-lavender"} ${className}`}>{children}</button>
    if(variant === "secondary") return <button onClick={handleClick} className={`bg-transparent border-[1px] border-dark-lavender w-[227px] h-[46px] px-[27px] py-[8px] rounded-[8px] heading-s text-dark-lavender ${active ? "bg-light-lavender": ""} ${disabled ? "text-disabled-lavender border-disabled-lavender" : ""} ${className}`}>{children}</button>
}