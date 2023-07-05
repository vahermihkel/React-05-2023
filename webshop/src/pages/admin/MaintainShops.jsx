import React, { useRef } from 'react'
import AdminHome from './AdminHome'

function MaintainShops() {
  const nameRef = useRef();
  const lngRef = useRef();
  const latRef = useRef();
  const openTimeRef = useRef();


  
  return (
    <div>
      <AdminHome />
      MaintainShops
    </div>
  )
}

export default MaintainShops