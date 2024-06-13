import React from 'react';
import TabItem from "@/app/_components/single-components/TabItem";

type Destination = "moon" | "mars" | "europa" | "titan";

function TabItemGroup({onClick, active}: {onClick: React.Dispatch<React.SetStateAction<Destination>>, active: Destination}) {
    return (
        <div className="flex gap-8">
            <TabItem onClick={onClick} active={active==="moon"} value="moon">moon</TabItem>
            <TabItem onClick={onClick} active={active==="mars"} value="mars">mars</TabItem>
            <TabItem onClick={onClick} active={active==="europa"} value="europa">europa</TabItem>
            <TabItem onClick={onClick} active={active==="titan"} value="titan">titan</TabItem>
        </div>
    );
}

export default TabItemGroup;