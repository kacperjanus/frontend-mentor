import React from 'react';
import DisplayButton from "@/app/_components/single-components/DisplayButton";

function HomeButton() {
    return (
        <div
            className="flex-grow flex items-center justify-center justify-self-center desktop:justify-self-end desktop:self-center">
            <DisplayButton to="/destination">EXPLORE</DisplayButton>
        </div>
    );
}

export default HomeButton;