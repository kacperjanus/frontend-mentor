import React from 'react';
import TabItem from "@/app/_components/single-components/TabItem";

type Destination = "moon" | "mars" | "europa" | "titan";

function TabItemGroup({onClick, active, values}: {onClick: React.Dispatch<React.SetStateAction<string>>, active: Destination, values: string[]}) {
    return (
        <div className="flex gap-8">
            {values.map((value) => (<TabItem key={value} onClick={onClick} value={value} active={active===value}>{value}</TabItem>))}
        </div>
    );
}

export default TabItemGroup;