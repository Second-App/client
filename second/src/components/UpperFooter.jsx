import React from 'react'

export default function UpperFooter() {
  return (
    <>
      <div className='columns is-centered'
        style={{
            textAlign: 'center',
            opacity: 1,
            marginTop: '20px',
            marginBottom: '55px',
            borderRadius: '0px',
            backgroundColor: '',
            boxShadow: '0px 0px 0px',
      }}>
        <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Community.gif" alt=""/>
      </div>
      <div
      style={{
        position: 'relative',
        marginTop: '-30px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent : 'center'
      }}
      >
        <span className="subtitle is-3 box"
          style={{
            textAlign: 'center',
            opacity: 0.9,
            marginBottom: "70px",
            paddingBottom: '1px',
            // boxShadow: "0px 0px 7px #FF8D2D",
            borderBottom: '5px solid #FF8D2D',
            boxShadow: '0px 0px 0px',
          }}
        >
          We are in this <b> box </b> <i> together </i>
        </span>
      </div>  
    </>
  )
}
