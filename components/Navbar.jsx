'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Logo from '../assets/images/logo2.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Navbar({cartCount}) {
    const router = useRouter()
    const [backgroundColor, setBackgroundColor] = useState('#F6F6F6');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setBackgroundColor('#111111');
            } else {
            setBackgroundColor('#F6F6F6');
        }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <>
        <div className="navbar" style={{backgroundColor, position: 'fixed', top: 0, zIndex: 1000}}>
            <div className="flex-1 ml-5">
                <Image src={Logo} alt='logo' className='w-[120px] m-3'/>
            </div>
        <div className="flex-none mr-5">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-cir">
                <div className="indicator">
                    <AiOutlineShoppingCart color='#FFCB74' size={30}/>
                    <span className="badge badge-sm bg-[#2F2F2F] indicator-item text-white">{cartCount}</span>
                </div>
                </label>
                <div tabIndex={0} className="mt-2 z-[1] card card-compact dropdown-content w-52 bg-[#2F2F2F] shadow">
                    <div className="card-body">
                        <span className="font-medium text-lg text-white">{cartCount}</span>
                        <div className="card-actions">
                            <button onClick={() => router.push("/dashboard/cart")} className="btn bg-[#FFCB74] text-[#2F2F2F] btn-block ">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-[30px] rounded-full">
                    <BsPersonCircle color='#FFCB74' size={30}/>
                </div>
                </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-[#2F2F2F] text-white rounded-box w-52">
                        <li className='cursor-not-allowed disabled'>
                            <p className="justify-between text-white">Rachelle's Profile</p>
                        </li>
                        <li><Link href={"/"}>Logout</Link></li>
                    </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar