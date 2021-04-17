import React, { useState } from 'react'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50rem',
    zIndex: 10,
  },
}

export default function AuthForm({ isEdit }) {
  const [authForm, setAuthForm] = useState(false)
  const [isLogin, setIsLogin] = useState(localStorage.access_token)
  const [isRegistering, setRegistering] = useState(false)
  const [isSigning, setSigning] = useState(false)
  const [input, setInput] = useState(
    isEdit
      ? isEdit
      : {
          name: '',
          email: '',
          password: '',
        }
  )

  const openModal = (orientation) => {
    if (orientation === 'login') setSigning(true)
    else setRegistering(true)
    setAuthForm(true)
  }

  const closeModal = () => {
    setAuthForm(false)
    setRegistering(false)
    setSigning(false)
    clearAll()
  }

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.clear()
  }

  const handleInput = (e) => {
    let { name, value } = e.target
    console.log(value);
    setInput({
      ...input,
      [name]: value,
    })
  }

  const clearAll = () => {
    setInput({
      name: "",
      email: "",
      password: ""
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    const errors = []

    if(!input.name) errors.push('name is required')
    if(!input.email) errors.push("email is required")
    if(!input.password) errors.push("password is required")
    
    if(errors.length) return toast.warn(errorMessages(errors))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const errors = []

    if(!input.email) errors.push("email is required")
    if(!input.password) errors.push("password is required")
    
    if(errors.length) return toast.warn(errorMessages(errors))
  }

  const errorMessages = (errors) => (
    <ul> {errors.map(err => (<li>{err}</li>))} </ul>
  )

  return (
    <>
    <ToastContainer 
      position="top-center"
      limit={1}
    />
      {isLogin ? (
        <button className="button is-primary" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <button
            className="button"
            style={{ color: 'white' }}
            onClick={() => openModal('login')}
          >
            Login
          </button>
          <button
            className="button is-primary"
            onClick={() => openModal('register')}
          >
            Sign Up
          </button>
        </>
      )}
      {isRegistering ? (
        <Modal
          isOpen={authForm}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                value={input.name}
                onChange={handleInput}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                value={input.email}
                onChange={handleInput}
                name="email"
                className="input"
                type="email"
                placeholder="Email input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                value={input.password}
                onChange={handleInput}
                name="password"
                className="input"
                type="password"
                placeholder="password input"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleRegister}>
                Register
              </button>
            </div>
            <div className="control">
              <button className="button is-light" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={authForm}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                value={input.email}
                onChange={handleInput}
                name="email"
                className="input"
                type="email"
                placeholder="Email input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                value={input.password}
                onChange={handleInput}
                name="password"
                className="input"
                type="password"
                placeholder="password input"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={handleLogin} type="submit" className="button is-link">
                Login
              </button>
            </div>
            <div className="control">
              <button className="button is-light" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
