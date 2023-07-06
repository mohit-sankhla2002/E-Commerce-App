import React from 'react'
import star from '../assets/star.svg'
function RecommendedProduct({ img, title, originalPrice, discountedPrice, rating }) {
    return (
        <div className='recommended-product flex flex-col justify-between'>
            <img src={img} />
            <div className='p-4'>
                <p className='text-sm min-h-[50px]'>{title}</p>
                <p className='text-darkBlue'>${discountedPrice}</p>
                <div className='flex justify-between'>
                    <span className='text-sm line-through text-gray-500'>${originalPrice}</span>
                    <span className='text-sm  text-gray-500'>{rating} <img src={star} className='inline' /></span>
                </div>
            </div>

        </div>
    )
}

export default RecommendedProduct;