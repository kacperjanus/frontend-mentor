import Form from "@/components/Form";
import Thanks from "@/components/Thanks";
import {useState} from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false)

    return (
        <div className="bg-charcoalgrey w-full h-screen sm:p-4 flex justify-center items-center">
            {success ? <Thanks email={email} setSuccess={setSuccess} setEmail={setEmail}/> : <Form setEmail={setEmail} email={email} setSuccess={setSuccess} /> }
        </div>
    );
}
