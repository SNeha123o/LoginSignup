import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CreateAccount from './Components/CreateAccount.jsx'
import LoginIn from './Components/LoginIn.jsx'
import Forget from './Components/Forget.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<CreateAccount />}/>
      <Route path='login' element={<LoginIn />}/>
      <Route path='forget' element={<Forget />}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

