'use client'
import React from 'react'

const SectionLabel = ({ label }: { label: string }) => {
    const splitLab = label.split("");
    const lab = splitLab.slice(1, splitLab.length)
    return (
        <div className='bg-white z-10 text-primary text-xl py-4 font-bold relative'>
            <span className='font-black'>{splitLab[0]}</span><span>{lab.join("")}</span>
            <div className='absolute w-8 h-8 rounded-full -z-[1] bg-gradient-to-br from-primary to-transparent top-[15px] -left-[8px]'></div>
        </div>
    )
}

export default SectionLabel
