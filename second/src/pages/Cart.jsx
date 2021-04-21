import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, deleteOneCart, checkoutProduct, updateSoldProduct, updateSoldConfirmed } from '../store/actions';
import { Loading } from '../components';
import { toast } from 'react-toastify';

export default function Cart() {
  const { carts, error, loading } = useSelector((state) => state.cartReducer);
  const { tokenMidtrans } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  console.log(carts, '>>>>>>>>>>>>>>>>>> CARTS');

  useEffect(() => {
    dispatch(fetchCart());
  }, [tokenMidtrans]);

  const handleDeleteCart = (id) => {
    dispatch(deleteOneCart(id));
  };

  const handleSoldConfirmed = (payload) => {
    dispatch(updateSoldConfirmed(payload));
  };

  const handleCheckout = async (id) => {
    await dispatch(checkoutProduct(id, snap));
  };

  const snap = ({ token, productId }) => {
    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log('SUCCESS', result);
        dispatch(updateSoldProduct(productId));
        toast.success(`Successfully accepted the payment`);
      },
      onPending: function (result) {
        console.log('Payment pending', result);
        toast.info(`Complete your payment..`);
      },
      onError: function () {
        toast.error(`Your payment declined`);
      },
      onClose: function () {
        /* You may add your own implementation here */
        // alert("you closed the popup without finishing the payment");
      },
    });
  };

  if (error) return <div>error</div>;
  if (loading || !carts.length) return <Loading />;

  return (
    <div
      className='columns is-centered is-multiline'
      style={{
        marginTop: '40px',
        marginBottom: '40px'
      }}>
        <div
          className='column'
          style={{
            marginLeft: '100px',
            marginRight: '25px'
          }}>
            <div className='title mr-2 is-3'>Your Cart</div>
            <div className='box'
            style={{
              height: '100vh',
              boxShadow: '0px 0px 0px',
              overflowY: 'auto',
              border: '1px solid #7300FC',
             }} 
            >
            {carts.map((cart) =>
              cart.Product.sold === false && cart.Product.available === true ? (
                <div
                  className='box'
                  key={cart.id}
                  style={{
                    boxShadow: '0px 0px 0px',
                    marginBottom: '-10px'
                  }}>
                  <article className='media' style={{}}>
                    <div
                      className='media-left'
                      style={{
                        height: '250px',
                        width: '250px',
                        display: 'flex',
                      }}>
                      <figure
                        className='image'
                        style={{
                          objectFit: 'cover',
                        }}>
                        <img src={cart.Product.imageUrl} alt='product-cart' />
                      </figure>
                    </div>
                    <div className='media-content'>
                      <div className='content box' style={{
                        boxShadow: '0px 0px 0px',
                        marginTop: '-20px'
                      }}>
                        <p>
                          <strong className='title is-4'>{cart.Product.name}</strong>
                          <br />
                          <br />
                          <i class='fas fa-map-marked-alt'></i>
                          <span className='ml-2'>{cart.Product.location}</span>
                          <br />
                          <i class='fas fa-money-bill-wave'></i>
                          <span className='ml-2'>Rp. {Number(cart.Product.price).toLocaleString('id')},-</span>
                        </p>
                        <div className='columns'>
                          <div className='column is-6 mt-2'>
                            <button class='button is-primary is-fullwidth is-flex is-justify-content-center' onClick={() => handleCheckout(cart.Product.id)}>
                              Checkout
                            </button>
                          </div>
                          <div className='column is-flex is-flex-justify-content-start mt-1'>
                            <a className='level-item' aria-label='retweet' onClick={() => handleDeleteCart(cart.id)}>
                              <span className='icon is-large'>
                                <i className='fas fa-lg fa-trash' aria-hidden='true'></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ) : (
                ''
              )
            )}
            {carts.map((cart) =>
              cart.Product.sold === true && cart.Product.available === true ? (
                <div
                  className='box'
                  key={cart.id}
                  style={{
                    boxShadow: '0px 0px 0px',
                    marginBottom: '-55px'
                  }}>
                  <article className='media' style={{}}>
                    <div
                      className='media-left'
                      style={{
                        height: '250px',
                        width: '250px',
                        display: 'flex',
                      }}>
                      <figure
                        className='image'
                        style={{
                          objectFit: 'cover',
                        }}>
                        <img src={cart.Product.imageUrl} alt='product-cart' />
                      </figure>
                    </div>
                    <div className='media-content'>
                      <div className='content box' style={{
                        boxShadow: '0px 0px 0px',
                        marginTop: '-20px'
                      }}>
                        <p>
                          <strong className='title is-4'>{cart.Product.name}</strong>
                          <br />
                          <br />
                          <i class='fas fa-map-marked-alt'></i>
                          <span className='ml-2'>{cart.Product.location}</span>
                          <br />
                          <i class='fas fa-money-bill-wave'></i>
                          <span className='ml-2'>Rp. {Number(cart.Product.price).toLocaleString('id')},-</span>
                        </p>
                        <div className='columns'>
                          <div className='column is-6 mt-2'>
                            <button
                              class='button'
                              style={{color: 'white'}}
                              onClick={() => handleSoldConfirmed({ price: Number(cart.Product.price), UserId: cart.Product.UserId, ProductId: cart.Product.id })}>
                              Product Accepted
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ) : (
                ''
              )
          )}
        </div>
      </div>
        
      <div className='column'
        style={{
          marginRight: '100px',
          marginLeft: '25px'
        }}
      >
          <div className='title mr-2 is-3'>Your Purchased History</div>
          <div className='box'
            style={{
              height: '100vh',
              boxShadow: '0px 0px 0px',
              overflowY: 'auto',
              border: '1px solid #7300FC',
             }} 
          >
            {carts.map((cart) =>
              cart.Product.sold === true && cart.Product.available === false ? (
                <div
                  className='box'
                  key={cart.id}
                  style={{
                    boxShadow: '0px 0px 0px',
                    marginBottom: '-55px'
                  }}>
                  <article className='media' >
                    <div
                      className='media-left'
                      style={{
                        height: '250px',
                        width: '250px',
                        display: 'flex',
                      }}>
                      <figure
                        className='image'
                        style={{
                          objectFit: 'cover',
                        }}>
                        <img src={cart.Product.imageUrl} alt='product-cart' />
                      </figure>
                    </div>
                    <div className='media-content'
                      
                    >
                      <div className='content box' style={{
                        boxShadow: '0px 0px 0px',
                        marginTop: '-20px'
                      }}>
                        <p>
                          <strong className='title is-4'>{cart.Product.name}</strong>
                          <br />
                          <br />
                          <i class='fas fa-map-marked-alt'></i>
                          <span className='ml-2'>{cart.Product.location}</span>
                          <br />
                          <i class='fas fa-money-bill-wave'></i>
                          <span className='ml-2'>Rp. {Number(cart.Product.price).toLocaleString('id')},-</span>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
    </div>
  );
}
