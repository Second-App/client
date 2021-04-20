import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, deleteOneCart, checkoutProduct } from '../store/actions';
import { Loading } from '../components';
import { toast } from 'react-toastify';

export default function Cart() {
  const { carts, error, loading } = useSelector((state) => state.cartReducer);
  const { tokenMidtrans } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [tokenMidtrans]);

  const handleDeleteCart = (id) => {
    dispatch(deleteOneCart(id));
  };

  const snap = (token) => {
    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log('SUCCESS', result);
        toast.success(`your payment successfully accepted`);
      },
      onPending: function (result) {
        console.log('Payment pending', result);
        toast.info(`complete your payment..`);
      },
      onError: function () {
        toast.error(`your payment declined`);
      },
      onClose: function () {
        /* You may add your own implementation here */
        // alert("you closed the popup without finishing the payment");
      },
    });
  };

  const handleCheckout = async (id) => {
    await dispatch(checkoutProduct(id, snap));
    console.log(tokenMidtrans);
    console.log('opening snap popup:');
    // Open Snap popup with defined callbacks.
  };

  if (error) return <div>error</div>;
  if (loading) return <Loading />;

  return (
    
    <div className="columns is-centered is-multiline"
      style={{
        marginTop:'20px'
      }}
    >
      <div className="box theChat mt-0"
        style={{
          height: '100vh',
          padding: '15px'
        }}
      >
        <div className='box '
        style={{
          border: '1px solid #7300FC',
          marginTop: '20px',
          }}
        >
          <div className='title mr-2 is-3'>Your Cart</div>
        </div>
        {carts.map((cart) => (
          <div className='box' key={cart.id}
            style={{
              border: '1px solid #7300FC',
            }}
          >
            <article className='media'
              style={{
              }}
            >
              <div className='media-left'
                style={{
                  height: '250px',
                  width: '250px',
                  display: 'flex',
                }}
              >
                <figure className='image'
                  style={{
                    objectFit: 'cover',
                  }}
                >
                  <img src={cart.Product.imageUrl} alt='product-cart' />
                </figure>
              </div>
              <div className='media-content'
              >
                <div className='content box'
                  style={{
                  }}
                >
                  <p>
                    <strong className="title is-4">{cart.Product.name}</strong>
                    <br /><br/>
                    <i class="fas fa-map-marked-alt"></i>
                    <span className="ml-2">
                        {cart.Product.location}
                      </span>
                    <br />
                    <i class="fas fa-money-bill-wave"></i>
                    <span className="ml-2">
                       Rp. {Number(cart.Product.price).toLocaleString('id')},-
                    </span>
                  </p>
                  <div className='columns'>
                    <div className='column is-6 mt-2'>
                      <button class='button is-primary is-rounded is-fullwidth is-flex is-justify-content-center' onClick={() => handleCheckout(cart.Product.id)}>
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
        ))}
      </div>
    </div>
  );
}
