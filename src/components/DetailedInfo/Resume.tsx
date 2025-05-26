import Dot from '@/common-components/Dot'
import ProgressCircle from '@/common-components/ProgressCircle'
import SectionLabel from '@/common-components/SectionLabel'
import data from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Resume = () => {
    return (
        <div id="resume">
            <div className='divide-y page-change-animation '>
                <SectionLabel label="Resume" />
                <div className='divide-y'>
                    <div className='py-7'>
                        <div className='flex gap-2 mb-6'>
                            <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
                            </svg>
                            <div className='uppercase text-base font-bold'>
                                Experience
                            </div>
                        </div>
                        <div className='border-l pl-4'>
                            {
                                data.experience.map((_, index) => (
                                    <div key={index} className='pt-4 first:pt-0'>
                                        <div className='bg-gradient-to-tr from-gray-100 to-transparent rounded-2xl p-4 last:mb-0'>
                                            <Dot duration={_.duration} index={index} firstActive={true} />
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
                    <div className='py-7'>
                        <div className='flex gap-2 mb-6'>
                            <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
                            </svg>
                            <div className='uppercase text-base font-bold'>
                                On-site Experience
                            </div>
                        </div>
                        <div className='border-l pl-4'>
                            {
                                data.onsiteExperience.map((_, index) => (
                                    <div key={index} className='pt-4 first:pt-0'>
                                        <div className='bg-gradient-to-tr from-gray-100 to-transparent rounded-2xl p-4 last:mb-0'>
                                            <Dot duration={_.duration} index={index} firstActive={false} />
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
                    <div className='py-7'>
                        <div className='flex gap-2 mb-6'>
                            <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill='currentColor' d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
                            </svg>
                            <div className='uppercase text-base font-bold'>
                                Education
                            </div>
                        </div>
                        <div className='border-l pl-[2.1rem]'>
                            {
                                data.education.map((_, index) => (
                                    <div key={index} className='mb-4 pt-4 first:pt-0'>
                                        <Dot duration={_.duration} index={index} firstActive={false} />
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
            <div className='divide-y mt-8'>
                <SectionLabel label='Programming Skills' />
                <div className='py-4 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {data.skills.map((_, index) => (
                        <div key={index} className='p-2 group bg-gradient-to-t from-gray-100 to-transparent rounded-md overflow-hidden'>
                            <div className='relative flex flex-col items-center'>
                                <ProgressCircle percentage={_.level} />
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                                    <i className={`${_.iconName} colored text-3xl`}></i>
                                    <p className='text-xs'>{_.level}%</p>
                                </div>
                            </div>
                            <div className='text-center mt-2 text-sm'>{_.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='divide-y mt-8'>
                <SectionLabel label='Other Technical Skills' />
                <div className='py-4 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {data.otherTechSkill.map((_, index) => (
                        <div key={index} className='p-2 group bg-gradient-to-t from-gray-100 to-transparent rounded-md overflow-hidden'>
                            <div className='relative flex flex-col items-center'>
                                <ProgressCircle percentage={_.level} />
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                                    {_.image ? <Image src={_.iconName} alt={_.name} width={30} height={30} /> : <i className={`${_.iconName} colored text-3xl`}></i>}
                                    <p className='text-xs'>{_.level}%</p>
                                </div>
                            </div>
                            <div className='text-center mt-2'>{_.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='divide-y mt-8'>
                <SectionLabel label='Knowledge' />
                <div className='py-4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    {
                        data.knowledge.map((_, index) => (
                            <div key={index} className='flex gap-2 items-center mb-1 last:mb-0'>
                                <svg className='w-5 h-5 shrink-0 text-green-500' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"></path>
                                </svg>
                                <p className='text-sm'>{_}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Resume
