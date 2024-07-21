export function GET(req: Request, res: Response) {
    const data: Product[] = [
        {
            "productName": "YX1 WIRELESS EARPHONES",
            "new": true,
            "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            "price": 599,
            "features": "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
            "inTheBox": [
                {
                    "quantity": 2,
                    "name": "earphone unit"
                },
                {
                    "quantity": 6,
                    "name": "multi-size earplugs"
                },
                {
                    "quantity": 1,
                    "name": "user manual"
                },
                {
                    "quantity": 1,
                    "name": "USB-C charging cable"
                },
                {
                    "quantity": 1,
                    "name": "travel pouch"
                }
            ],
            "image": {
                "mobile": "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
                "tablet": "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
                "desktop": "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
            }
        },
    ]

    return Response.json(data)
}