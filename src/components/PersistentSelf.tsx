import React from 'react'
import SideOptions from './SideOptions'
import Self from './Self'

const PersistentSelf = () => {
    return (
        <div className="flex gap-2">
            <SideOptions />
            <Self />
        </div>
    )
}

export default PersistentSelf
