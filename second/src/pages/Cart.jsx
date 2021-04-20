import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart, deleteOneCart } from '../store/actions'
import { Loading } from '../components'

export default function Cart() {
  const { carts, error, loading } = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  const handleDeleteCart = (id) => {
    dispatch(deleteOneCart(id))
  }

  if (error) return <div>error</div>
  if (loading) return <Loading />

  console.log(carts)

  return (
    <>
      <div className="columns mt-4">
        <div className="column is-full title is-3">Your Cart</div>
      </div>
      {carts.map((cart) => (
        <div className="box" key={cart.id}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={cart.Product.imageUrl} alt="product-cart" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Harusnya ini nama penjual?</strong>
                  <br />
                  {cart.Product.description}
                </p>
              </div>
              <div className="columns">
                    <div className="column is-6 mt-2">
                    <button class="button is-primary is-rounded is-fullwidth is-flex is-justify-content-center">
                        Checkout
                      </button>
                    </div>
                    <div className="column is-flex is-flex-justify-content-start mt-1">
                      <a className="level-item" aria-label="retweet" onClick={() => handleDeleteCart(cart.id)}>
                        <span className="icon is-large">
                          <i
                            className="fas fa-lg fa-trash"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
            </div>
          </article>
        </div>
      ))}
    </>
  )
}
