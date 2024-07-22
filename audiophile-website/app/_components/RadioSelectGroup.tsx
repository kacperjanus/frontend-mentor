"use client"

import React, {useState} from 'react';
import RadioSelect from "@/app/_components/RadioSelect";

function RadioSelectGroup({labels}: { labels: string[] }) {
    const [checked, setChecked] = useState(0)

    return labels.map((label, i) => <RadioSelect setChecked={setChecked} index={i} label={label} active={checked === i}
                                                 key={i}/>)
}

export default RadioSelectGroup;