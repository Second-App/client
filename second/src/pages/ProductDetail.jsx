import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getOneProduct } from '../store/actions';
import { Loading } from '../components';
import { useHistory } from 'react-router-dom';
import { sendMessage, fetchChatDetail } from '../store/actions';

export default function ProductDetail() {
  const history = useHistory();

  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    singleProduct,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.productsReducer);

  const handleOnBuy = () => {};

  const handleOnChatNonAuction = async (singleProduct) => {
    await dispatch(
      sendMessage({
        SenderId: localStorage.id,
        ReceiverId: singleProduct.UserId,
        message: `hello, I'm interested with ${singleProduct.name}`,
      })
    );
    await dispatch(fetchChatDetail(localStorage.SenderId));
    history.push('/chat');
  };

  const handleOnChatAuction = async (singleProduct) => {
    await dispatch(
      sendMessage({
        SenderId: localStorage.id,
        ReceiverId: singleProduct.UserId,
        message: `hello, There's something I want to ask on ${singleProduct.name} auction`,
      })
    );
    await dispatch(fetchChatDetail(localStorage.SenderId));
    history.push('/chat');
  };

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    //untuk get highest bidder dan juga get current bid
  }, []);

  const [productType, setproductType] = useState('Full-Payment');

  useEffect(() => {
    switch (singleProduct.TypeId) {
      case 1:
        setproductType('Full-Payment');
        break;
      case 2:
        setproductType('Auction');
        break;
      case 3:
        setproductType('Shared-Goods');
        break;
      default:
        break;
    }
  }, [singleProduct.TypeId]);

  if (productsError) return <div>error</div>;
  if (productsLoading) return <Loading />;

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3 mt-4">
            <img
              src={singleProduct.imageUrl}
              alt="product"
              style={{
                objectFit: 'cover',
                boxShadow: '0px 0px 4px #AA89D2',
              }}
            />
          </figure>
        </div>
        <div className="column">
          <div className="container is-flex is-flex-direction-column is-justify-content-space-between">
            <div className="title is-2">{singleProduct.name}</div>
            <div>
              <span className="tag is-small is-link" style={{}}>
                <p style={{ textAlign: 'left' }}>{productType}</p>
              </span>
            </div>
            <div
              className="subtitle"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              {singleProduct.TypeId === 2 ? (
                ''
              ) : (
                <>Rp. {Number(singleProduct.price).toLocaleString('id')},-</>
              )}
            </div>
            <div className="subtitle" style={{ fontSize: '17px' }}>
              {singleProduct.condition} / 5 <i className="far fa-star"></i>
            </div>
            <div className="subtitle">{singleProduct.location}</div>
            <div className="">
              <h1 className="title is-4">Description</h1>
            </div>
            <div className="content mt-4">{singleProduct.description}</div>
            {singleProduct.TypeId === 1 ? (
              <div className="footer">
                <button className="button" onClick={handleOnBuy}>
                  Buy
                </button>
                <button
                  className="button"
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleOnChatNonAuction(singleProduct)}
                >
                  <span style={{ marginRight: '5px' }}>
                    <i class="fas fa-comment-dots"></i>
                  </span>
                  Chat The Seller
                </button>
              </div>
            ) : (
              <>
                {singleProduct.TypeId === 2 ? (
                  <div>
                    <div
                      className="box"
                      style={{
                        border: '2px solid #FF8D2D',
                      }}
                    >
                      <div>Current Bid :</div>
                      <div>Highest Bidder Id :</div>
                      <label className="label" style={{ marginTop: '20px' }}>
                        Your Bid
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          placeholder="Input Your Bid Here"
                        />
                      </div>
                      <footer
                        className="card-footer"
                        style={{ marginTop: '15px' }}
                      >
                        <button className="button">Bid</button>
                        <button
                          className="button"
                          style={{ marginLeft: '10px' }}
                          onClick={() => handleOnChatAuction(singleProduct)}
                        >
                          <span style={{ marginRight: '5px' }}>
                            <i class="fas fa-comment-dots"></i>
                          </span>
                          Chat The Seller
                        </button>
                      </footer>
                    </div>
                  </div>
                ) : (
                  <footer class="card-footer">
                    <button className="button">I Need This</button>
                    <div>
                      <button
                        className="button"
                        style={{ marginLeft: '10px' }}
                        onClick={() => handleOnChatNonAuction(singleProduct)}
                      >
                        <span style={{ marginRight: '5px' }}>
                          <i class="fas fa-comment-dots"></i>
                        </span>
                        Chat The Owner
                      </button>
                    </div>
                  </footer>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
