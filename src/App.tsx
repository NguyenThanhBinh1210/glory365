import { RouterProvider } from 'react-router-dom'
import router from './useRouteElement'
import * as React from 'react'

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
