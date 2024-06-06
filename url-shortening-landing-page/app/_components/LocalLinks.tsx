"use client"

import React, {useEffect, useState} from 'react';
import LocalLink from "@/app/_components/LocalLink";

interface LLink {
    url: string,
    tiny_url: string,
}

function LocalLinks() {
    const [links , setLinks] = useState(localStorage.getItem("links") || []);

    const parsedLinks = links.length > 0 ? JSON.parse(links) : [];

    return ( <div className="pt-24 bg-[#F0F1F7] p-2  mx-auto w-full flex flex-col items-center gap-4">
        {parsedLinks ? parsedLinks.constructor === Array ? parsedLinks.map((link: LLink) => <LocalLink key={link.tiny_url} link={link} />) : <LocalLink link={parsedLinks}/> : "" }
    </div>)
}

export default LocalLinks;