import React from 'react'
import { Loading } from '../components'
import Home from '../components/home'

const Homepage = () => {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    </>
  )
}

export default Homepage