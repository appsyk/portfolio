import Dot from '@/common-components/Dot'
import SectionLabel from '@/common-components/SectionLabel'
import data from '@/data/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Projects {
    role: string;
    desc: string[];
    duration: string;
    name: string;
    poster: string;
    loadMore?: boolean;
}

const Work = () => {
    const [project, setProject] = useState<Projects[]>(data?.projects);

    useEffect(() => {
        setProject(data?.projects)
    }, [])

    const handleLoadMore = (name: string) => {
        const update = project.map(item => {
            if (name === item.name) {
                return {
                    ...item,
                    loadMore: !item.loadMore
                }
            }
            return item
        })
        setProject(update)
    }

    return (
        <div className='divide-y page-change-animation'>
            <SectionLabel label="Works" />
            <div className='divide-y'>
                <div className='py-7'>
                    <div className='flex gap-2 mb-6'>
                        <svg className='text-primary w-6' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
                        </svg>
                        <div className='uppercase text-base font-bold'>
                            Projects
                        </div>
                    </div>
                    <div className=''>
                        {
                            project.map((_, index) => (
                                <div key={index} className='pt-4 first:pt-0 group cursor-pointer transition-all duration-500' onClick={() => handleLoadMore(_.name)}>
                                    <div className='bg-gray-50 border rounded-2xl p-4 last:mb-0 grid grid-cols-3 gap-4'>
                                        <div className='h-[134px] w-full'>
                                            <Image className='group-hover:scale-105 transition-all duration-500 h-[134px] w-full object-cover' src={_.poster} alt={_.name} width={1000} height={40} />
                                        </div>
                                        <div className={`relative col-span-2 transition-all duration-500 ${_.loadMore ? 'h-full' : 'h-[134px]'} overflow-hidden`}>
                                            <div className='absolute bottom-0 bg-gradient-to-t from-gray-50 via-gray-50 cursor-pointer to-transparent h-12 w-full text-sm text-end hover:underline text-primary flex justify-end items-end'
                                                onClick={() => handleLoadMore(_.name)}>
                                                <span className='-mb-[3px]'>{_.loadMore ? "Show less" : "Show more"}</span>
                                            </div>
                                            <Dot duration={_.duration} index={index} showDot={false} firstActive={true} />
                                            <div className='flex justify-between gap-4'>
                                                <div className='text-base font-bold'>{_.name}</div>
                                            </div>
                                            <div className='text-xs text-light-grey font-normal mb-2'>{_.role}</div>
                                            <ul className='text-sm list-disc pl-4'>{
                                                _.desc?.map((_, index) => (
                                                    <li key={index}>{_}</li>
                                                ))
                                            }</ul>
                                            <button className='outline-none border-0 text-sm text-end underline text-primary' onClick={() => {
                                                const update = project.map(item => {
                                                    if (_.name === item.name) {
                                                        return {
                                                            ...item,
                                                            loadMore: !item.loadMore
                                                        }
                                                    }
                                                    return item
                                                })
                                                setProject(update)
                                            }}>{_.loadMore ? "Show less" : "Show more"}</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
