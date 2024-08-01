"use client"

import Image from "next/image";
import {useState} from "react";

export default function Tabs({labels, icons}: { labels: string[], icons: string[] }) {
    const [active, setActive] = useState(0)

    return <div className="flex">
        {labels.map((label, i) =>
            <div key={label} onClick={() => setActive(i)} className={`flex gap-2 px-[27px] py-[11px] rounded-lg heading-s hover:text-dark-lavender cursor-pointer ${active === i ? "bg-light-lavender text-dark-lavender" : "text-gray"}`}>
                <Image width={20} height={20} className={`left-3 hover:stroke-dark-lavender ${active ? "stroke-dark-lavender" : ""}`} src={icons[i]} alt="Chain icon"/>
                <p className="hidden tablet:block">{label}</p>
            </div>)}
    </div>
}