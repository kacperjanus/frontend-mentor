import React from 'react';

function Form() {
    return (
        <div className="bg-charcoalgrey w-full h-full p-4">
            <div className="bg-white p-6 m-4 rounded-3xl max-w-[57rem]">
                <div className="flex items-center justify-between">
                    <div className="px-12 my-13">
                        <h1 className="text-darkslategray font-bold text-5xl pb-5">Stay updated!</h1>
                        <p className="pb-5 text-md">Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul className="flex flex-col gap-2 mb-10">
                            <li className={"flex gap-4"}>
                                <img src="/images/icon-list.svg"/>
                                <span className="text-md">Product discovery and building what matters</span>
                            </li>
                            <li className={"flex gap-4"}>
                                <img src="/images/icon-list.svg"/>
                                <span className="text-md">Measuring to ensure updates are a success</span>
                            </li>
                            <li className={"flex gap-4"}>
                                <img src="/images/icon-list.svg"/>
                                <span className="text-md">And much more!</span>
                            </li>

                        </ul>

                        <form className="flex flex-col">
                            <div className="flex flex-col gap-2 mb-8">

                                <label className="text-xs font-bold">Email address</label>
                                <input placeholder="email@company.com"
                                       className="border-[#a9a9a9] outline-darkslategray border-solid border-2 rounded-lg px-8 py-4 text-darkslategrey"></input>
                            </div>
                            <button className="bg-darkslategray hover:bg-tomato text-white px-2 py-4 rounded-lg font-semibold"
                                    type="submit">Subscribe to monthly newsletter
                            </button>
                        </form>
                    </div>
                    <img className="w-[50%]" src="/images/illustration-sign-up-desktop.svg" alt="Sign up illustration"/>
                </div>
            </div>
        </div>
    );
}

export default Form;