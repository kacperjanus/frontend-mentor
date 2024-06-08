type PlanOption = "Pro" | "Arcade" | "Advanced"

export interface AddOn {
    title: string,
    description: string,
    price: {monthly: number, yearly: number}
}

export interface Plan {
    title: PlanOption,
    image: string,
    price: {monthly: number, yearly: number}
}