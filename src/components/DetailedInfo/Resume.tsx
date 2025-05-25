import SectionLabel from '@/app/common-components/SectionLabel'
import data from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Resume = () => {
    return (
        <div className='divide-y page-change-animation'>
            <SectionLabel label="Resume" />
            <div className='divide-y'>
                <div className='pt-7'>
                    <div className='flex gap-2 mb-6'>
                        <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
                        </svg>
                        <div className='uppercase text-base font-bold'>
                            Experience
                        </div>
                    </div>
                    <div className='divide-y'>
                        {
                            data.experience.map((_, index) => (
                                <div key={index} className='mb-4 pt-4 first:pt-0'>
                                    <div className='bg-[#00000005] border rounded-2xl p-4 last:mb-0'>
                                        <div className={`border rounded-md px-2 mb-2 text-xs w-fit ${index === 0 ? 'border-primary text-primary' : 'border-border-grey text-border-grey'}`}>{_.duration}</div>
                                        <div className='flex justify-between gap-4'>
                                            <div className='text-base font-bold'>{_.role}</div>
                                            <Image className='h-7 w-auto' src={_.logo} alt={_.organization} width={100} height={40} />
                                        </div>
                                        <div className='text-xs text-light-grey font-normal mb-2'>{_.organization}</div>
                                        <div className='text-sm'>{_.desc}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-7'>
                    <div className='flex gap-2 mb-6'>
                        <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill='currentColor' d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
                        </svg>
                        <div className='uppercase text-base font-bold'>
                            Education
                        </div>
                    </div>
                    <div className='divide-y'>
                        {
                            data.education.map((_, index) => (
                                <div key={index} className='mb-4 pt-4 first:pt-0'>
                                    <div className={`border rounded-md px-2 mb-2 text-xs w-fit border-border-grey text-border-grey`}>{_.duration}</div>
                                    <div className='text-base font-bold'>{_.institute}</div>
                                    <div className='text-xs text-light-grey font-normal mb-2'>{_.location}</div>
                                    <div className='text-sm'>{_.desc}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
