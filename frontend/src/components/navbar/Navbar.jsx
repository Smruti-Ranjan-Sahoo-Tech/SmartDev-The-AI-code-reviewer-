import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebaseAuthStore } from '../../store/useFirebaseAuthStore'
import { LogOut, Settings } from 'lucide-react'

const Navbar = () => {
  const navigator = useNavigate()
  const { isLoggedIn, logout } = useFirebaseAuthStore()

  return (
    <header className='sticky top-0 bg-slate-950 backdrop-blur-lg z-50 border-b border-slate-800/50'>
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
          onClick={() => navigator('/')}
        >
          SmartDev
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button
                className="p-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-all duration-200 group"
                onClick={() => navigator('/change-password')}
                title="Settings"
              >
                <Settings size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <button
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/30 transition-all duration-200 font-medium text-sm"
                onClick={() => logout()}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <button
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105 text-sm"
              onClick={() => navigator('/code-review')}
            >
              Get Started
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
