import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {
  action as rootAction
} from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const app = createBrowserRouter(
  createRoutesFromElements(
    <Route
    action={rootAction}
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
