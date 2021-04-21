import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories, fetchProducts } from '../store/actions'
import { Loading, ProductList } from '../components'
import Logo from '../second.png'

export default function Home() {
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])
  
  if(error) return <div>error</div>
  if(loading || !categories.length) return <Loading />

  const fullPayment = []
  const auction = []

  categories.forEach((cat, i) => {
    let index = Math.floor(Math.random() * cat.Products.length)
    while (+cat.Products[index].TypeId === 2 || +cat.Products[index].TypeId === 3) {
      index = Math.floor(Math.random() * cat.Products.length)
    }
    
    if (i < 8) fullPayment.push(cat.Products[index])
  })
  categories.forEach((cat, i) => {
    let index = Math.floor(Math.random() * cat.Products.length)
    while (+cat.Products[index].TypeId === 1 || +cat.Products[index].TypeId === 3) {
      index = Math.floor(Math.random() * cat.Products.length)
    }
    if (i < 8) auction.push(cat.Products[index])
  })

  return (
    <>
      <div className='columns is-centered'
          style={{
              textAlign: 'center',
              opacity: 1,
              borderRadius: '0px',
              backgroundColor: '',
              boxShadow: '0px 0px 0px',
            }}
        >
          <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Delivery.gif"/>
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: '-30px',
          marginBottom: '-180px',
          borderRadius: '0px',
          display: 'flex',
          justifyContent : 'center'
        }}
      >
        <div className='columns is-centered'>
          <span
            className="subtitle is-4 box"
            style={{
              textAlign: 'center',
              opacity: 1,
              marginBottom: '200px',
              borderRadius: '0px',
              backgroundColor: '',
              boxShadow: '0px 0px 0px',
              borderBottom: '3px solid #7300FC ',
              paddingBottom: '1px'
            }}
          >
            Get your <b>deal</b> done in a <i> second.</i>
          </span>
        </div>
          
      </div>
      
      <div className="container">
        <div className="columns is-centered">
          <span>

          </span>
        </div>
        <div
          style={{
            position: 'relative',
          }}
        >
          <p
            className="title is-4 pl-2 heading"
            style={{
              textAlign: 'left',
              color: 'black',
            }}
          >
            Categories
          </p>
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline"
                
              >
                {categories.map((e, i) => (
                  <div key={e.id} className="column is-one-fifth"
                  >
                    <div className="card column"
                      style={{
                        boxShadow: '0px 0px 0px',
                      }}
                    >
                      <Link to={`/categories/${e.id}`}>
                        <img
                          className="image"
                          src={e.imageURL}
                          alt="categories"
                          style={{
                            borderRadius: '0px',
                            boxShadow: '0px 0px 0px',
                            height: '250px',
                            width: '250px',
                            cursor: 'pointer',
                            objectFit: 'cover',
                            border: '3px solid #FF8D2D'
                          }}
                        />
                      </Link>

                      <p
                        className="subtitle"
                        style={{ textAlign: 'center', marginTop: '15px' }}
                      >
                        {e.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="columns">
          <div className="column is-half">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Wallet.gif"
              alt="banner"
              style={{
                marginLeft:'100px',
                borderRadius: '0px',
              }}
            />
          </div>
          <div className="column">
            <span
              className="subtitle is-3 box"
              style={{
                textAlign: 'right',
                opacity: 0.8,
                marginTop: '150px',
                boxShadow: '0px 0px 0px',
                borderRadius: '0px',
                borderBottom: '5px solid #FF8D2D',
                paddingBottom: '5px'
              }}
            >
              Full-Payment helps you find a product of your choice and get your
               <b> deal</b> done in a <i> second.</i>
            </span>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            marginBottom: '0px',
          }}
        >
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
                <ProductList  data={fullPayment}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column">
            <span
              className="subtitle is-3 box"
              style={{
                textAlign: 'left',
                opacity: 0.8,
                marginTop: '150px',
                boxShadow: '0px 0px 0px',
                borderBottom: '5px solid #FF8D2D',
                paddingBottom: '5px',
                borderRadius: '0px'
              }}
            >
              Auction helps you find a product of your choice to <b>bid</b> in a
              <i> second.</i>
            </span>
          </div>
          <div className="column is-half">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Make+it+rain.gif"
              alt="banner"
              style={{
                marginLeft:'100px',
                borderRadius: '0px',
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            top: 0,
            marginBottom: '0px',
          }}
        >
          <div className="column is-main-content">
            <div className="container is-widescreen">
              <div className="columns is-centered is-multiline">
              <ProductList  data={auction}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
