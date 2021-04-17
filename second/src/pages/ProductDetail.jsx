import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_ONE_PRODUCT } from '../services'
import {Loading} from '../components'

export default function ProductDetail() {
  const { id } = useParams()
  const {data, error, loading, refetch} = useQuery(GET_ONE_PRODUCT, {
    variables: {
      id
    }
  })

  if(error) return <div>error</div>
  if(loading) return <Loading/>

  const product = data.product

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3 mt-4">
            <img
              src={product.imageUrl}
              alt="product"
            />
          </figure>
        </div>
        <div className="column">
          <div className="container is-flex is-flex-direction-column is-justify-content-space-between">
            <div className="mt-4">
              <h1 className="title is-4">Description</h1>
            </div>
            <div className="content mt-4">
              {product.description}
            </div>
            <button className="button is-primary is-rounded is-medium is-fullwidth is-flex is-justify-content-center">
              Action Type
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
