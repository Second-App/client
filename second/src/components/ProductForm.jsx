import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '35rem',
    zIndex: '1',
  },
}

Modal.setAppElement('#root')

export default function ProductForm() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isLogin, setLogin] = useState(true)
  const [input, setInput] = useState({
    UserId: 0,
    CategoryId: "",
    TypeId: "",
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

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleInput = (e) => {
    let { name, value } = e.target
    console.log(value);
    setInput({
      ...input,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
            <div className="field">
              <p className="control has-icons-left">
                <input
                  value={input.name}
                  onChange={handleInput}
                  name="name"
                  className="input "
                  type="text"
                  placeholder="name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
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
                  placeholder="price"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-coins"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input
                  value={input.description}
                  onChange={handleInput}
                  name="description"
                  className="input "
                  type="text"
                  placeholder="description"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-info-circle"></i>
                </span>
              </p>
            </div>

            <div className="field has-addons">
              <div className="control is-expanded">
                <div className="select is-fullwidth ">
                  <select name="CategoryId" className="input" onChange={handleInput} value={input.CategoryId}>
                    <option value="" disabled>Choose Category</option>
                    {categories?.map(category => (
                      <option key={category.id} value={category.id} >{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="field has-addons">
              <div className="control is-expanded">
                <div className="select is-fullwidth ">
                  <select name="TypeId" className="input" onChange={handleInput} value={input.TypeId}>
                    <option value="" disabled>Choose Types</option>
                    {types?.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
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
                  placeholder="location"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-globe"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input
                  value={input.condition}
                  onChange={handleInput}
                  name="condition"
                  className="input "
                  type="number"
                  placeholder="condition"
                />
                <span className="icon is-small is-left">
                  <i className="far fa-star"></i>
                </span>
              </p>
            </div>

            <div className="file is-info has-name">
              <label className="file-label">
                <input className="file-input" type="file" name="imageUrl" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose a file…</span>
                </span>
              </label>
            </div>
            <hr/>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link is-medium"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-light is-medium"
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
