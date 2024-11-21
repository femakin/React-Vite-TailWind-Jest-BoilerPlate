import { useAuth } from '@/contexts/AuthContext'
import React from 'react'

function Service() {

    const { logout} = useAuth()
  return (
    <div  className='' >
      <h1 className='txtHeading shadowCard' >Service Text </h1>

      <h1 onClick={()=> {logout()}} >Logout</h1>
    </div>
  )
}

export default Service