import React from 'react';
import Header from "@/app/(logged-in)/_components/Header";
import Button from "@/app/_components/Button";
import Image from "next/image"

function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-off-white">
            <Header/>
            <div className="bg-off-white flex flex-grow p-4 tablet:p-6 tablet:pt-0 gap-6">
                <div className="hidden desktop:flex flex-col bg-white rounded-xl flex-grow overflow-hidden items-center justify-center p-6 ">
                    <Image width={307} height={631} src="/assets/images/illustration-phone-mockup.svg" alt="Phone mockup"/>
                </div>
                <div className="flex flex-col bg-white rounded-xl flex-grow overflow-hidden">
                    <div className="flex-grow p-6 tablet:p-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="heading-m text-[24px] tablet:text-[32px]">Customise your links</h1>
                            <h2 className="body-m text-gray">Add/edit/remove links below and then share all your profiles with the world!</h2>
                        </div>
                        <div className="flex flex-col gap-6 flex-grow">
                            <div>
                                <Button className="w-full" variant="secondary">+ Add new link</Button>
                            </div>
                            <div className="flex flex-grow">
                                <div className="bg-off-white flex-grow flex flex-col justify-center items-center gap-6 tablet:gap-10 p-5 rounded-xl">
                                    <Image className="block tablet:hidden" width={125} height={80} src="/assets/images/illustration-empty.svg" alt="Eye icon"/>
                                    <Image className="hidden tablet:block" width={250} height={160} src="/assets/images/illustration-empty.svg" alt="Eye icon"/>
                                    <div className="flex flex-col gap-6 items-center tablet:w-[448px]">
                                        <h2 className="heading-m text-[24px] tablet:text-[32px]">Let&apos;s get you started</h2>
                                        <p className="body-m text-gray text-center">Use the “Add new link” button to get started. Once you have more
                                            than
                                            one
                                            link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 tablet:py-6 tablet:px-10 border-t border-light-gray flex">
                        <Button className="w-full tablet:w-min ml-auto" variant='primary'>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;