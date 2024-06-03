"use client"

import React, {useState} from 'react';

function ShortenBox() {
    const [link, setLink] = useState("")

    return (
                <div className="containter bg-dark-violet w-full mx-auto rounded-md relative max-w-5xl">
                    <img className="rounded-lg" src="/bg-shorten-desktop.svg"/>
                    <div className="absolute top-12 right-8 left-8 bottom-12 flex gap-6 ">
                        <input className="px-4 w-full py-2 rounded-lg outline-none" placeholder="Shorten a link here..." value={link} onChange={(e)=>setLink(e.target.value)}/>
                        <button className="bg-cyan text-white rounded-md px-4 py-2 w-52 hover:bg-[#9AE2E2]">Shorten it!</button>
                    </div>
                </div>
    );
}

export default ShortenBox;