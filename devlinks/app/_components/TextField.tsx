import Image from "next/image";

export default function TextField({placeholder, error, errorMessage, label, icon}: {
    placeholder?: string,
    error?: boolean,
    errorMessage?: string,
    label?: string,
    icon?: string
}) {
    return <div className="flex flex-col gap-1">
        {label && <span className="body-s">{label}</span>}
        <div className="relative">
            {icon && <Image width={16} height={16} className="absolute top-1/2 -translate-y-1/2 left-4" src={icon} alt="Chain icon"/>}
            <span className="absolute top-1/2 bg-white -translate-y-1/2 right-4 text-tomato body-s">{errorMessage}</span>
            <input placeholder={placeholder} className={`px-[44px] py-3 rounded-lg border border-light-gray placeholder:text-light-gray text-gray w-full focus:outline-none ${error ? "border-tomato text-tomato" : "focus:shadow-[0_0_25px_0_rgba(99,60,255,0.3)] focus:border-dark-lavender"}`}></input>
        </div>
    </div>
}