import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateUser from './pages/CreateUser/index.tsx'
import EditUser from './pages/EditUser/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/criar_usuario",
    element: <CreateUser />
  },
  {
    path: "editar_usuario/:id",
    element: <EditUser />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
