"use client"

import Image from 'next/image'
import React from 'react'
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

function Card({title, description, image }) {
    const {user, setUser} = useContext(UserContext)

    const addToCart = () => {
        const temp = user
        const time = new Date().toUTCString()
        const title_time = title + "-" + time
        if(temp.cart === "") {
            temp.cart = JSON.stringify({items: [title_time]})
        } else {
            const current = JSON.parse(temp.cart)
            current.items.push(title_time)
            temp.cart = JSON.stringify({items: current.items})
        }
        
        setUser(JSON.parse(JSON.stringify(temp)))
        
    };

    return (
    <div className="card w-[302px] bg-[#2F2F2F] shadow-xl border outline-none">
                    <figure className='h-[250px]'>
                        <Image src={image} alt="bag"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-[20px] text-white">{title}</h2>
                        <p className='text-[13px] text-white'>{description}</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={addToCart} className="btn text-[#2F2F2F] bg-[#FFCB74] hover:bg-[#ffb73b]">ADD TO CART</button>
                    </div>
                    </div>
                </div>
)
}

export default Card