"use client"

import React, {useState} from 'react';
import {ShortenUrl} from "@/app/_lib/tinyurl";

interface TinyUrlResponse {
    "domain": string,
    "alias": string,
    "deleted": boolean,
    "archived": boolean,
    "tags": string[],
    "analytics": { "enabled": boolean, "public": boolean }[],
    "tiny_url": string,
    "created_at": string,
    "expires_at": string | null,
    "url": string
}

function ShortenBox() {
    const [link, setLink] = useState("")
    const [error, setError] = useState(false)

    async function handleClick() {
        if(!link) {
            setError(true);
            return;
        }
        if(error) setError(false)
        const data: TinyUrlResponse = await ShortenUrl(link)
        if(data.tiny_url && data.url){
            if(localStorage.getItem("links")){
                const links = JSON.parse(localStorage.getItem("links")!);
                const newValue = links.constructor === Array ? JSON.stringify([{url: data.url, tiny_url: data.tiny_url}, ...links]) : JSON.stringify([{url: data.url, tiny_url: data.tiny_url}, links]);
                localStorage.setItem("links", newValue)
                window.dispatchEvent(new StorageEvent("storage", { key: "links", newValue}));
            }else{
                localStorage.setItem("links", JSON.stringify({url: data.url, tiny_url: data.tiny_url}))
            }
        }
    }

    return (
        <div className="absolute bottom-[-2rem] md:bottom-[-5rem] -right-3 -left-3 md:right-0 md:left-0">
                    <div className="absolute md:w-[45rem] lg:w-[60rem] md:left-[50%] md:translate-x-[-50%] right-1 left-1 flex md:flex-row flex-col gap-8 md:gap-6 bg-shorten-desktop bg-cover p-8 md:p-6 bg-dark-violet rounded-lg ">
                        <div className="w-full relative">
                            <input className={`px-4 w-full py-3 rounded-lg outline-none box-border ${error ? "border-red border-2": "border-transparent border-2"}`}
                                   placeholder="Shorten a link here..." value={link}
                                   onChange={(e) => setLink(e.target.value)}/>
                            {error && <span
                                className="text-red text-sm italic absolute left-0 -bottom-5">Please add a link</span>}
                        </div>
                        <button onClick={handleClick}
                                className="bg-cyan w-full text-white rounded-md px-4 py-2 md:w-40 hover:bg-[#9AE2E2]">Shorten it!
                        </button>
                    </div>
        </div>
    );
}

export default ShortenBox;