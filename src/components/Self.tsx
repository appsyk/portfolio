'use client'
import data from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const Self = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        delay(500);
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 5530)

        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        if (count === data.role.length) {
            setCount(0);
        }
    }, [count])

    return (
        <div className='self-animation relative bg-white rounded-md w-full max-w-[415px] h-full shadow-[10px_10px_15px_rgba(0,0,0,.05)] z-30'>
            <div className='absolute -left-4 -top-4 bg-gradient-to-b from-[rgba(255,255,255,.2)] to-transparent -z-[1] rounded-md w-full h-full'></div>
            <div className='relative overflow-hidden rounded-t-md -z-[1]'>
                <Image
                    className="w-full object-cover h-[367px] image-zoom-animation"
                    src={data.avatar}
                    alt="Next.js logo"
                    height={367}
                    width={1000}
                    quality={100}
                    priority
                />
                <div className='absolute bg-white w-full h-[65px] -bottom-11 rotate-12 -left-10'></div>
                <div className='absolute bg-white w-full h-[65px] -bottom-11 -rotate-12 left-10'></div>
            </div>
            <div className='bg-white -mt-3 w-full lg:w-[415px] max-w-[415px] rounded-b-md px-6 lg:px-12 pt-6 divide-y text-secondary'>
                <div className='text-center mb-8'>
                    <h2 className='text-secondary text-4xl mb-4'>
                        {data.name}
                    </h2>
                    <div className='text-primary text-sm mb-4 overflow-hidden'>
                        <div className="role-animation w-fit">
                            {data.role[count] || "-"}
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <Link href={data.linkedinUrl} target="_blank"><svg className='w-6 cursor-pointer hover-effect hover:text-primary text-secondary' focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></Link>
                        <Link href={data.githubUrl} target="_blank"><svg className='w-6 cursor-pointer hover-effect hover:text-primary text-secondary' focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></Link>
                        <Link href={data.instaUrl} target="_blank"><svg className='w-6 cursor-pointer hover-effect hover:text-primary text-secondary' focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></Link>
                    </div>
                </div>
                <div className='flex divide-x justify-center'>
                    <Link href={data.resume} target="_blank" className='px-6 w-full text-center py-4 hover-effect hover:text-primary'>
                        Download CV
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Self
