import React, {useState} from 'react';
import Button from "@/components/Button";

interface FormProps {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

function Form({setEmail, email, setSuccess}: FormProps) {
    const [error, setError] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(emailRegex.test(email)) {
            setSuccess(true);
        }else{
            setError(true)
        }
    }

    return (
        <div className="bg-white w-full h-screen sm:h-fit sm:pt-6 sm:min-w-[666px] sm:px-6 pb-6 sm:m-4 sm:rounded-3xl max-w-[57rem]">
            <div className="flex flex-col sm:flex-row-reverse items-center justify-between">
                <img className="sm:w-[50%] hidden sm:block" src="/images/illustration-sign-up-desktop.svg" alt="Sign up illustration"/>
                <img className="sm:w-[50%] block sm:hidden w-full" src="/images/illustration-sign-up-mobile.svg" alt="Sign up illustration"/>
                <div className="px-8 py-8 sm:px-12 my-13">
                    <h1 className="text-darkslategray font-bold text-5xl sm:text-4xl lg:text-5xl pb-5">Stay updated!</h1>
                    <p className="pb-5 text-md">Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className="flex flex-col gap-2 mb-10">
                        <li className={"flex gap-4"}>
                            <img src="/images/icon-list.svg" alt="Check icon"/>
                            <span className="text-md">Product discovery and building what matters</span>
                        </li>
                        <li className={"flex gap-4"}>
                            <img src="/images/icon-list.svg" alt="Check icon"/>
                            <span className="text-md">Measuring to ensure updates are a success</span>
                        </li>
                        <li className={"flex gap-4"}>
                            <img src="/images/icon-list.svg" alt="Check icon"/>
                            <span className="text-md">And much more!</span>
                        </li>
                    </ul>

                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-col gap-2 mb-8">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold">Email address</label>
                                {error ? <p className="text-xs font-bold text-tomato">Valid email required</p> : ""}
                            </div>

                            <input value={email} onChange={handleInputChange} placeholder="email@company.com"
                                   className={`border-[#a9a9a9] outline-darkslategray border-solid border-2 rounded-lg px-8 py-4 text-darkslategrey ${error ? "bg-[#FFE8E6]" : ""}`}></input>
                        </div>
                        <Button>Subscribe to monthly newsletter</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;