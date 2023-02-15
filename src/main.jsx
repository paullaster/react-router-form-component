import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const app = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path='/'
    element={<App/>}
    />
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app}/>
  </React.StrictMode>,
)
