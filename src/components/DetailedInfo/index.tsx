'use client'

import React from 'react'
import AboutMe from './AboutMe'
import Resume from './Resume';
import { useViewContext } from '@/app/ViewContext';
import Work from './Work';

const DetailedInfo = () => {
  const { view } = useViewContext();
  const viewComponent = (view: number) => {    
      switch (view) {
        case 0:
          return <AboutMe />
        case 1:
          return <Resume />
        case 2:
          return <Work />
        default:
          break;
      }
  }

  return (
    <div className="focus-visible:outline-none bg-white pt-0 pb-6 px-6 my-6 lg:my-3 rounded-l-md rounded-r-md lg:rounded-l-none lg:rounded-r-md overflow-y-auto overflow-x-hidden h-[calc(100%-10px)] z-20 detailed-info-animation">
      {viewComponent(view)}
    </div>
  )
}

export default DetailedInfo
