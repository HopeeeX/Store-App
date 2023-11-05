'use client'
import React from 'react'
import {IoChevronBackSharp} from 'react-icons/io5'
import { useRouter } from 'next/navigation';


function NavBar1() {
    const router = useRouter()
    return (
        <div className="navbar bg-[#2F2F2F]">
            <div>
            <button className="btn btn-square btn-ghost" onClick={() => router.push("/dashboard")}>
                <IoChevronBackSharp color='#FFCB74' size={25}/>
            </button>
            </div>
        </div>
    )
}

export default NavBar1