import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { CategoryList, ProductList, Loading } from '../components'
import { FETCH_CATEGORIES } from '../services'

export default function Community() {
  const { data, error, loading, refetch } = useQuery(FETCH_CATEGORIES)
  if(loading) return <Loading/>
  if(error) return <div>error</div>
  
  return (
    <>
      <CategoryList data={data.categories} />
      <ProductList data={data.categories} heading={'Giveaway'} />
    </>
  )
}
