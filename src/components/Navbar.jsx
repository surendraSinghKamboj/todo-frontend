import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className='sticky w-full h-14 bg-[#070f81a8] flex items-center p-3 top-0'>
      <h1 className='text-white text-xl flex-grow cursor-pointer' onClick={() => {
        window.scrollTo(0,0)
      }}>Surendra Singh kamboj</h1>
      <motion.ul className='flex items-center h-14 gap-3 text-white'>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/About"}><li>About</li></Link>
        <Link href={"/Skills"}><li>Skills</li></Link>
        <Link href={"/Projects"}><li>Projects</li></Link>
        <Link href={"/Contact"}><li>Contact</li></Link>
      </motion.ul>
    </header>
  )
}

export default Navbar