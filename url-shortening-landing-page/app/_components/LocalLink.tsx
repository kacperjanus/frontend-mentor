"use client"

import React from 'react';

interface LLink {
    url: string,
    tiny_url: string,
}

function LocalLink({link}: {link: LLink}) {
    return (
        <div className="bg-white flex flex-col md:flex-row md:w-[45rem] lg:w-[60rem] p-4 justify-between items-center gap-4 rounded-md w-full">
            <div className="flex flex-col md:flex-row justify-between w-full divide-y md:divide-none">
                <p className="pb-2 md:pb-0">{link.url}</p>
                <p onClick={() => navigator.clipboard.writeText(link.tiny_url)}
                   className="text-cyan pt-2 md:pt-0">{link.tiny_url}</p>
            </div>
            <button onClick={() => navigator.clipboard.writeText(link.tiny_url)}
                    className="bg-cyan hover:bg-[#9AE2E2] text-white px-8 py-1.5 w-full md:w-fit rounded-lg">Copy
            </button>
        </div>
    );
}

export default LocalLink;