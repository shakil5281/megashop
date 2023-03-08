import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navber } from './components'
import ApiLoading from './components/layout/apiLoading'


const App = () => {
  return (
    <>
        <ApiLoading />
        <Navber />
        <Outlet />
    </>
  )
}

export default App