import React from 'react'
import { useParams } from 'react-router'
import { ProductList, Loading } from '../components'
import { useQuery } from '@apollo/client'
import { FETCH_SINGLE_CATEGORY, FETCH_ALL_PRODUCTS } from '../services'

export default function Category() {
  const { id } = useParams()
  const { data, error, loading, refetch } = useQuery(FETCH_SINGLE_CATEGORY, {
    variables: {
      id
    }
  })
  const {data: productsData, error: productsError, loading: productsLoading} = useQuery(FETCH_ALL_PRODUCTS)
  
  if(loading || productsLoading) return <Loading/>
  if(error || productsError) return <div>error</div>

  const categoryName = data.category.name
  const products = productsData.products
  
  return (
    <ProductList
      data={products}
      params={id}
      heading={categoryName}
    />
  )
}
