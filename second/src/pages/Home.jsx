import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { FETCH_CATEGORIES } from '../services'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data, error, loading, refetch } = useQuery(FETCH_CATEGORIES)

  return (
    <>
      <div className="container mt-5">
        <div className="columns is-centered">
          <img
            className="image"
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/banner.jpg"
            alt=""
            srcset=""
            style={{
              borderRadius: '20px',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: -200,
            marginBottom: '-200px',
            zIndex: 2,
            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-4 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Categories
          </button>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {data?.categories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <Link to={`/categories/${e.id}`}>
                      <img
                        className="image"
                        src={e.url}
                        alt="categories"
                        key={i}
                        style={{
                          borderRadius: '20px',
                          boxShadow: '0px 0px 7px #FF8D2D',
                          height: '250px',
                          width: '250px',
                          cursor: 'pointer',
                        }}
                      />
                    </Link>

                    <p
                      className=""
                      style={{ textAlign: 'left', marginTop: '15px' }}
                    >
                      {e.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="columns is-left">
          <img
            className="image"
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m6.jpeg"
            alt=""
            srcset=""
            style={{
              borderRadius: '20px',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: -150,
            marginBottom: '-150px',
            zIndex: 2,
            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-4 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Dealing
          </button>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {data?.categories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img
                      className="image"
                      src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg"
                      alt=""
                      srcset=""
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        height: '250px',
                        width: '250px',
                      }}
                    />

                    <p className="" style={{ textAlign: 'left' }}>
                      henlo
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="columns level-right">
          <img
            className="image"
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m2.jpeg"
            alt=""
            srcset=""
            style={{
              borderRadius: '20px',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: -150,
            marginBottom: '-150px',
            zIndex: 2,
            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-4 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Auction
          </button>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {data?.categories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img
                      className="image"
                      src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg"
                      alt=""
                      srcset=""
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        height: '250px',
                        width: '250px',
                      }}
                    />

                    <p className="" style={{ textAlign: 'left' }}>
                      henlo
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="columns is-left">
          <img
            className="image"
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m7.jpeg"
            alt=""
            srcset=""
            style={{
              borderRadius: '20px',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: -150,
            marginBottom: '-150px',
            zIndex: 2,
            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-4 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Trade-in
          </button>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {data?.categories.map((e, i) => (
                  <div className="column is-one-fifth">
                    <img
                      className="image"
                      src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg"
                      alt=""
                      srcset=""
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        height: '250px',
                        width: '250px',
                      }}
                    />

                    <p className="" style={{ textAlign: 'left' }}>
                      henlo
                    </p>
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
