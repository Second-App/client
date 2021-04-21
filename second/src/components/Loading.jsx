import React from 'react'
import Logo from '../second.png'

export default function Loading() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '200px'
    }}>
      <img src={Logo} className="App-logo" alt="logo" height='300px' width='300px'/>
    </div>
  )
}
