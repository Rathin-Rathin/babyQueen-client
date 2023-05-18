import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from '../Main';
import Home from './pages/pages/Home/HomePage/Home';
import Login from './pages/pages/Login/Login';
import Register from './pages/pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element:<Home/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
     
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
