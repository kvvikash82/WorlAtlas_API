import React from 'react'
import Header from '../../Ui/Header'
import Footer from '../../Ui/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout
