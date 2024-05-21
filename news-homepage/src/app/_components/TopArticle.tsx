import React from 'react';
import SingleTopArticle from "@/app/_components/TopArticles";

function TopArticle({title, preview, image, number, key}: {title: string, preview: string, image: string, number: number, key:string}) {
    return (
        <div className="flex gap-5 w-[72rem] items-center">
            <img className="w-[100px] h-[120px]" src={image} alt={title}/>
            <div className="flex flex-col justify-between">
                <h2 className="text-3xl text-grayish-blue font-[700]">{"0"+Number(number+1)}</h2>
                <h3 className="text-very-dark-blue font-[700] text-lg">{title}</h3>
                <p className="text-dark-grayish-blue text-sm leading-7">{preview}</p>
            </div>
        </div>
    );
}

export default TopArticle;