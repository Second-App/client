import React from 'react'

export default function Footer() {
  return (
    <div
      className=""
      style={{
        minHeight: '250px',
        borderTop: '3px double #7300FC'
      }}
    >
      <div className="columns is-centered">
        <div>

        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          
        }}>
            <img
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/second.png"
              width="150px"
              height="150px"
              alt="footer"
              style={{
                zIndex: 1,
                marginTop: '40px',
                marginLeft: '50px'
              }}
          />
          <span className="title is-3"
            style={{
              textAlign: 'center'
            }}
          >
            second.
          </span>
          <span
          style={{
              textAlign: 'center',
            marginTop: '-20px'
          }}  
          >
            let's create a better <b> box </b> <i>together.</i>
          </span>
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}
