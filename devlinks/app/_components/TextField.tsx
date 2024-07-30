import Image from "next/image";

export default function TextField({placeholder, error, errorMessage}: {placeholder?: string, error?: boolean, errorMessage?: string}) {
    return <div className="relative mx-8 my-4">
        <Image width={16} height={16} className="absolute top-1/2 -translate-y-1/2 left-3" src="/assets/images/icon-link.svg" alt="Chain icon"/>
        <span className="absolute top-1/2 bg-white -translate-y-1/2 right-4 text-tomato body-s">{errorMessage}</span>
        <input placeholder={placeholder} className={`pr-4 pl-8 py-3 rounded-lg border border-light-gray placeholder:text-light-gray text-gray w-full focus:outline-none ${error ? "border-tomato text-tomato" : "focus:shadow-[0_0_25px_0_rgba(99,60,255,0.3)] focus:border-dark-lavender"}`}></input>
    </div>
}