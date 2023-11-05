'use client'
import React from 'react'
import Modal from '../components/Modal'

function BottomNav({checkOutFunc}) {
    return (
        <div className="flex flex-row h-16 w-full fixed bottom-0">
            <div className='w-[65%] bg-[#2F2F2F]'></div>
            <button className="bg-[#FFCB74] text-[#2F2F2F] font-semibold hover:bg-[#ffb73b] w-[35%]" onClick={checkOutFunc}>
                <span className="btm-nav-label">PLACE ORDER</span>
            </button>
            <Modal/>
        </div>
    )
}

export default BottomNav

