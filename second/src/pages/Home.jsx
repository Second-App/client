import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="columns is-centered">
          <img className="image" src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/banner.jpg"
            alt="" srcset=""
            style={{
              borderRadius: "20px"
            }}
          />
        </div>
        <div   style={
          {
            position: "relative",
            top: -250,
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="box-border title is-3" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Category
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
                <div className="columns is-centered is-multiline">
                  <div className="column is-one-third">
                      <img className="image ml-6" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "300px",
                        width: "280px",
                      }}
                      />
                      <p className="" style={{textAlign: 'left', paddingLeft: '50px'}}>henlo</p>
                </div>
                <div className="column is-one-third">
                      <img className="image ml-6" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "300px",
                        width: "280px",
                      }}
                      />
                      <p className="" style={{textAlign: 'left', paddingLeft: '50px'}}>henlo</p>
                </div>
                <div className="column is-one-third">
                      <img className="image ml-6" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "300px",
                        width: "280px",
                      }}
                      />
                      <p className="" style={{textAlign: 'left', paddingLeft: '50px'}}>henlo</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
