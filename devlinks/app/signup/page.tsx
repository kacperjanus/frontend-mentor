import Logo from "@/app/_components/Logo";
import TextField from "@/app/_components/TextField";
import Button from "@/app/_components/Button";
import Link from "next/link";

export default function Home() {
    return <div className="w-full p-8 flex flex-col gap-16">
        <Logo/>
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="heading-m text-[24px]">Create account</h1>
                <p className="body-m text-gray">Let's get you started sharing your links!</p>
            </div>
            <TextField icon="/assets/images/icon-email.svg" placeholder="e.g. alex@email.com" label="Email address"/>
            <TextField icon="/assets/images/icon-password.svg" placeholder="At least 8 characters" label="Create password"/>
            <TextField icon="/assets/images/icon-password.svg" placeholder="At least 8 characters" label="Confirm password"/>
            <p className="body-s text-gray">Password must contain at least 8 characters</p>
            <Button className="w-full" variant="primary">Create new account</Button>
            <div className="text-center">
                <p className="text-gray">Already have an account?</p>
                <Link className="text-dark-lavender" href="/">Login</Link>
            </div>
        </div>
    </div>
}
