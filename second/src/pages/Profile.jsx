import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileById, fetchWishlist, deleteWishlist } from '../store/actions'
import { Loading } from '../components'

export default function Profile() {
  const favourites = ['1', '2', '3', '4', 5, 6, 7, 8]
  const id = localStorage.id
  const dispatch = useDispatch()
  const { userDetails } = useSelector((state) => state.userReducer)
  const { data } = useSelector( state => state.wishlists)

  useEffect(() => {
    dispatch(getProfileById(id))
    dispatch(fetchWishlist())
  }, [dispatch])

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])
  
  function handleDeleteWishlist(value) {
    dispatch(deleteWishlist(value))
    dispatch(fetchWishlist())
  }

  if (!userDetails) return <Loading />
  
  return (
    <div className="box mt-5">
      <div className="columns is-6">
        <div className="column is-flex is-flex-direction-column is-justify-content-start is-align-items-center">
          <figure className="image is-128x128">
            <img
              className="is-rounded"
              src={userDetails.imageUrl}
              alt="Placeholder"
            />
          </figure>
          <h1 className="title is-4">{userDetails.name}</h1>
          <button className="button is-light is-rounded">Edit Profile</button>
        </div>
        <div className="column is-flex is-6 mt-6 is-flex-direction-column">
          <div className="columns">
            <h1 className="title is-4 ml-3">Wishlist</h1>
          </div>
          <div className="columns mt-2 is-flex is-flex-wrap-wrap my-2">
            {data?.map((wishlist, idx) => (
              <div key={idx} className="column is-3" >
                <figure className="image is-128x128">
                  <img
                    src={wishlist.Product.imageUrl}
                    alt="Favourites"
                  />
                  <button onClick={() => handleDeleteWishlist(wishlist.id)} className="button is-small is-danger">
                    Delete
                  </button>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
