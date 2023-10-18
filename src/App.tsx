/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from 'react-router-dom'
import router from './useRouteElement'
import * as React from 'react'
import { getCartFromLS, setCartFromLS } from './utils/utils'

function App() {
  const cart = getCartFromLS() || []
  React.useEffect(() => {
    setCartFromLS(cart)
  }, [])
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
