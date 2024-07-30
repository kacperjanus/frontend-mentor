import Logo from "@/app/_components/Logo";
import TextField from "@/app/_components/TextField";
import Button from "@/app/_components/Button";
import Link from "next/link";

export default function Home() {
    return <div className="w-full p-8 flex flex-col gap-16">
        <Logo/>
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="heading-m text-[24px]">Login</h1>
                <p className="body-m text-gray">Add your details below to get back into the app</p>
            </div>
            <TextField icon="/assets/images/icon-email.svg" placeholder="e.g. alex@email.com" label="Email address"/>
            <TextField icon="/assets/images/icon-password.svg" placeholder="Enter your password" label="Password"/>
            <Button className="w-full" variant="primary">Login</Button>
            <div className="text-center">
                <p className="text-gray">Don't have an account?</p>
                <Link className="text-dark-lavender" href="/signup">Create account</Link>
            </div>
        </div>
    </div>
}
