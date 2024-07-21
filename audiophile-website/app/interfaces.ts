interface Product {
    productName: string,
    new: boolean,
    description: string,
    price: number,
    features: string,
    inTheBox: { quantity: number, name: string }[]
    image: { mobile: string, tablet: string, desktop: string }
}