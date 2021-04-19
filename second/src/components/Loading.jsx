import React from 'react'
import Logo from '../second.png'

export default function Loading() {
  return (
    <div style={{
      textAlign:'center'
    }}>
      <img src={Logo} className="App-logo" alt="logo" height='300px' width='300px'/>
      <p className='subtitle'>Loading...</p>
    </div>
  )
}
