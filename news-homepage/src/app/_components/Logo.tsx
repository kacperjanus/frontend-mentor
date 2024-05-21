import React from 'react';
import Image from "next/image";

function Logo() {
    return (
        <div>
         <Image width={70} height={70} src="/logo.svg" alt="News station logo"/>
        </div>
    );
}

export default Logo;