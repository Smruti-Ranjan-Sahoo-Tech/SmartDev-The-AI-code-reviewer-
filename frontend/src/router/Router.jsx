import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import CodeReview from '../pages/CodeReview'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import ForgotPassword from '../pages/ForgotPassword'
import ChangePassword from '../pages/ChangePassword'
import Features from '../pages/Features'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "features", element: <Features /> },

      {
        element: <PublicRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "forgot-password", element: <ForgotPassword /> },
        ],
      },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "code-review", element: <CodeReview /> },
          { path: "change-password", element: <ChangePassword /> },
        ],
      },
    ],
  },
])
