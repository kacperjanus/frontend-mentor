import {supabase} from "@/app/_lib/supabase";
import {FormData} from "@/app/interfaces"
import {PostgrestError} from "@supabase/supabase-js";

export async function getFormData(form_id: number): Promise<FormData | string>  {
    const {data, error} = await supabase.from('forms').select('form_data').eq('form_id', form_id)
    if(error){
        console.error(error)
        throw new Error(error.message)
    }

    return data.length > 0 ? data[0]['form_data'] : "Form not found";
}

export async function getConfirmationMessage(form_id: number): Promise<string>  {
    if(form_id === -1) return "Thanks for confirming your subscription!\n" +
        "We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"

    const {data, error}: {data: {confirmation: string}[] | null, error: PostgrestError | null} = await supabase.from('forms').select('confirmation').eq('form_id', form_id)
    if(error){
        console.error(error)
        throw new Error(error.message)
    }

    if(data) {
        if (data[0]) {
            if (data[0].confirmation) {
                return data[0].confirmation
            } else {
                return "Your answers have been submitted"
            }
        }
    }

    return ""
}

export async function getFormSchema(form_id: number): Promise<string>  {
    const {data, error} = await supabase.from('forms').select('form_schema').eq('form_id', form_id)
    if(error){
        console.error(error)
        throw new Error(error.message)
    }

    return data.length > 0 ? data[0]['form_schema'] : "Form not found";
}