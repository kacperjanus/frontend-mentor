"use client"

import Image from "next/image";
import {Logos, Colors} from "@/app/_lib/logosLinks"
import Link from "next/link";

type Service = "Github" | "FrontendMentor" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook" | "Twitch" | "Devto" | "Codewars" | "Codepen" | "freeCodeCamp" | "GitLab" | "Hashnode" | "StackOverflow"

export default function PreviewItem({service, link}: {service: Service, link: string}){
    console.log(`bg-[${Colors[service]}]`)
    return <Link href={link}>
        <button style={{backgroundColor: Colors[service]}} className={`w-[237px] ${service === "FrontendMentor" ? "text-dark-gray border border-light-gray" : "text-white"} flex p-4 gap-2 items-center rounded-lg`}>
            <Image width={20} height={20} src={Logos[service]} alt={`${service} logo`}/>
            <span className="mr-auto">{service}</span>
            <Image width={20} height={20} src="/assets/images/icon-arrow-right.svg" alt="icon"/>
        </button>
    </Link>
}