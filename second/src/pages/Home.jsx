import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../store/actions'
import { Loading } from '../components'

export default function Home() {
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  if(error) return <div>error</div>
  if(loading) return <Loading />

  return (
    <>
      <div
        style={{
          position: 'relative',
          marginTop: '20px',
          marginBottom: '-180px',
          zIndex: 0,

          borderRadius: '20px',
        }}
      >
        <span
          className="title is-4 box"
          style={{
            textAlign: 'center',
            opacity: 1,
            marginBottom: '200px',
            backgroundColor: '#AA89D2',
          }}
        >
          Get your deal done in a second.
        </span>
      </div>
      <div className="container mt-5">
        <div className="columns is-centered">
          <img
            className="image"
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/banner.jpg"
            alt="banner"
            style={{
              marginTop: '10px',
              borderRadius: '20px',
              boxShadow: '5px 10px 7px #AA89D2',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            marginBottom: '0px',
            zIndex: 0,

            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-6 pl-2 heading"
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
                {categories.map((e, i) => (
                  <div key={e.id} className="column is-one-fifth">
                    <Link to={`/categories/${e.id}`}>
                      <img
                        className="image"
                        src={e.url}
                        alt="categories"
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
                      className="subtitle"
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
        <div className="columns is-centered">
          <div className="column is-half level-rigth">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m6.jpeg"
              alt="banner"
              style={{
                borderRadius: '20px',
                boxShadow: '5px 10px 7px #FF8D2D',
              }}
            />
          </div>
          <div className="column level-left">
            <span
              className="title is-4 box"
              style={{
                textAlign: 'center',
                opacity: 0.8,
                marginTop: '200px',
                backgroundColor: '#FFB979',
              }}
            >
              Full-Payment helps you find a product of your choice and get your
              deal done in a second.
            </span>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            marginBottom: '0px',
            zIndex: 0,
            borderRadius: '20px',
          }}
        >
          <button
            className="title is-4 mt-6 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Full-Payment
          </button>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                {categories.map((e, i) => (
                  <div key={e.id} className="column is-one-fifth">
                    <img
                      className="image is-48x48"
                      src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg"
                      alt="banner"
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        height: '250px',
                        width: '250px',
                      }}
                    />

                    <p
                      className="subtitle"
                      style={{ textAlign: 'left', marginTop: '15px' }}
                    >
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
        <div className="columns is-centered">
          <div className="column">
            <span
              className="title is-4 box"
              style={{
                textAlign: 'center',
                opacity: 0.8,
                marginTop: '170px',
                backgroundColor: '#FFB979',
              }}
            >
              Auction helps you find a product of your choice to bid in a
              second.
            </span>
          </div>
          <div className="column is-half">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/photoBank/market/m2.jpeg"
              alt="banner"
              style={{
                borderRadius: '20px',
                boxShadow: '5px 10px 7px #FF8D2D',
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            marginBottom: '0px',
            zIndex: 0,
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
                {categories.map((e, i) => (
                  <div key={e.id} className="column is-one-fifth">
                    <img
                      className="image"
                      src="https://silverandgold.s3-ap-southeast-1.amazonaws.com/4.jpeg"
                      alt="banner"
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        height: '250px',
                        width: '250px',
                      }}
                    />

                    <p
                      className="subtitle"
                      style={{ textAlign: 'left', marginTop: '15px' }}
                    >
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
