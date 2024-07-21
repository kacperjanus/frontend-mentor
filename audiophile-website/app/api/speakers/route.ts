export function GET(req: Request, res: Response) {
    const data: Product[] = [
        {
            "productName": "ZX9 SPEAKER",
            "new": true,
            "description": "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
            "price": 4500,
            "features": "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
            "inTheBox": [
                {
                    "quantity": 2,
                    "name": "speaker unit"
                },
                {
                    "quantity": 2,
                    "name": "speaker cloth panel"
                },
                {
                    "quantity": 1,
                    "name": "user manual"
                },
                {
                    "quantity": 1,
                    "name": "3.5mm 10m audio cable"
                },
                {
                    "quantity": 1,
                    "name": "10m optical cable"
                }
            ],
            "image": {
                "mobile": "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
                "tablet": "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
                "desktop": "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
            }
        },
        {
            "productName": "ZX7 SPEAKER",
            "new": false,
            "description": "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
            "price": 3500,
            "features": "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
            "inTheBox": [
                {
                    "quantity": 2,
                    "name": "speaker unit"
                },
                {
                    "quantity": 2,
                    "name": "speaker cloth panel"
                },
                {
                    "quantity": 1,
                    "name": "user manual"
                },
                {
                    "quantity": 1,
                    "name": "3.5mm 7.5m audio cable"
                },
                {
                    "quantity": 1,
                    "name": "7.5m optical cable"
                }
            ],
            "image": {
                "mobile": "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
                "tablet": "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
                "desktop": "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
            }
        }
    ]

    return Response.json(data)
}