interface QrCodeComponentProps {
    CodePath: string
    CodeTitle: string
    CodeDescription: string
}

function QrCodeComponent({ CodePath, CodeTitle, CodeDescription }: QrCodeComponentProps) {
    return <div className="rounded-2xl grid m-4 w-[320px] p-[16px] bg-white gap-y-[24px] border drop-shadow-xl">
        <img className="rounded-2xl size-[288px]" src={CodePath} alt="QR Code" />
        <div className="grid gap-y-[16px]">
            <div className="text-[22px] font-bold text-center">{CodeTitle}</div>
            <div className="text-[15px] text-slate-400 text-center">{CodeDescription}</div>
        </div>
    </div>
}

export default QrCodeComponent