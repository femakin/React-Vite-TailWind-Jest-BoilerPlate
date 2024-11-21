import React from 'react'
import Navbar from '../Navbar'

const PageLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
       <div>
        {children}
        <h1>Footer</h1>
       </div>

    </div>
  )
}

export default PageLayout
