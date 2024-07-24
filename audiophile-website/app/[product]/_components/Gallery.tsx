import React from 'react';
import {Product} from "@/app/interfaces";

function Gallery({productData}: { productData: Product }) {
    return (
        <div
            className="flex flex-col gap-4 mb-24 desktop:mb-32 tablet:grid tablet:grid-cols-[17fr_24fr] tablet:grid-rows-2">
            <img className="block tablet:hidden rounded-lg" src={productData.gallery.first.mobile}
                 alt="First gallery photo"/>
            <img className="hidden tablet:block desktop:hidden rounded-lg" src={productData.gallery.first.tablet}
                 alt="First gallery photo"/>
            <img className="hidden desktop:block rounded-lg tablet:w-full tablet:h-full"
                 src={productData.gallery.first.desktop}
                 alt="First gallery photo"/>

            <img className="block tablet:hidden rounded-lg" src={productData.gallery.second.mobile}
                 alt="Second gallery photo"/>
            <img className="hidden tablet:block desktop:hidden rounded-lg tablet:order-2"
                 src={productData.gallery.second.tablet}
                 alt="Second gallery photo"/>
            <img className="hidden desktop:block rounded-lg tablet:order-2 tablet:w-full tablet:h-full"
                 src={productData.gallery.second.desktop}
                 alt="Second gallery photo"/>

            <img className="block tablet:hidden rounded-lg" src={productData.gallery.third.mobile}
                 alt="Third gallery photo"/>
            <img className="hidden tablet:block desktop:hidden rounded-lg tablet:row-span-2"
                 src={productData.gallery.third.tablet}
                 alt="Third gallery photo"/>
            <img className="hidden desktop:block rounded-lg tablet:row-span-2" src={productData.gallery.third.desktop}
                 alt="Third gallery photo"/>
        </div>
    );
}

export default Gallery;