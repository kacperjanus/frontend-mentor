export interface ImageSet {
    mobile: string,
    tablet: string,
    desktop: string
}

export interface Product {
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

export interface CartItem {
    image: ImageSet
    name: string,
    quantity: number,
    pricePerUnit: number,
}

export type Inputs = {
    name: string,
    email: string,
    phoneNumber: string
    address: string
    zipCode: string
    city: string
    country: string
    paymentMethod: boolean
    eMoneyNumber: number
    eMoneyPIN: number
}