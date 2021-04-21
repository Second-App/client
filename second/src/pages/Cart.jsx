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

  if (error) return <div>error</div>;
  if (loading || !carts.length) return <Loading />;

  return (
    <>
      <div className='columns mt-4'>
        <div className='column is-full title is-3'>Your Cart</div>
      </div>

      {carts.map((cart) =>
        cart.Product.sold === false && cart.Product.available === true ? (
          <div className='box' key={cart.id}>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-128x128'>
                  <img src={cart.Product.imageUrl} alt='product-cart' />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>{cart.Product.name}</strong>
                    <br />
                    description: {cart.Product.description}
                    <br />
                    location: {cart.Product.location}
                    <br />
                    invoice: Rp. {Number(cart.Product.price).toLocaleString('id')},-
                    <br />
                    ID seller: {cart.Product.UserId}
                  </p>
                </div>
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
            </article>
          </div>
        ) : (
          ''
        )
      )}
      {carts.map((cart) =>
        cart.Product.sold === true && cart.Product.available === true ? (
          <div className='box' key={cart.id}>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-128x128'>
                  <img src={cart.Product.imageUrl} alt='product-cart' />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>{cart.Product.name}</strong>
                    <br />
                    description: {cart.Product.description}
                    <br />
                    location: {cart.Product.location}
                    <br />
                    invoice: Rp. {Number(cart.Product.price).toLocaleString('id')},-
                    <br />
                    ID seller: {cart.Product.UserId}
                  </p>
                </div>
                <div className='columns'>
                  <div className='column is-6 mt-2'>
                    <button
                      class='button is-warning is-rounded is-fullwidth is-flex is-justify-content-center'
                      onClick={() => handleSoldConfirmed({ price: Number(cart.Product.price), UserId: cart.Product.UserId, ProductId: cart.Product.id })}>
                      Confirm Accepted
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
            </article>
          </div>
        ) : (
          ''
        )
      )}
      <div className='columns mt-4'>
        <div className='column is-full title is-3'>Your History Purcashed</div>
      </div>
      {carts.map((cart) =>
        cart.Product.sold === true && cart.Product.available === false ? (
          <div className='box' key={cart.id}>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-128x128'>
                  <img src={cart.Product.imageUrl} alt='product-cart' />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>{cart.Product.name}</strong>
                    <br />
                    description: {cart.Product.description}
                    <br />
                    location: {cart.Product.location}
                    <br />
                    invoice: Rp. {Number(cart.Product.price).toLocaleString('id')},-
                    <br />
                    ID seller: {cart.Product.UserId}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          ''
        )
      )}
    </>
  );
}
