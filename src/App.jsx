
import React from 'react'
import Partners from './components/pages/Partners/Partners'
import Business from './components/pages/ForBusiness/Business'
import SignIn from './components/pages/Auth/SignIn'
import SignUp from './components/pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {

  const routes = createBrowserRouter([
    { path: '/', element: <Partners /> },
    { path: '/business', element: <Business /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
  ])

  return (
    <AuthProvider>
      <div>
        <RouterProvider router={routes} />
      </div>
    </AuthProvider>
  )
}

export default App
