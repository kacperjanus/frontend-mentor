import React from 'react';
import ProductDisplay from "@/app/_components/ProductDisplay";

async function ProductDisplays({route}: { route: string }) {
    const response = await fetch(`http://localhost:3000/api/${route}`)
    const data: Product[] = await response.json();

    return (
        <div>
            {data.map((product, index) => <ProductDisplay key={product.productName} index={index}
                                                          title={product.productName}
                                                          description={product.description} isNew={product.new}
                                                          image={product.image}/>
            )}
        </div>
    );
}

export default ProductDisplays;