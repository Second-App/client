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
      <ProductList
        categories={categories}
        setProductFilter={setProductFilter}
        data={typesProducts}
        heading={'Share-Goods'}
        setCollapsed={setCollapsed}
        isCollapsed={isCollapsed}
      />
    </>
  )
}
