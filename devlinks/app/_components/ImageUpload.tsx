"use client"

import React, {useState} from 'react';
import Image from "next/image";

function ImageUpload() {
    const [imagePath, setImagePath] = useState("")
    return (
        <div className={`w-full h-full heading-s bg-light-lavender rounded-xl flex flex-col text-center ${imagePath ? "text-white" : "text-dark-lavender"} items-center justify-center gap-2`}>
            <Image width={27.5} height={32.5} className={`left-3 hover:stroke-dark-lavender ${imagePath ? "stroke-white" : "stroke-dark-lavender"}`} src="/assets/images/icon-upload-image.svg" alt="Chain icon"/>
            <p>{imagePath ? "Change Image" : "+ Upload Image"}</p>
        </div>
    );
}

export default ImageUpload;