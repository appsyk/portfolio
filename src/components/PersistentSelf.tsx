import React from 'react'
import SideOptions from './SideOptions'
import Self from './Self'

const PersistentSelf = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
            <SideOptions />
            <Self />
        </div>
    )
}

export default PersistentSelf
