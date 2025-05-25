import SectionLabel from '@/app/common-components/SectionLabel'
import React from 'react'

const Work = () => {
    return (
        <div className='page-change-animation'>
            <div className='divide-y'>
                <SectionLabel label="Resume" />
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex gap-2'>
                    <svg className='hover-effect group-hover:text-primary' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path fill='currentColor' d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></path>
                    </svg>
                    <div>
                        Experience
                    </div>
                </div>
                <div className='divide-x'>
                    <div className='pr-4 pt-4'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
