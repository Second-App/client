import React from 'react'
import { useParams } from 'react-router'
import { ProductList } from '../components'
import { useQuery, useMutation } from '@apollo/client'

export default function Category() {
  const { id } = useParams()
  // const { data, error, loading, refetch } = useQuery()
  const dummyHeading = ['Fashion', 'Technology', 'Kecantikan']
  const dummyCategories = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    10,
    11,
    12,
  ]
  return <ProductList data={dummyCategories} params={id} heading={dummyHeading[+id - 1]} />
}
