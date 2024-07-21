import React from 'react';
import ProductDisplay from "@/app/_components/ProductDisplay";

async function ProductDisplays({category}: { category: string }) {
    const response = await fetch(`http://localhost:3000/api/products`)
    const data: Product[] = await response.json();

    return (
        <div>
            {data.filter(item => item.category === category).map((product, index) => <ProductDisplay key={product.name}
                                                                                                     index={index}
                                                                                                     title={product.name}
                                                                                                     description={product.description}
                                                                                                     isNew={product.new}
                                                                                                     image={product.categoryImage}/>
            )}
        </div>
    );
}

export default ProductDisplays;