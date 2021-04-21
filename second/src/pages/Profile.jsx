import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileById, fetchWishlist, deleteWishlist, deleteProductById } from '../store/actions';
import { Loading, UserEditForm, PanelContent, EditProductFrom } from '../components';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Profile() {
  const favourites = ['1', '2', '3', '4', 5, 6, 7, 8];
  const id = localStorage.id;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [editProductModal, setEditProductModal] = useState(false);
  const { userDetails } = useSelector((state) => state.userReducer);
  const { data } = useSelector((state) => state.wishlists);
  const sharedGoods = userDetails.Products?.filter((product) => product.TypeId === 3);

  useEffect(() => {
    dispatch(getProfileById(id));
    dispatch(fetchWishlist());
  }, [dispatch]);

  function handleDeleteWishlist(value) {
    dispatch(deleteWishlist(value));
    dispatch(fetchWishlist());
  }
  function handleDeleteProduct(productId) {
    dispatch(deleteProductById(productId));
    dispatch(getProfileById(id));
  }

  function handleEditProduct(product) {
    setProductData(product);
    setEditProductModal(true);
  }

  if (!userDetails) return <Loading />;

  return (
    <div className='box'
      style={{
          boxShadow: '0px 0px 0px',
          marginTop: '30px',
        }}
    >
      <UserEditForm modal={modal} setModal={setModal} data={userDetails} />
      <EditProductFrom data={productData} modalEditForm={editProductModal} setModalEditForm={setEditProductModal} />
      <div className='columns'
        style={{
          border: '2px solid #7300FC',
          boxShadow: '0px 0px 0px',
        }}
      >
        <div className='column'
          style={{
            borderRight: '1px solid #7300FC'
          }}
        >
          <div className='box'
            style={{
              marginTop: '60px',
              textAlign: 'center',
              boxShadow: '0px 0px 0px',
          }}
          >
            <figure className='image'>
              <img className='' src={userDetails.imageUrl} alt='Placeholder'
                style={{
                  boxShadow: '0px 0px 5px #7300FC',
                  objectFit: 'cover',
                  height: '150px',
                  width: '150px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </figure>
            {/* <h1 className="title is-4">{userDetails.name}</h1> */}
            <p className="title is-5" style={{marginTop:'15px'}}>{userDetails.name}</p>
            <p className="subtitle is-6" style={{marginTop:'0px'}}>{userDetails.email}</p>
            <p className="subtitle is-6" style={{marginTop:'-16px'}}>{userDetails.address}</p>
            <p className="subtitle is-6" style={{marginTop:'-16px', marginBottom: '20px'}}> Rp. {Number(userDetails.balance).toLocaleString('id')},-</p>
            <button className='button ' onClick={() => setModal(true)}>
              <p style={{ color: 'white' }}>Edit Profile</p>
            </button>
          </div>
        </div>
        <div className='column is-flex mt-3 is-8 is-flex-direction-column'>
          <div>
            <h1 className='title is-4 mb-4'>Dashboards</h1>
          </div>
          <div>
            <Tabs forceRenderTabPanel defaultIndex={0}>
              <TabList>
                <Tab>My Wishlists</Tab>
                <Tab>My Products</Tab>
                <Tab>My Shared-Goods</Tab>
              </TabList>
              <TabPanel>
                <PanelContent data={data} handleDeleteWishlist={handleDeleteWishlist} />
              </TabPanel>
              <TabPanel>
                <PanelContent data={userDetails.Products} handleEditProduct={handleEditProduct} handleDeleteProduct={handleDeleteProduct} />
              </TabPanel>
              <TabPanel>
                <PanelContent data={sharedGoods} handleEditProduct={handleEditProduct} handleDeleteProduct={handleDeleteProduct} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
