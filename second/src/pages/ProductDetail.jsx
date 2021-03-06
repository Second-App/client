import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../socket.io/socket.js';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  getOneProduct,
  addToWishlist,
  fetchCommunity,
  changeOwner,
  checkoutProduct,
  asyncAddToCart,
  updateSoldProduct,
} from '../store/actions';
import { Loading } from '../components';
import { useHistory } from 'react-router-dom';
import {
  sendMessage,
  fetchChatDetail,
  fetchChatsUsers,
  addCommunity,
} from '../store/actions';
import { ToastContainer, toast } from 'react-toastify';
import { updateAuction } from '../store/actions/products';

export default function ProductDetail() {
  const { community } = useSelector((state) => state.communityReducer);
  const { auctionStart } = useSelector((state) => state.productsReducer);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const socket = useContext(SocketContext);
  const history = useHistory();

  const { tokenMidtrans } = useSelector((state) => state.productsReducer);

  const [win, setWin] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  // const [startAuction, setStartAuction] = useState(null);
  // const [foundWinner, setFoundWinner] = useState(false);
  // const [winnerName, setWinnerName] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCommunity = () => {
    dispatch(
      addCommunity({
        ProductId: singleProduct.id,
      })
    );
    // history.push('/community')
  };

  const handleAddToWishlist = (data) => {
    dispatch(addToWishlist(data));
    toast.success(`${data.name} Added to wishlist`);
  };

  useEffect(() => {
    dispatch(fetchCommunity());
  }, []);

  const getDropDown = (setCollapsed, isCollapsed, filteredCommunityData) => {
    // console.log(filteredCommunityData, 'ini kucing <<<')
    return (
      <div
        className={'dropdown' + (!isCollapsed ? '' : ' is-active')}
        tabIndex="0"
        style={{
          marginBottom: '10px',
        }}
      >
        <div className="dropdown-trigger">
          <button
            className="button is-primary"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <span>Choose One User to Give</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          {filteredCommunityData?.map((com) => (
            <div key={com.id} className="dropdown-content">
              <a
                onClick={() => {
                  setCollapsed(!isCollapsed);
                  dispatch(
                    changeOwner(
                      com.User.id,
                      com.Product.id,
                      com.id,
                      com.Product.name
                    )
                  );
                }}
                className="dropdown-item"
              >
                {com.User.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const {
    singleProduct,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.productsReducer);

  const handleOnChatNonAuction = async (singleProduct) => {
    await dispatch(
      sendMessage({
        SenderId: singleProduct.UserId,
        ReceiverId: localStorage.id,
        message: `hello, how can I help?`,
      })
    );
    await dispatch(
      sendMessage({
        SenderId: localStorage.id,
        ReceiverId: singleProduct.UserId,
        message: `hello, I'm interested with ${singleProduct.name}`,
      })
    );
    await dispatch(fetchChatsUsers());
    await dispatch(fetchChatDetail(singleProduct.UserId));
    history.push('/chat');
  };

  const handleOnChatAuction = async (singleProduct) => {
    await dispatch(
      sendMessage({
        SenderId: singleProduct.UserId,
        ReceiverId: localStorage.id,
        message: `hello, how can I help?`,
      })
    );
    await dispatch(
      sendMessage({
        SenderId: localStorage.id,
        ReceiverId: singleProduct.UserId,
        message: `hello, There's something I want to ask on ${singleProduct.name} auction`,
      })
    );
    await dispatch(fetchChatsUsers());
    await dispatch(fetchChatDetail(singleProduct.UserId));
    history.push('/chat');
  };

  const handleOnBidAuction = async (event) => {
    event.preventDefault();
    const currentBid = Number(event.target.bidInput.value);
    await dispatch(
      updateAuction({
        id: singleProduct.id,
        currentBid,
        currentUserBidName: localStorage.name,
        currentUserBidId: localStorage.id,
      })
    );
    event.target.bidInput.value = '';
    await socket.emit('updateAuction', singleProduct.id);
  };

  const snap = ({ token, productId }) => {
    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log('SUCCESS', result);
        dispatch(updateSoldProduct(productId));
        dispatch(
          asyncAddToCart({
            ProductId: productId,
          })
        );
        toast.success(`Your payment successfully accepted`);
        history.push('/carts');
      },
      onPending: function (result) {
        console.log('Payment pending', result);
        toast.info(`Please complete your payment..`);
      },
      onError: function () {
        toast.error(`Your payment is declined`);
      },
      onClose: function () {
        /* You may add your own implementation here */
        // alert("you closed the popup without finishing the payment");
      },
    });
  };

  const handleCheckout = async (id) => {
    await dispatch(checkoutProduct(id, snap));
    // Open Snap popup with defined callbacks.
  };

  const handleAddToCart = (payload) => {
    dispatch(
      asyncAddToCart({
        ProductId: payload,
      })
    );
  };
  const checkIsUserProduct = () => {
    if (+singleProduct.UserId === +localStorage.id) {
      return true;
    }
    return false;
  };
  // console.log(checkIsUserProduct(), "<<<<<INFOOOOOOOOOOO")

  useEffect(() => {
    dispatch(getOneProduct(id));
    checkIsUserProduct();
    socket.on('getAuctionData', (data) => dispatch(getOneProduct(data)));
    socket.on('getAuctionWinnerToSelf', () => {
      setWin(true);
      dispatch(
        asyncAddToCart({
          UserId: localStorage.id,
          ProductId: singleProduct.id,
        })
      );
    });
    socket.on('getAuctionWinnerToOther', () => {
      setWin(true);
    });
    socket.on('getAuctionTime', (time) => {
      setStartTime(time.start);
      setEndTime(time.end);
    });
  }, [id, win, community.length]);

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

  console.log(community, 'hai ini <<<<<<<<< community');
  console.log(localStorage.id, 'ini cintah <<<<<<<<<');

  const filteredCommunityData = community?.filter((el) => {
    console.log(el, 'ini el<<<<<<<<<<<<<<<');
    return el.Product.UserId === +localStorage.id;
  });

  return (
    <div className="box mt-5"
      style={{
        boxShadow: '0px 0px 0px',
        marginBottom: '60px'
      }}
    >
      <div className="columns">
        <div className="column"
          style={{
          }}
        >
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
            <div
              className="level"
              style={{
                marginBottom: '0px',
                marginTop: '0px',
              }}
            >
              <span className="tag is-small is-link level-left" style={{}}>
                <p style={{ textAlign: 'left' }}>{productType}</p>
              </span>
              <span className="level-right">
                <a
                  className="card-footer-item"
                  onClick={() => handleAddToWishlist(singleProduct)}
                  style={{
                    pointerEvents: checkIsUserProduct() ? 'none' : '',
                    cursor: checkIsUserProduct() ? 'default' : '',
                  }}
                >
                  <span className="icon is-small">
                    <i className="fas fa-heart"></i>
                  </span>
                </a>
                {singleProduct.TypeId === 3 ? (
                  ''
                ) : (
                  <a
                    className="card-footer-item"
                    style={{
                      pointerEvents: checkIsUserProduct() ? 'none' : '',
                      cursor: checkIsUserProduct() ? 'default' : '',
                    }}
                  ></a>
                )}
              </span>
            </div>
            <div
              className="subtitle"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              {singleProduct.TypeId === 1 ? (
                <>Rp. {Number(singleProduct.price).toLocaleString('id')},-</>
              ) : (
                ''
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
              <div>
                <button
                  className="button"
                  onClick={() => handleCheckout(singleProduct.id)}
                  disabled={checkIsUserProduct()}
                  style={{
                    color: 'white'
                  }}
                >
                  Buy Now
                </button>
                <button
                  disabled={checkIsUserProduct()}
                  className="button is-white"
                  style={{
                    marginLeft: '10px',
                    border: '1px solid #FF8D2D',
                    color: '#FF8D2D'
                  }}
                  onClick={() => {
                    handleOnChatNonAuction(singleProduct);
                  }}
                >
                  <span style={{
                    marginRight: '5px'
                  }}>
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
                      {!win ? (
                        <>
                          <div className="title is-4">
                            Current Bid : Rp.{' '}
                            {Number(singleProduct.currentBid).toLocaleString(
                              'id'
                            )},-
                          </div>
                          <div>
                            Highest Bidder Name :{' '}
                            {singleProduct.currentUserBidName
                              ? singleProduct.currentUserBidName
                              : 'No one has bid. Be the first to Bid!'}
                          </div>
                          <div>
                            Auction Start Date : {startTime ? startTime : '-'}
                          </div>
                          <div>
                            Auction End Date :{' '}
                            {endTime ? endTime.toLocaleString() : '-'}
                          </div>
                          <label
                            className="label"
                            style={{ marginTop: '20px' }}
                          >
                            Your Bid
                          </label>
                          <div className="control">
                            <form
                              onSubmit={async (event) => {
                                if (
                                  Number(event.target.bidInput.value - 10000) >=
                                  Number(singleProduct.currentBid)
                                ) {
                                  await handleOnBidAuction(event);
                                  if (!startTime) {
                                    setTimeout(() => {
                                      socket.emit('auctionWinnerToOther');
                                      socket.emit('auctionWinnerToSelf');
                                    }, 15000);
                                    socket.emit('updateAuctionTime', {
                                      start: new Date().toLocaleString('id'),
                                      end: new Date(
                                        Date.now() + 7 * 24 * 60 * 60 * 1000
                                      ).toLocaleString('id'),
                                    });
                                  }
                                } else {
                                  await handleOnBidAuction(event);
                                }
                              }}
                            >
                              <input
                                className="input"
                                type="number"
                                name="bidInput"
                                placeholder="Input Your Bid Here"
                                disabled={
                                  Number(singleProduct.UserId) ===
                                  Number(localStorage.id)
                                }
                              />
                            </form>
                          </div>
                          <div
                            className=""
                            style={{ marginTop: '15px' }}
                          >
                            <button
                              className="button"
                                style={{
                                color:'white'
                              }}  
                              disabled={
                                Number(singleProduct.UserId) ===
                                Number(localStorage.id)
                              }
                            >
                              Bid
                            </button>
                            <button
                              className="button is-white"
                                style={{
                                  marginLeft: '10px',
                                  border: '1px solid #FF8D2D',
                                  color: '#FF8D2D'
                                }}
                              disabled={
                                Number(singleProduct.UserId) ===
                                Number(localStorage.id)
                              }
                              onClick={() => handleOnChatAuction(singleProduct)}
                            >
                              <span style={{ marginRight: '5px' }}>
                                <i class="fas fa-comment-dots"></i>
                              </span>
                              Chat The Seller
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            Winner of this auction is{' '}
                            {singleProduct.currentUserBidName}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    {singleProduct.UserId === +localStorage.id ? (
                          <>
                            <span className="tag" style={{ backgroundColor: 'white' }}>This is your own product</span>
                            <div className="mt-4">
                              {!filteredCommunityData.length
                                ? ''
                                : getDropDown(
                                    setIsCollapsed,
                                    isCollapsed,
                                    filteredCommunityData
                              )}
                            </div>
                          </>
                    ) : (
                      <>
                        <div>
                          <button
                            className="button"
                                  onClick={handleAddToCommunity}
                                  style={{
                                    color: 'white'
                                  }}
                          >
                                  I Need This
                          </button>
                          <button
                            className="button is-white"
                                  style={{
                                    marginLeft: '10px',
                                    border: '1px solid #FF8D2D',
                                    color: '#FF8D2D'}}
                            onClick={() =>
                              handleOnChatNonAuction(singleProduct)
                            }
                          >
                                  <span style={{
                                    marginRight: ' 5px '
                                  }}>
                              <i class="fas fa-comment-dots"></i>
                            </span>
                            Chat The Owner
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
