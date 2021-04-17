import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, getOneType } from '../store/actions'
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
    dispatch(fetchProducts())
  }, [id])
 

  if (loading || productsLoading) return <Loading />
  if (error || productsError) return <div>error</div>

  return <ProductList data={products} heading={singleType?.name} />
}
