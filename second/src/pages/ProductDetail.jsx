import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getOneProduct } from '../store/actions';
import { Loading } from '../components';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    singleProduct,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.productsReducer);

  const handleOnBuy = () => {};

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])
  
  const [productType, setproductType] = useState('Full-Payment')
  
  useEffect(() => {
    switch (singleProduct.TypeId) {
      case 1:
        setproductType('Full-Payment')
        break;
      case 2:
        setproductType('Auction')
        break;
      case 3:
        setproductType('Shared-Goods')
        break;
      default:
        break;
    }
  }, [singleProduct.TypeId])
  
  if (productsError) return <div>error</div>;
  if (productsLoading) return <Loading />;

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3 mt-4">
            <img src={singleProduct.imageUrl} alt="product"
              style={{
                objectFit: 'cover',
                boxShadow: '7px 10px 1px #AA89D2',
              }}
            />
          </figure>
        </div>
        <div className="column">
          <div className="container is-flex is-flex-direction-column is-justify-content-space-between">
            <div className='title is-2'>
              {singleProduct.name}
            </div>
            <div>
              <span className="tag is-small is-link" style={{
              }}>
                <p style={{textAlign:'left'}}>
                  {productType}
                </p>
              </span>
            </div>
            <div className='subtitle'
              style={{marginTop: '10px',marginBottom:'10px'}}
            >
              Rp. {Number(singleProduct.price).toLocaleString('id')},-
            </div>
            <div className='subtitle' style={{fontSize:'17px'}}>
              {singleProduct.condition} / 5 <i className="far fa-star"></i>
            </div>
            <div className='subtitle'>
              {singleProduct.location}
            </div>
            <div className="mt-4">
              <h1 className="title is-4">Description</h1>
            </div>
            <div className="content mt-4">{singleProduct.description}</div>
            {singleProduct.TypeId === 1 ?
              <div className='footer'>
                <button className="button"
                  onClick={handleOnBuy}
                >
                  Buy
                </button>
                <button
                  className="button"
                  style={{marginLeft:'10px'}}
                >
                  Chat The Seller
                </button>
              </div>
              :
              <>
                {
                  singleProduct.TypeId === 2 ?
                    <div>
                      <div className='box'>
                        <div>
                          Current Bid :
                        </div>
                        <div>
                          Highest Bidder Id :
                        </div>
                        <div className='input'>
                          Bid
                        </div>
                      </div>
                      <footer class="card-footer">
                        <button
                          className="button"
                        >
                          Bid
                        </button>
                        <button
                          className="button"
                          style={{marginLeft:'10px'}}
                        >
                            Chat The Seller
                        </button>
                      </footer>
                    </div>
                    :
                  <footer class="card-footer">
                    <button
                        className="button"
                      >
                        I Need This
                    </button>
                    <div>
                      <button
                          className="button"
                          style={{marginLeft:'10px'}}
                      >
                          Chat The Owner
                      </button>
                    </div>
                  </footer>
                }
              </>
            }
          </div>
          
        </div>
      </div>
    </div>
  );
}
