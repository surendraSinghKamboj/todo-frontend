import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai"


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='sticky w-full h-14 bg-[#080c33a8] z-10 flex items-center p-3 top-0'>
      <h1 className='text-white text-lg sm:text-xl flex-grow cursor-pointer' onClick={() => {
        window.scrollTo(0, 0)
      }}>Surendra Singh kamboj</h1>
      <ul className='hidden sm:flex items-center h-14 gap-3 text-white'>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/About"}><li>About</li></Link>
        <Link href={"/Skills"}><li>Skills</li></Link>
        <Link href={"/Projects"}><li>Projects</li></Link>
        <Link href={"/Contact"}><li>Contact</li></Link>
      </ul>
      <div className='sm:hidden'>
        {
          open ?
            <AiOutlineClose className='text-white cursor-pointer' onClick={() => setOpen(!open)} />
            :
            <AiOutlineMenuUnfold className='text-white cursor-pointer' onClick={() => setOpen(!open)} />
        }
      </div>
      <div className={`sm:hidden ${open ? "top-14 left-0" : "top-[-100%] left-[110%]"} nav_animation fixed left-0 w-full bg-[#080c33a8] h-96`}>
        <ul className='items-center flex flex-col h-14 gap-3 text-white'>
          <Link href={"/"}><li className='w-[200px] text-center hover:bg-emerald-600'>Home</li></Link>
          <Link href={"/About"}><li className='w-[200px] text-center hover:bg-emerald-600'>About</li></Link>
          <Link href={"/Skills"}><li className='w-[200px] text-center hover:bg-emerald-600'>Skills</li></Link>
          <Link href={"/Projects"}><li className='w-[200px] text-center hover:bg-emerald-600'>Projects</li></Link>
          <Link href={"/Contact"}><li className='w-[200px] text-center hover:bg-emerald-600'>Contact</li></Link>
        </ul>
      </div>
    </header>
  )
}

export default Navbar