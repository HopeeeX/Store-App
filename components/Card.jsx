"use client"

import Image from 'next/image'
import React from 'react'

function Card({title, description, image, addToCart}) {
    const handleAddToCart = () => {
        addToCart({title})
    }
    return (
    <div className="card w-[302px] bg-[#2F2F2F] shadow-xl border outline-none">
                    <figure className='h-[250px]'>
                        <Image src={image} alt="bag"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-[20px] text-white">{title}</h2>
                        <p className='text-[13px] text-white'>{description}</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={handleAddToCart} className="btn text-[#2F2F2F] bg-[#FFCB74] hover:bg-[#ffb73b]">ADD TO CART</button>
                    </div>
                    </div>
                </div>
)
}

export default Card