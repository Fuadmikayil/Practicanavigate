import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {routes} from "./routes"
createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}/>
)
