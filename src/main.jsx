import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from '../Main';
import Home from './pages/pages/Home/HomePage/Home';
import Login from './pages/pages/Login/Login';
import Register from './pages/pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AddToy from './pages/pages/AddToy/AddToy';
import ViewDetails from './pages/pages/ViewDetails/ViewDetails';
import AllToys from './pages/AllToys/AllToys';
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
      {
        path: 'addToys',
        element:<AddToy/>
      }, {
        path: 'viewDetails',
        element:<ViewDetails/>
      },
      {
        path: 'allToys',
        element: <AllToys />,
        loader: () => fetch(`http://localhost:5000/allData`)
      }
     
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
