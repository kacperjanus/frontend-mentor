"use client"

import React from 'react';

interface LLink {
    url: string,
    tiny_url: string,
}

function LocalLink({link}: {link: LLink}) {
    return (
        <div className="bg-white flex w-[50rem] lg:w-[60rem] p-4 justify-between items-center gap-4 rounded-md">
            <div className="flex justify-between w-full">
                <p>{link.url}</p>
                <p onClick={() => navigator.clipboard.writeText(link.tiny_url)}
                   className="text-cyan">{link.tiny_url}</p>
            </div>
            <button onClick={() => navigator.clipboard.writeText(link.tiny_url)}
                    className="bg-cyan hover:bg-[#9AE2E2] text-white px-8 py-1.5 rounded-lg">Copy
            </button>
        </div>
    );
}

export default LocalLink;