import React from 'react'
import Partners from './components/pages/Partners/Partners'
import Business from './components/pages/ForBusiness/Business'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {

  const routes = createBrowserRouter([
    { path: '/', element: <Partners /> },
    { path: '/business', element: <Business /> },
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App