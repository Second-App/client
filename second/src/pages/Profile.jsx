import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileById, fetchWishlist, deleteWishlist, deleteProductById} from '../store/actions'
import { Loading, UserEditForm, PanelContent, EditProductFrom } from '../components'
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default function Profile() {
  const favourites = ['1', '2', '3', '4', 5, 6, 7, 8]
  const id = localStorage.id
  const dispatch = useDispatch()
  const [ modal, setModal] = useState(false)
  const [productData, setProductData] = useState({})
  const [ editProductModal, setEditProductModal] = useState(false)
  const { userDetails } = useSelector((state) => state.userReducer)
  const { data } = useSelector( state => state.wishlists)
  const sharedGoods = userDetails.Products?.filter((product) => product.TypeId === 3)

  useEffect(() => {
    dispatch(getProfileById(id))
    dispatch(fetchWishlist())
  }, [dispatch])

  function handleDeleteWishlist(value) {
    dispatch(deleteWishlist(value))
    dispatch(fetchWishlist())
  }
  function handleDeleteProduct(productId) {
    dispatch(deleteProductById(productId))
    dispatch(getProfileById(id))
  }
  
  
  function handleEditProduct(product) {
    setProductData(product)
    setEditProductModal(true)
  }

  if (!userDetails) return <Loading />
  
  return (
    <div className="box">
      <UserEditForm modal={modal} setModal={setModal} data={userDetails}/>
      <EditProductFrom
      data={productData}
      modalEditForm={editProductModal}
      setModalEditForm={setEditProductModal} 
      />
      <div className="columns" >
        <div className="column is-flex is-4 is-flex-direction-column is-justify-content-start is-align-items-center">
          <div className="card card-shadow is-flex is-flex-direction-column is-justify-content-center is-align-items-center" style={{ width: 300, height: 360}}>
          <figure className="image is-128x128">
            <img
              className="is-rounded"
              src={userDetails.imageUrl}
              alt="Placeholder"
            />
          </figure>
          {/* <h1 className="title is-4">{userDetails.name}</h1> */}
            <p>{userDetails.name}</p>
            <p>{userDetails.email}</p>
            <p>{userDetails.address}</p>
          <button className="button is-rounded "
          onClick={() => setModal(true)}
          
          ><p style={{color: 'white'}}>Edit Profile</p></button>
          </div>
        </div>
        <div className="column is-flex is-8 is-flex-direction-column" >
          <div>
            <h1 className="title is-4 ml-3">User Items</h1>
          </div>
          <div>
            <Tabs forceRenderTabPanel defaultIndex={1} >
              <TabList>
                <Tab>My Wishlists</Tab>
                <Tab>My Products</Tab>
                <Tab>My Shared-Goods</Tab>
              </TabList>
              <TabPanel>
                <PanelContent data={data} handleDeleteWishlist={handleDeleteWishlist} />
              </TabPanel>
              <TabPanel>
                <PanelContent data={userDetails.Products}
                handleEditProduct={handleEditProduct}
                handleDeleteProduct={handleDeleteProduct} />
              </TabPanel>
              <TabPanel>
                <PanelContent data={sharedGoods}
                handleEditProduct={handleEditProduct}
                handleDeleteProduct={handleDeleteProduct} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      
    </div>
  )
}
