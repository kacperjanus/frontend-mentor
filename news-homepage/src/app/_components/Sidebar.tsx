import React from 'react';
import SideArticle from "@/app/_components/SideArticle";

export interface NewArticle {
    title: string;
    preview: string,
}

function Sidebar() {

    const sideArticles: NewArticle[] = [
        {
            title: "Hydrogen VS Electric Cars",
            preview: "Will hydrogen-fueled cars even catch up to EVs?"
        },{
            title: "The Downsides of AI Artistry",
            preview: "What are the possible adverse effects of on-demand AI image generation?"
        },{
            title: "Is VC Funding Drying Up",
            preview: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }

    ]

    return (
        <div className="bg-very-dark-blue p-6 h-full">
        <h1 className="text-soft-orange font-[700] text-4xl pb-4">New</h1>
        <div className="text-white flex flex-col divide-y divide-dark-grayish-blue justify-between">
            {sideArticles.map((article: NewArticle) => <div className="font-semibold text-xl" key={article.title}><SideArticle title={article.title} preview={article.preview}/></div>)}
        </div>
        </div>
    );
}

export default Sidebar;