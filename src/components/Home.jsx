import React from 'react'
import Background from './Background'

const Home = () => {
    return (
        <section className="home bg-slate-700 pt-28 min-h-[92vh]">
            <Background />
            <h3 className='text-3xl sm:ml-[100px] ml-1 text-emerald-500'>Hi,</h3>
            <h2 className='text-white text-5xl ml-2 sm:ml-[120px]'>I am Surendra Singh Kamboj</h2>
        </section>
    )
}

export default Home