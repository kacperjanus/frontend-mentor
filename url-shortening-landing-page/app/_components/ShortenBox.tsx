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
        <div className="absolute bottom-[-3.5rem] md:bottom-[-5.5rem] -right-3 -left-3 md:right-0 md:left-0">
                    <div className="absolute md:w-[45rem] lg:w-[60rem] md:left-[50%] md:translate-x-[-50%] right-1 left-1 flex md:flex-row flex-col gap-4 md:gap-6 bg-shorten-desktop bg-cover p-4 bg-dark-violet rounded-lg ">
                        <input className="px-4 w-full py-3 rounded-lg outline-none"
                               placeholder="Shorten a link here..." value={link}
                               onChange={(e) => setLink(e.target.value)}/>
                        <button onClick={handleClick}
                                className="bg-cyan w-full text-white rounded-md px-4 py-2 md:w-40 hover:bg-[#9AE2E2]">Shorten it!
                        </button>
                    </div>
        </div>
    );
}

export default ShortenBox;