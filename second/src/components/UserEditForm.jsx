import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import { editProfile, getProfileById } from '../store/actions'

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

export default function UserEditForm({ data, openModal, modal, setModal }) {
  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  useEffect(() => {
    setInput({
      name: data.name,
      email: data.email,
      ktpURL: '',
      imageUrl: data.imageUrl,
      address: ''
    })
  }, [data])
  // console.log(data, "ini ada", input, "<< ini input")
  const handleInput = (e) => {
    const { name, value } = e.target
    setInput({...input, [name]: value})
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    // console.log(input)
    dispatch(editProfile(input, data.id))
    setModal(false)
    dispatch(getProfileById(data.id))

  }

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <p className="title is-4">Edit User Profile</p>
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
                placeholder={data.name}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-box"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                value={input.email}
                onChange={handleInput}
                name="email"
                className="input "
                type="email"
                placeholder={data.email}
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
                value={input.ktpURL}
                onChange={handleInput}
                name="ktpURL"
                className="input "
                type="text"
                placeholder="KTP URL"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-id-card"></i>
              </span>
            </p>
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
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left">
              <input
                value={input.address}
                onChange={handleInput}
                name="address"
                className="input "
                type="address"
                placeholder="Address"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-house-user"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <br />
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link is-normal"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="control">
          <button
            className="button is-light is-normal"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}