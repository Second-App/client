import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryList, ProductList, Loading } from '../components'
import { fetchCategories } from '../store/actions'

export default function Community() {
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  if(loading) return <Loading/>
  if(error) return <div>error</div>
  
  return (
    <>
      <CategoryList data={categories} />
      <ProductList data={categories} heading={'Giveaway'} />
    </>
  )
}
