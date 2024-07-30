import React from 'react';
import Image from  "next/image"

function Logo({mini}: {mini?: boolean}) {
    if(mini) return <Image width={32} height={32} src="/assets/images/logo-devlinks-small.svg" alt="logo"/>

    return <Image width={182.5} height={40} src="/assets/images/logo-devlinks-large.svg" alt="logo"/>
}

export default Logo;