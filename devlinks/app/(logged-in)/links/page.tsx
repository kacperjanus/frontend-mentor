import React from 'react';
import Header from "@/app/(logged-in)/_components/Header";
import Button from "@/app/_components/Button";
import Image from "next/image"

function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="bg-off-white flex flex-col flex-grow p-4">
                <div className="flex flex-col bg-white rounded-xl flex-grow overflow-hidden">
                    <div className="flex-grow p-6 flex flex-col gap-10">
                        <div>
                            <h1 className="heading-m text-[24px]">Customise your links</h1>
                            <h2 className="body-m text-gray">Add/edit/remove links below and then share all your profiles with the world!</h2>
                        </div>
                        <div className="flex flex-col gap-6 flex-grow">
                            <div>
                                <Button className="w-full" variant="secondary">+ Add your link</Button>
                            </div>
                            <div className="flex flex-grow">
                                <div className="bg-off-white flex-grow flex flex-col justify-center items-center gap-6 p-5 rounded-xl">
                                    <Image width={125} height={80} src="/assets/images/illustration-empty.svg" alt="Eye icon"/>
                                    <h2 className="heading-m text-[24px]">Let&apos;s get you started</h2>
                                    <p className="body-m text-gray text-center">Use the “Add new link” button to get started. Once you have more than
                                        one
                                        link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 border-t border-light-gray">
                        <Button className="w-full" variant='primary'>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;