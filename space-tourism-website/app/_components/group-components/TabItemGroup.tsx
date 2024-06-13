import React from 'react';
import TabItem from "@/app/_components/single-components/TabItem";

type Destination = "moon" | "mars" | "europa" | "titan";

function TabItemGroup({onClick}: {onClick: React.Dispatch<React.SetStateAction<Destination>>}) {
    return (
        <div className="flex gap-8">
            <TabItem onClick={onClick} value="moon">moon</TabItem>
            <TabItem onClick={onClick} value="mars">mars</TabItem>
            <TabItem onClick={onClick} value="europa">europa</TabItem>
            <TabItem onClick={onClick} value="titan">titan</TabItem>
        </div>
    );
}

export default TabItemGroup;