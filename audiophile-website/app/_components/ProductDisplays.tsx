import React from 'react';
import ProductDisplay from "@/app/_components/ProductDisplay";
import {Product} from "@/app/interfaces";

async function ProductDisplays({category}: { category: string }) {
    const link = typeof window !== 'undefined' ? `${window.location.origin}/api/products` : `http://localhost:3000/api/products`
    const response = await fetch(link)

    const data: Product[] = await response.json();

    return (
        <div>
            {data.filter(item => item.category === category).sort((a, b) => a.new ? -1 : 1).map((product, index) =>
                <ProductDisplay key={product.name}
                                index={index}
                                title={product.name}
                                description={product.description}
                                isNew={product.new}
                                image={product.categoryImage}
                                slug={product.slug}/>
            )}
        </div>
    );
}

export default ProductDisplays;