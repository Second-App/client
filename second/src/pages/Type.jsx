import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getOneType } from '../store/actions'
import { ProductList, Loading } from '../components'

export default function Type() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { singleType, loading, error } = useSelector(
    (state) => state.transactionTypesReducer
  )
    
  const { products, loading: productsLoading, error: productsError } = useSelector(
    (state) => state.productsReducer
  )
  
  useEffect(() => {
    dispatch(getOneType(id))
  }, [id, products.length])

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])
  
  if (!singleType.length) return <Loading />
  if (error) return <div>error</div>

  return <ProductList data={singleType} heading={singleType[0].Type.name} />
}
