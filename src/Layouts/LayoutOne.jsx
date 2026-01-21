import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const LayoutOne = () => {
  return (
    <>
    <div className='flex '>
      <div className="one">
 <Navbar/>
      </div>
  <Outlet/>
    </div>
     
  
      
    </>
  )
}

export default LayoutOne
