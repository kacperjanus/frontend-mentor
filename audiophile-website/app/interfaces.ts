interface ImageSet {
    mobile: string,
    tablet: string,
    desktop: string
}

interface Product {
    id: number,
    slug: string,
    name: string,
    new: boolean,
    category: string,
    categoryImage: ImageSet,
    description: string,
    price: number,
    features: string,
    includes: { quantity: number, item: string }[]
    image: ImageSet
    gallery: {
        first: ImageSet,
        second: ImageSet,
        third: ImageSet
    }
    others: { slug: string, name: string, image: ImageSet }[]
}

interface CartItem {
    image: ImageSet
    name: string,
    quantity: number,
    pricePerUnit: number,
}