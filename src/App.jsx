import React, { Children } from 'react'
import AppLayout from './components/Layout/AppLayout'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
  import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/Layout/CountryDetails'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    
  ]);
 
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
