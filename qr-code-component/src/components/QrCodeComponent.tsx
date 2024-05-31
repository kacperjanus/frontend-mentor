interface QrCodeComponentProps {
    CodePath: string
    CodeTitle: string
    CodeDescription: string
}

function QrCodeComponent({ CodePath, CodeTitle, CodeDescription }: QrCodeComponentProps) {
    return <div className="rounded-2xl grid m-4 w-[20rem] p-[1rem] bg-white gap-y-[1.5rem] border drop-shadow-xl">
        <img className="rounded-2xl size-[288px]" src={CodePath} alt="QR Code" />
        <div className="grid gap-y-[1rem] pb-6">
            <div className="text-[22px] font-[700] text-center">{CodeTitle}</div>
            <div className="text-[14px] tracking-wider leading-5 font-[400] text-grayish-blue text-center">{CodeDescription}</div>
        </div>
    </div>
}

export default QrCodeComponent