"use client"

import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import { BsPersonFill } from "react-icons/bs"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import UserContext from '../contexts/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'


function Login() {
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()
  
  

  const onLogin = async (e) => {
    e.preventDefault();
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
    }).then(async (res) => setUser(await res.json())).then(() => {
        router.push("/dashboard")
    })
    
  }

  return (
    <div className='login-bg h-screen flex justify-center items-center'>
      <form onSubmit={onLogin}>
      <div className='w-[280px] h-[432px] bg-white rounded-lg flex items-center content-center flex-col'>
        <div className='mt-[40px]'>
          <Image className=' object-contain' src={Logo} alt="Logo"/>
        </div>
        <div className='mt-[10px] flex justify-center'>
          <h1 className='text-[24px] text-[#2F2F2F] font-semibold'>LOGIN</h1>
        </div>
        <div className='flex justify-center'>
          <h2 className='text-[11px] text-[#2f2f2fb7]'>Sign in to continue</h2>
        </div>
        <div className='mt-[25px] flex justify-center flex-col'>
          <label for="username" className='font-medium text-[#2F2F2F] text-[13px] mb-[3px]'>Username</label>
          <div className='join border-[#2f2f2f94] border rounded-none'>
          <input type='text' id='username' name='username' placeholder='Enter your username' className='w-[200px] h-[30px] p-2 bg-white text-[12px] focus:outline-none'/>
          <div className='p-2'>
          <BsPersonFill color='#FFCB74' size={15}/>
          </div>
          </div>
        </div>
        <div className='mt-[10px] flex justify-center flex-col'>
          <label for="password" className='font-medium text-[#2F2F2F] text-[13px] mb-[3px]'>Password</label>
          <div className='join border-[#2f2f2f94] border rounded-none'>
          <input type='text' id='password' name='password' placeholder='Enter your password' className='w-[200px] h-[30px] p-2 bg-white text-[12px] focus:outline-none'/>
          <div className='p-2'>
          {true ? <AiFillEyeInvisible color='#FFCB74' size={15}/> : <AiFillEye color='#FFCB74' size={15}/>}
          </div>
          </div>
        </div>
        <div className='mt-[20px]'>
          <button type='submit' className='w-[232px] h-[30px] bg-[#FFCB74] text-white font-bold text-[13px]'>LOGIN</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login