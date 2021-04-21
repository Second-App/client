/** @format */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ImageCard({ data, handleDeleteWishlist, handleDeleteProduct, handleEditProduct }) {
    const [isHovered, setHover] = useState(false);
    const history = useHistory();

    function handleImageClick(id) {
        history.push(`/products/${id}`);
    }

    return (
        <div className='column is-4 ' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <figure className='image is-5by3 image-container'>
                <img
                    onClick={() => handleImageClick(data.id)}
                    src={data.Product ? data.Product.imageUrl : data.imageUrl}
                    alt='Favourites'
                    style={{
                        borderRadius: '5px',
                        boxShadow: '0px 0px 7px #FF8D2D',
                        objectFit: 'cover',
                    }}
                />
                {data.Product
                    ? isHovered && (
                          <button
                              onClick={() => handleDeleteWishlist(data.id)}
                              className='button-icon is-outlined'
                              style={{
                                  position: 'absolute',
                                  top: '5px',
                                  right: '5px',
                              }}>
                              <span className='icon  is-16x16'>
                                  <i className='fas fa-trash' />
                              </span>
                          </button>
                      )
                    : isHovered && (
                          <div>
                              <button
                                  onClick={() => handleEditProduct(data)}
                                  className='button is-outlined'
                                  style={{
                                      position: 'absolute',
                                      top: '20px',
                                      right: '5px',
                                  }}>
                                  <span className='icon  is-16x16'>
                                      <i className='fas fa-edit' style={{ color: 'white' }} />
                                  </span>
                              </button>
                              <button
                                  onClick={() => handleDeleteProduct(data.id)}
                                  className='button is-outlined'
                                  style={{
                                      position: 'absolute',
                                      top: '70px',
                                      right: '5px',
                                  }}>
                                  <span className='icon  is-16x16'>
                                      <i className='fas fa-trash' />
                                  </span>
                              </button>
                          </div>
                      )}
            </figure>
        </div>
    );
}
