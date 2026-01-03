import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { useFirebaseAuthStore } from './store/useFirebaseAuthStore'
import {ToastContainer} from 'react-toastify'
import { axiosInstance } from './lib/axios'
const App = () => {
  const [data,setData]=useState([])
  const { initialLoginCheck } = useFirebaseAuthStore()
  const startMyVercelServer=async()=>{
     const res=await axiosInstance.get("/")
     setData(res.data)
  }
  useEffect(() => {
    initialLoginCheck();
    startMyVercelServer()
  }, [])
  console.log(data)
  return (
    <div className='bg-black'>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App