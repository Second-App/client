import React from 'react'
import { useParams } from 'react-router'
import {ProductList} from '../components'

export default function Type() {
  const { id } = useParams()
  const dummyData = [
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
  const dummyTypes = ["Jual-Beli", "Lelang", "Tukar-Tambah", "Community"]
  return <ProductList data={dummyData} heading={dummyTypes[+id -1]} />
}
