"use client"

import React, {useState} from 'react';
import RadioSelect from "@/app/_components/RadioSelect";

function RadioSelectGroup({labels, mainLabel}: { labels: string[], mainLabel: string }) {
    const [checked, setChecked] = useState(0)

    return <div className="flex flex-col tablet:grid tablet:grid-cols-2">
        <p className={`text-[12px] font-bold mb-2`}>{mainLabel}</p>
        <div>
            {labels.map((label, i) => <RadioSelect setChecked={setChecked} index={i} label={label}
                                                   active={checked === i}
                                                   key={i}/>)}
        </div>
    </div>
}

export default RadioSelectGroup;