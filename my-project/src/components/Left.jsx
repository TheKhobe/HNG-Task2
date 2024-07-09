import React from 'react'
import CardComponent from './CardComponent'
import Sidebar from './Sidebar'

function Left() {
  return (
    <div className='flex flex-row md:space-x-8'>
    <Sidebar/>
     <CardComponent />
    
    </div>
  )
}

export default Left