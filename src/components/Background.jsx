import React from 'react'

const Background = () => {
    return (
        <div
            className='absolute flex background justify-center flex-col items-center top-14 right-0 w-[50vw] z-[-10] h-[50vh] bg-slate-700 backdrop-blur-md'>
            <p className='text-lg text-lime-400'>{"function"} <span className='text-yellow-500'>{"hello(params) "}</span>
                <span className='text-red-400'>{"{"}</span>
            </p>
            <p className='text-lg text-indigo-500 translate-x-5 sm:translate-x-20'>{"console.log(Surendra Singh Kamboj);"}</p>
            <p className='text-lg text-red-400'>{"}"}</p>
        </div>
    )
}

export default Background