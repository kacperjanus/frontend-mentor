import React from 'react';

function Gallery({productData}: { productData: Product }) {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <img className="rounded-lg" src={productData.gallery.first.mobile} alt="First gallery photo"/>
            <img className="rounded-lg" src={productData.gallery.second.mobile} alt="Second gallery photo"/>
            <img className="rounded-lg" src={productData.gallery.third.mobile} alt="Third gallery photo"/>
        </div>
    );
}

export default Gallery;