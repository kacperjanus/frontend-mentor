import {supabase} from "@/app/_lib/supabase";
import {FormData} from "@/app/interfaces"

export async function getFormData(form_id: number): Promise<FormData | string>  {
    const {data, error} = await supabase.from('forms').select('form_data').eq('form_id', form_id)
    if(error){
        console.error(error)
        throw new Error(error.message)
    }

    return data.length > 0 ? data[0]['form_data'] : "Form not found";
}