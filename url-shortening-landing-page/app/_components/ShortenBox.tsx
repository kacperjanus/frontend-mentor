"use client"

import React, {useState} from 'react';

function ShortenBox() {
    const [link, setLink] = useState("")

    return (
        <div className="absolute bottom-[-60%] left-[50%] translate-x-[-50%]">
                <div className="containter bg-dark-violet w-[50rem] lg:w-[60rem] mx-auto rounded-md relative md:max-w-5xl">
                    <img className="rounded-lg" src="/bg-shorten-desktop.svg"/>
                    <div className="absolute top-[35%] left-[50%] translate-x-[-50%] flex gap-6">
                        <input className="px-4 w-[30rem] lg:w-[40rem] py-3 rounded-lg outline-none" placeholder="Shorten a link here..." value={link} onChange={(e)=>setLink(e.target.value)}/>
                        <button className="bg-cyan text-white rounded-md px-4 py-2 w-40 hover:bg-[#9AE2E2]">Shorten it!</button>
                    </div>
                </div>
        </div>
    );
}

export default ShortenBox;