import {getFormSchema} from "@/app/_lib/data-service";

export async function GET(request: Request, {params}: {params: {form_id: number}}) {
    const {form_id} = params;

    try {
        const schema = await getFormSchema(form_id)
        return Response.json(schema);
    } catch {
        return Response.json({message: "Schema not found"})
    }
}