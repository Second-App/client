import React, { useEffect } from 'react'

export default function ImageCard({ data, handleDeleteWishlist, handleDeleteProduct, handleEditProduct }) {
  
  return (
    <div className="column is-5" >
        <figure className="image is-5by3">
          <img
            src={data.Product ? data.Product.imageUrl : data.imageUrl}
            alt="Favourites"
            style={{
              borderRadius: '5px',
              boxShadow: '0px 0px 7px #FF8D2D',
              objectFit: 'cover'
            }}
          />
          {
            data.Product ? 
            <button
            onClick={() => handleDeleteWishlist(data.id)}
            className="button is-outlined"
            style={{top: -125, right: -184}}
            >
              <span className= "icon  is-16x16">
                <i className= 'fas fa-trash' />
              </span>
            </button>
            :
            <>
              <button
              onClick={() => handleDeleteWishlist(data.id)}
              className="button is-outlined"
              style={{top: -80, right: -180}}
              >
                <span className= "icon  is-16x16">
                  <i className= 'fas fa-edit' />
                </span>
              </button>
              <button
              onClick={() => handleDeleteWishlist(data.id)}
              className="button is-outlined"
              style={{top: -125, right: -152}}
              >
                <span className= "icon  is-16x16">
                  <i className= 'fas fa-trash' />
                </span>
              </button>
            </>
          }
          
        </figure>
    </div>
  )
}