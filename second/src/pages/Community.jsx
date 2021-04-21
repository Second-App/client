import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryList, ProductList, Loading } from '../components'
import { fetchCategories, getOneType } from '../store/actions'

export default function Community() {
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )

  const [filterById, setProductFilter] = useState('')
  const [isCollapsed, setCollapsed] = useState(true)

  const { singleType, loading: typesLoading, error: typesError } = useSelector(
    (state) => state.transactionTypesReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(getOneType(3))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (loading || !singleType.length) return <Loading />
  if (error) return <div>error</div>

  const typesProducts = filterById === "" ? singleType.slice(0, 8) : singleType.filter(cat => +cat.CategoryId === +filterById)
  
  return (
    <>
      <div className='columns is-centered'
          style={{
              textAlign: 'center',
              opacity: 1,
              borderRadius: '0px',
              backgroundColor: '',
              boxShadow: '0px 0px 0px',
              marginTop: '20px'
            }}>
        <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Community+(2).gif" alt=""/>
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: '-80px',
          marginBottom: '-180px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent : 'center'
        }}
      >
        <span
          className="subtitle is-4 box"
          style={{
            textAlign: 'center',
            opacity: 1,
            marginBottom: '250px',
            borderRadius: '0px',
            backgroundColor: '',
            boxShadow: '0px 0px 0px',
            borderBottom: '3px solid #7300FC ',
            paddingBottom: '1px'
          }}
          >
            Together  as a <b><i> Community. </i></b> 
        </span>
      </div>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-half level-rigth">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Charity+(1).gif"
              alt="banner"
              style={{
                marginLeft:'100px',
                borderRadius: '20px',
              }}
            />
          </div>
          <div className="column level-left">
            <span
              className="subtitle is-3 box"
              style={{
                textAlign: 'right',
                opacity: 0.8,
                marginTop: '110px',
                boxShadow: '0px 0px 0px',
                borderRadius: '0px',
                borderBottom: '5px solid #FF8D2D',
                paddingBottom: '5px'
              }}
            >
              This Community shared the goods for the sake of <b>all</b>, you too can join the movement in a <i>second.</i>
            </span>
          </div>
        </div>
      </div>
      <div className="column is-main-content">
        <div className="container is-widescreen">
              <ProductList
              categories={categories}
              setProductFilter={setProductFilter}
              data={typesProducts}
              heading={'Shared-Goods'}
              setCollapsed={setCollapsed}
              isCollapsed={isCollapsed}
              />
        </div>
      </div>
      <div className='columns is-centered'
        style={{
            textAlign: 'center',
            opacity: 1,
            marginTop: '100px',
            marginBottom: '10px',
            borderRadius: '0px',
            backgroundColor: '',
            boxShadow: '0px 0px 0px'
      }}>
        <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/Community.gif" alt=""/>
      </div>
    </>
  )
}
