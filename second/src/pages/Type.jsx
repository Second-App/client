import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { ProductList, Loading } from '../components'
import { GET_ONE_TYPE, FETCH_ALL_PRODUCTS } from '../services'

export default function Type() {
  const { id } = useParams()
  const {data, error, loading, refetch} = useQuery(GET_ONE_TYPE, {
    variables: {
      id
    }
  })
  const {data: productsData, error: productsError, loading: productsLoading} = useQuery(FETCH_ALL_PRODUCTS)
  
  if(loading || productsLoading) return <Loading/>
  if(error || productsError) return <div>error</div>

  const typeName = data.oneTypes.name

  return <ProductList data={productsData.products} heading={typeName} />
}
