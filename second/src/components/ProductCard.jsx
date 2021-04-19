import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductConfirmation } from '../helpers'
import { deleteProductById, addToWishlist } from '../store/actions'

export default function ProductCard({ data }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProductById(data.id));
  };
  const handleAddToWishlist = (data) => {
    dispatch(addToWishlist(data));
  };

  const [productType, setproductType] = useState('Full-Payment')
  
  useEffect(() => {
    switch (data.TypeId) {
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
  }, [])
  

  return (
    <div
      className="column is-one-quarter"
      key={data.id}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <div className='card column' style={{}}>
        <span className="tag is-small is-link" style={{
          marginLeft: '27px',
          marginBottom: '3px'
        }}>
        <p style={{textAlign:'left'}}>
          {productType}
        </p>
        </span>

        <figure className="image" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
                height: '250px',
                width: '250px',
                display: 'flex'
            }}>
            <img
              className="image"
              src={data.imageUrl}
              alt={data.name}
              style={{
                borderRadius: '5px',
                boxShadow: '0px 0px 7px #FF8D2D',
                objectFit: 'cover',
                cursor: 'pointer',
                zIndex: 1
              }}
            />
          </div>
        </figure>
        <p className="subtitle"
          style={{ textAlign: 'right', marginTop: '12px', marginBottom: '0px', textAlign: 'center', color: 'grey', fontSize: '14px' }}
        >
          {data.condition} / 5 <i className="far fa-star"></i>
        </p>

        <p
          className="title is-5"
          style={{ textAlign: 'left', marginTop: '8px', marginBottom:'15px', textAlign: 'center' }}
        >
          {data.name}
        </p>
        
        {
          data.TypeId !== 3 ? 
            <>
              {
                data.TypeId === 1 ?
                  <p className="subtitle is-6"
                    style={{ textAlign: 'left', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}
                  >
                    Rp. {Number(data.price).toLocaleString('id')},-
                  </p>
                  :
                  <div style={{display: 'flex', justifyContent:'center', marginBottom:'15px'}}>
                      <button>
                        Join Auction
                      </button>

                  </div>
              }
            </>
            :
            <div style={{display: 'flex', justifyContent:'center', marginBottom:'15px'}}>
              <button className="">
                  I Need This
              </button>

            </div>
        }
        {+data?.UserId === +localStorage.id ? (
        <footer className="card-footer">
          <a href="#" className="card-footer-item" onClick={() => handleAddToWishlist(data) } >
            <span className="icon is-small">
              <i className="fas fa-heart"></i>
            </span>
          </a>
          <a href="#" className="card-footer-item">
            <span className="icon is-small">
              <i className="fas fa-cart-arrow-down"></i>
            </span>
          </a>
          <a href="#" className="card-footer-item" onClick={() => deleteProductConfirmation(handleDeleteProduct)}>
            <span className="icon is-small">
              <i className="fas fa-cart-arrow-down"></i>
            </span>
          </a>
        </footer>
        ) : (
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={() => handleAddToWishlist(data) } >
              <span className="icon is-small">
                <i className="fas fa-heart"></i>
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon is-small">
                <i className="fas fa-cart-arrow-down"></i>
              </span>
            </a>
          </footer>
          )}
      </div>
    </div>
  );
}
