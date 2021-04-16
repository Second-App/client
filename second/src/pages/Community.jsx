import React from 'react'
import {CategoryList, ProductList} from '../components'

export default function Community() {
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
  return (
    <>
      <CategoryList data={dummyCategories} />
      <ProductList data={dummyCategories} heading={"Giveaway"}/>
    </>
  )
}
