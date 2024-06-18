import React from 'react';
import {getFormData} from "@/app/_lib/data-service";

async function Page({params}: {params: {form_id: number}}) {
    const formData = await getFormData(params.form_id)

    return (
        <div>{typeof formData === "string" ? formData : formData.steps.length}</div>
    );
}

export default Page;