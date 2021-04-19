import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductConfirmation } from '../helpers'
import { deleteProductById, addToWishlist } from '../store/actions'

export default function ProductCard({ data }) {
  const dispatch = useDispatch()

  const handleDeleteProduct = () => {
    dispatch(deleteProductById(data.id))
  }
  const handleAddToWishlist = (data) => {
    dispatch(addToWishlist(data))
  }

  return (
    <div
      className="column is-one-quarter mt-2"
      key={data.id}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <figure className="image">
          <img
            className="image"
            src={data.imageUrl}
            alt={data.name}
            style={{
              borderRadius: '20px',
              boxShadow: '0px 0px 7px #FF8D2D',
              height: '250px',
              width: '250px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
          {+data?.UserId === +localStorage.id ? (
            <button onClick={() => deleteProductConfirmation(handleDeleteProduct)} className="button is-danger">
              Delete
            </button>
          ) : (
            <button onClick={() => handleAddToWishlist(data) } className="button is-danger">
              Add to wishlist
            </button>
          )}
        </figure>
        <p
          className="subtitle"
          style={{ textAlign: 'left', marginTop: '15px', textAlign: 'center' }}
        >
          {data.name}
        </p>
      </div>
    </div>
  )
}
