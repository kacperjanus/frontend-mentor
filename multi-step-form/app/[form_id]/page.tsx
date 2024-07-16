import React from 'react';
import {getFormData} from "@/app/_lib/data-service";
import Form from "@/app/_components/Form";
import {revalidatePath} from "next/cache";

async function Page({params}: {params: {form_id: number}}) {
    revalidatePath(`/${params.form_id}`)
    const formData = await getFormData(params.form_id)

    return <Form formData={formData}/>
}

export default Page;