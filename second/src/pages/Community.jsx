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
      <span
        className="title is-4 box"
        style={{
          textAlign: 'center',
          opacity: 1,
          marginTop:'30px',
          marginBottom: '30px',
          backgroundColor: '#AA89D2',
        }}
      >
        Together as a Community.
      </span>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-half level-rigth">
            <img
              className="image"
              src="https://secondh8.s3-ap-southeast-1.amazonaws.com/banner/com3Banner.jpg"
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
                marginTop: '130px',
                backgroundColor: '#FFB979',
              }}
            >
              This Community shared the goods for the sake of all, you too can join the movement in a second.
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
    </>
  )
}
