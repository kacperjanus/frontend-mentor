interface BlogPreviewProps {
    imagePath: string
    entryType: string
    publishDate: string
    entryTitle: string
    previewText: string
    author: string
    avatarPath:string
}

function BlogPreview(props: BlogPreviewProps) {
    return <div className=" group bg-white m-10 min-[375px]:w-[384px] h-auto border-black border text-black rounded-2xl hover:shadow-[10px_10px_0px_0px_rgba(0,0,0)] shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-[327px]">
        <div className="m-[24px]">
            <img className="rounded-2xl" alt="Blog thumbnail preview" src={props.imagePath}/>
            <div className="my-[24px] grid gap-y-[12px]">
                <div className="font-figtree font-bold py-[4px] px-[12px] bg-[#f4d04e] w-min rounded-md">{props.entryType}</div>
                <div className="font-figtree">Published {props.publishDate}</div>
                <div className="font-extrabold font-figtree text-2xl group-hover:text-yellow-300">{props.entryTitle}</div>
                <div className="font-figtree text-slate-400">{props.previewText}</div>
            </div>
            <div className="flex items-center gap-x-[12px]">
                <img className="size-[32px]" alt="Author's avatar" src={props.avatarPath} />
                <p className="font-figtree font-extrabold">{props.author}</p>
            </div>
        </div>
    </div>
}

export default BlogPreview;