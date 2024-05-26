export interface AddOn {
    title: string,
    description: string,
    price: {monthly: number, yearly: number}
}

export interface Plan {
    title: string,
    image: string,
    price: {monthly: number, yearly: number}
}