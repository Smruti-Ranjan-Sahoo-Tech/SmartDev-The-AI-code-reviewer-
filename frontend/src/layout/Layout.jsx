import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar"
import { useFirebaseAuthStore } from '../store/useFirebaseAuthStore'
import FullScreenLoader from '../components/FullScreenLoader/FullScreenLoader'


const Layout = () => {
    const {loading}=useFirebaseAuthStore()
    
  return (
    <>
    <Navbar/>
     <div className='min-h-screen'>
      {
        loading?<FullScreenLoader/>:<Outlet/>
      }
      
     </div>
    </>
  )
}

export default Layout