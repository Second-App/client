import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { ProductList, Loading } from '../components'
import { getOneCategory, fetchProducts } from '../store/actions'

export default function Category() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { singleCategory, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )

  const { products, loading: productsLoading, error: productsError } = useSelector(
    (state) => state.productsReducer
  )
  
  useEffect(() => {
    dispatch(getOneCategory(id))
    dispatch(fetchProducts())
  }, [id])

  if (loading) return <Loading />
  if (error) return <div>error</div>

  return <ProductList data={products} params={id} heading={singleCategory.name} />
}
