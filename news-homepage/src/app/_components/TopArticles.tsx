import React from 'react';
import TopArticle from "@/app/_components/TopArticle";

export interface SingleTopArticle {
    image: string,
    title: string,
    preview: string,
}

function TopArticles() {

    const topArticles: SingleTopArticle[] = [
        {
            image: '/image-retro-pcs.jpg',
            title: "Reviving Retro PCs",
            preview: "What happens when old PCs are given modern upgrades?"
        },
        {
            image: '/image-top-laptops.jpg',
            title: "Top 10 Laptops of 2022",
            preview: "Our best picks for various needs and budgets."
        },
        {
            image: '/image-gaming-growth.jpg',
            title: "The Growth of Gaming",
            preview: "How the pandemic has sparked fresh opportunities."
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-full mb-14 md:mb-0 justify-center">
            {topArticles.map((topArticle: SingleTopArticle, i) => <TopArticle key={topArticle.title} title={topArticle.title} preview={topArticle.preview} image={topArticle.image} number={i}/>)}
        </div>
    );
}

export default TopArticles;