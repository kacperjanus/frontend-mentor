"use client"

import React, {useState} from 'react';
import {ShortenUrl} from "@/app/_lib/tinyurl";

interface TinyUrlResponse {
    "domain": string,
    "alias": string,
    "deleted": boolean,
    "archived": boolean,
    "tags": string[],
    analytics: { "enabled": boolean, "public": boolean }[],
    "tiny_url": string,
    "created_at": string,
    "expires_at": string | null,
    "url": string
}

function ShortenBox() {
    const [link, setLink] = useState("")

    async function handleClick() {
        if(!link) return;
        const data: TinyUrlResponse = await ShortenUrl(link)
        if(data.tiny_url && data.url){
            if(localStorage.getItem("links")){
                const links = JSON.parse(localStorage.getItem("links")!);
                if(links.constructor === Array){
                    const newValue = JSON.stringify([{url: data.url, tiny_url: data.tiny_url}, ...links]);
                    localStorage.setItem("links", newValue)
                    window.dispatchEvent(new StorageEvent("storage", { key: "links", newValue }));
                }else{
                    const newValue = JSON.stringify([{url: data.url, tiny_url: data.tiny_url}, links])
                    localStorage.setItem("links", newValue)
                    window.dispatchEvent(new StorageEvent("storage", { key: "links", newValue}));
                }
            }else{
                localStorage.setItem("links", JSON.stringify({url: data.url, tiny_url: data.tiny_url}))
            }
        }
    }

    return (
        <div className="absolute bottom-[-60%] left-[50%] translate-x-[-50%]">
                <div className="containter bg-dark-violet w-[50rem] lg:w-[60rem] mx-auto rounded-md relative md:max-w-5xl">
                    <img className="rounded-lg" src="/bg-shorten-desktop.svg"/>
                    <div className="absolute top-[35%] left-[50%] translate-x-[-50%] flex gap-6">
                        <input className="px-4 w-[30rem] lg:w-[40rem] py-3 rounded-lg outline-none" placeholder="Shorten a link here..." value={link} onChange={(e)=>setLink(e.target.value)}/>
                        <button onClick={handleClick} className="bg-cyan text-white rounded-md px-4 py-2 w-40 hover:bg-[#9AE2E2]">Shorten it!</button>
                    </div>
                </div>
        </div>
    );
}

export default ShortenBox;