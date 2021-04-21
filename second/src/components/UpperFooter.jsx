import React from 'react'

export default function UpperFooter() {
  return (
    <>
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
            marginTop: '45px',
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
