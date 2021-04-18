import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getOneProduct } from '../store/actions'
import { Loading } from '../components'

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { singleProduct, loading: productsLoading, error: productsError } = useSelector(
    (state) => state.productsReducer
  )

  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [id])


  if (productsError) return <div>error</div>
  if (productsLoading) return <Loading />

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3 mt-4">
            <img src={singleProduct.imageUrl} alt="product" />
          </figure>
        </div>
        <div className="column">
          <div className="container is-flex is-flex-direction-column is-justify-content-space-between">
            <div className="mt-4">
              <h1 className="title is-4">Description</h1>
            </div>
            <div className="content mt-4">{singleProduct.description}</div>
            <button className="button is-primary is-rounded is-medium is-fullwidth is-flex is-justify-content-center">
              Action Type
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
