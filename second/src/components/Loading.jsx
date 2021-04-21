import React from 'react'
import Logo from '../second.png'

export default function Loading() {
  return (
    <>
    <div style={{
      textAlign: 'center',
      marginTop: '100px'
    }}>
      <img src={Logo} className="App-logo" alt="logo" height='300px' width='300px' />
    </div>
    <div className='subtitle is-4'
      style={{textAlign: 'center', marginBottom: '100px'}}  
    >
        wait a second...
    </div>
    </>
  )
}
