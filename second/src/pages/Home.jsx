import React from 'react'

export default function Home() {
  const dummyCategories = [
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/1.jpeg`, name: 'Automotive' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/2.jpeg`, name: 'Property' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/3.jpeg`, name: 'Food & Beverages' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/4.jpeg`, name: 'Electronic & Gadgets' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/5.jpeg`, name: 'Hobbies & Sports' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/6.jpeg`, name: 'Household Needs' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/7.jpeg`, name: 'Self-Care' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/8.jpeg`, name: 'Kids' },
    { url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/9.jpeg`, name: 'Office Needs' },
    {url: `https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/10.jpeg`, name: 'Pets'}
  ]
  return (
    <>
      <div className="container mt-5">
        <div className="columns is-centered">
          <img className="image" src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/banner.jpg"
            alt="" srcset=""
            style={{
              marginTop: '10px',
              borderRadius: "20px",
              boxShadow: "5px 10px 7px #AA89D2",
            }}
          />
        </div>
        <div style={
          {
            position: "relative",
            top: -300,
            marginBottom: "-200px",
            zIndex: 2,
          
            borderRadius: "20px"
          
          }}>
          <span className="title is-4 box"
            style={{
              textAlign: 'center',
              opacity: 1,
              marginBottom: "200px",
              backgroundColor: "#AA89D2"
            }}
          >
            Get your deal done in a second.
          </span>
        </div>
        <div   style={
          {
            position: "relative",
            top: -200,
            marginBottom: "-200px",
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
                    <img className="image" src={e.url} alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px #FF8D2D",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="box" style={{ textAlign: 'left', marginTop: '15px' }}>{e.name}</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-half level-rigth">
            <img className="image" src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m6.jpeg"
              alt="" srcset=""
              style={{
                borderRadius: "20px",
                boxShadow: "5px 10px 7px #FF8D2D"
              }}
            />
          </div>
          <div className="column level-left">
            <span className="title is-4 box"
              style={{
                textAlign: 'center',
                opacity: 0.8,
                marginTop: "150px",
                backgroundColor: "#FFB979"
              }}
            >
              Dealing helps you find a product of your choice and get your deal done in a second.
            </span>
          </div>
        </div>
        <div   style={
          {
            position: "relative",
            top: -150,
            marginBottom: "-150px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Dealing
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image is-48x48" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px #FF8D2D",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="box" style={{ textAlign: 'left', marginTop: '15px' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column">
            <span className="title is-4 box"
              style={{
                textAlign: 'center',
                opacity: 0.8,
                marginTop: "100px",
                backgroundColor: "#FFB979"
              }}
            >
              Auction helps you find a product of your choice to bid in a second.
            </span>
          </div>
          <div className="column is-half">
            <img className="image" src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m2.jpeg"
              alt="" srcset=""
              style={{
                borderRadius: "20px",
                boxShadow: "5px 10px 7px #FF8D2D",
              }}
            />
          </div>
        </div>
        <div   style={
          {
            position: "relative",
            top: -150,
            marginBottom: "-150px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Auction
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px #FF8D2D",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="box" style={{ textAlign: 'left', marginTop: '15px' }}>henlo</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-half level-rigth">
            <img className="image" src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m7.jpeg"
              alt="" srcset=""
              style={{
                borderRadius: "20px",
                boxShadow: "5px 10px 7px #FF8D2D"
              }}
            />
          </div>
          <div className="column level-left">
            <span className="title is-4 box"
              style={{
                textAlign: 'center',
                opacity: 0.8,
                marginTop: "150px",
                backgroundColor: "#FFB979"
              }}
            >
              Trade-in helps you find the product of your choice to start bargaining with your own product(s) in a second.
            </span>
          </div>
        </div>
        <div   style={
          {
            position: "relative",
            top: -150,
            marginBottom: "-150px",
            zIndex: 2,
            borderRadius: "20px"
          
          }}>
          <button className="title is-4 mt-4 pl-2 heading" style=
            {{
            textAlign: 'left',
              color: 'black'
            }}>
            Trade-in
          </button>
            <div className="column is-main-content">
              <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {dummyCategories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img className="image" src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg" alt="" srcset=""
                      style={{
                        borderRadius: "20px",
                        boxShadow: "0px 0px 7px #FF8D2D",
                        height: "250px",
                        width: "250px",
                      }} />
                      
                    <p className="box" style={{ textAlign: 'left', marginTop: '15px' }}>henlo</p>
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
