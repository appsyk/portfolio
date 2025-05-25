'use client'

import { useViewContext } from '@/app/ViewContext';
import React from 'react'

const SideOptions = () => {
    const options = [
        {
            name: 'About',
            icon: <svg className='hover-effect group-hover:text-primary' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path fill='currentColor' d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path>
            </svg>,
            link: ''
        },
        {
            name: 'Resume',
            icon: <svg className='hover-effect group-hover:text-primary' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path fill='currentColor' d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></path>
            </svg>,
            link: ''
        },
        {
            name: 'Works',
            icon: <svg className='hover-effect group-hover:text-primary' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
            </svg>,
            link: ''
        }
    ]

    const { view, setView } = useViewContext();

    return (
        <div className='bg-white rounded-md w-fit p-2 z-10 divide-y text-secondary h-fit'>
            {
                options.map((_, index) => (
                    <div key={_.name} onClick={() => setView(index)} className={`flex gap-1 flex-col py-3 px-2 last:mb-0 justify-center items-center cursor-pointer group ${view === index ? '!text-primary' : ''}`}>
                        <div className='w-6 h-6'>
                            {_.icon}
                        </div>
                        <div className="hover-effect group-hover:text-primary text-[11px] uppercase">
                            {_.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SideOptions
