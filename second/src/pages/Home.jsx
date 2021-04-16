import React from 'react'
import cincin from '../cincin.png'

export default function Home() {
  const dummyCategories = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ]
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
            marginBottom: "-250px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Categories
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="" style={{ textAlign: 'left' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>

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
            marginBottom: "-250px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Jual-Beli
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="" style={{ textAlign: 'left' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
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
            marginBottom: "-250px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Lelang
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="" style={{ textAlign: 'left' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
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
            marginBottom: "-250px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Tukar-Tambah
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px rgb(211,211,211)",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="" style={{ textAlign: 'left' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
