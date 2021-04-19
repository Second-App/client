import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { addProduct } from '../store/actions'

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50rem',
    zIndex: '',
  },
}

Modal.setAppElement('#root')

export default function ProductForm() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { isLogin } = useSelector((state) => state.userReducer)
  const [input, setInput] = useState({
    UserId: +localStorage.id,
    CategoryId: '',
    TypeId: '',
    name: '',
    price: '',
    description: '',
    imageUrl: '',
    location: '',
    condition: '',
  })

  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  )
  const { types, loading: typeLoading, error: typeError } = useSelector(
    (state) => state.transactionTypesReducer
  )
  
  const dummyCategories = [
    {
      "id": 1,
      "name": "Automotive",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/1.jpeg"
    },
    {
      "id": 2,
      "name": "Property",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/2.jpeg"
    },
    {
      "id": 3,
      "name": "Food & Beverages",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/3.jpeg"
    },
    {
      "id": 4,
      "name": "Electronic & Gadgets",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/4.jpeg"
    },
    {
      "id": 5,
      "name": "Hobbies & Sports",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/5.jpeg"
    },
    {
      "id": 6,
      "name": "Household Needs",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/6.jpeg"
    },
    {
      "id": 7,
      "name": "Self-Care",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/7.jpeg"
    },
    {
      "id": 8,
      "name": "Kids",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/8.jpeg"
    },
    {
      "id": 9,
      "name": "Office Needs",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/9.jpeg"
    },
    {
      "id": 10,
      "name": "Pets",
      "url": "https://secondh8.s3-ap-southeast-1.amazonaws.com/products/categories/10.jpeg"
    }
  ]

  const dummyTypes = [
    {
        "id": 1,
        "name": "Full-Payment"
    },
    {
        "id": 2,
        "name": "Auction"
    },
    {
        "id": 3,
        "name": "Shared-goods"
    }
]

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleInput = (e) => {
    let { name, value } = e.target
    console.log(value)
    setInput({
      ...input,
      [name]: value,
    })
  }

  const clearAllInput = () => {
    setInput({
      UserId: +localStorage.id,
      CategoryId: '',
      TypeId: '',
      name: '',
      price: '',
      description: '',
      imageUrl: '',
      location: '',
      condition: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(input, closeModal, toast, clearAllInput))
  }

  return (
    <>
      {isLogin ? (
        <div>
          <button className="button is-primary" onClick={openModal}>
            Add Product
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
          >
            <p className="title is-4">Add Product</p>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      value={input.name}
                      onChange={handleInput}
                      name="name"
                      className="input "
                      type="text"
                      placeholder="Product Name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-box"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      value={input.price}
                      onChange={handleInput}
                      name="price"
                      className="input "
                      type="number"
                      placeholder="Price"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-coins"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      value={input.condition}
                      onChange={handleInput}
                      name="condition"
                      className="input "
                      type="number"
                      placeholder="Condition"
                    />
                    <span className="icon is-small is-left">
                      <i className="far fa-star"></i>
                    </span>
                  </p>
                </div>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth ">
                      <select
                        name="CategoryId"
                        className="input"
                        onChange={handleInput}
                        value={input.CategoryId}
                      >
                        <option value="" disabled>
                          Choose Category
                        </option>
                        {dummyCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth ">
                      <select
                        name="TypeId"
                        className="input"
                        onChange={handleInput}
                        value={input.TypeId}
                      >
                        <option value="" disabled>
                          Choose Types
                        </option>
                        {dummyTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      value={input.location}
                      onChange={handleInput}
                      name="location"
                      className="input "
                      type="text"
                      placeholder="Location"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-globe"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <textarea
                      value={input.description}
                      onChange={handleInput}
                      name="description"
                      className="textarea is-link"
                      type="text"
                      placeholder="Description"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div id="file-js-example" class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="imageUrl"/>
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  No file uploaded
                </span>
              </label>
            </div>
            <hr />
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link is-normal"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-light is-normal"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
