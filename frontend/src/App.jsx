import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { useFirebaseAuthStore } from './store/useFirebaseAuthStore'
import {ToastContainer} from 'react-toastify'
const App = () => {
  const { initialLoginCheck } = useFirebaseAuthStore()
  useEffect(() => {
    initialLoginCheck()
  }, [])
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