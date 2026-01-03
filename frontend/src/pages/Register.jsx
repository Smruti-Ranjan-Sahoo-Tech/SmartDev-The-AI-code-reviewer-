import React, { useState } from 'react'
import { useFirebaseAuthStore } from '../store/useFirebaseAuthStore'

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path fill="#EA4335" d="M12 11.5v2.9h4.22c-.18 1.17-1.26 3.43-4.22 3.43-2.54 0-4.63-2.1-4.63-4.69S9.46 9.43 12 9.43c1.44 0 2.4.62 2.95 1.14l2.01-1.95C16.43 6.9 14.41 6 12 6 7.95 6 4.63 8.94 4.63 12.74S7.95 19.5 12 19.5c6.02 0 6.58-5.03 6.58-5.82 0-.39-.04-.66-.06-.9H12z"/>
  </svg>
)

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {registerByEmail,loginByGoogle} = useFirebaseAuthStore()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      const email = form.email;
      const password = form.password ;
      const success=registerByEmail(email,password)
      if (success) {
        navigator("/code-review");
      }
    } catch (err) {
      setError(err?.response?.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-sm text-gray-400">Create your account</p>
          <h1 className="text-3xl font-extrabold text-white mt-2">Sign up</h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              type="email"
              className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              type="password"
              className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {error && <div className="text-red-400 text-sm">{error}</div>}

            <button type="submit" disabled={loading} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold  cursor-pointer">
              {loading ? 'Creating...' : 'Sign up'}
            </button>

            <div  className="w-full inline-flex items-center justify-center border border-gray-600 rounded-lg py-2 bg-gray-700 text-gray-100 hover:bg-gray-700/80  cursor-pointer"
          onClick={async()=>{
             const success = await loginByGoogle();
             if(success){
              navigator('/code-review')
             }
          }}
          >
            <GoogleIcon />
            Sign in with Google
          </div>

            <p className="text-center text-gray-400 text-sm">Already have an account? <a href="/login" className="text-indigo-400 hover:underline">Sign in</a></p>
          </form>
        </div>
    </div>
  )
}

export default Register