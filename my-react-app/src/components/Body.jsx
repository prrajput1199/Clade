import React from 'react'
import LeftSections from './Sections/LeftSections'
import RightSections from './Sections/RightSections'

const Body = () => {
  return (
    <div>
      <div className='flex flex-row'>
         <LeftSections/>
         <RightSections/>
      </div>
    </div>
  )
}

export default Body;
