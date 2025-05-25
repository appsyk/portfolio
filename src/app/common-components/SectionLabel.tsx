import React from 'react'

const SectionLabel = ({ label }: { label: string }) => {
    return (
        <div className='text-primary text-xl py-4 font-bold'>
            {label}
        </div>
    )
}

export default SectionLabel
