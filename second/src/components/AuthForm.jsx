import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "50rem",
  },
}

export default function AuthForm() {
  const [authForm, setAuthForm] = useState(false)
  const [isLogin, setIsLogin] = useState(localStorage.access_token)

  const openModal = () => {
    setAuthForm(true)
  }

  const closeModal = () => {
    setAuthForm(false)
  }

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.clear()
  }

  const handleRegister = () => {

  }

  const handleLogin = () => {

  }

  return (
    <div>
      {isLogin ? (
        <button className="button is-primary" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <button className="button is-primary" onClick={openModal}>
            Login
          </button>
          <button className="button is-primary" onClick={openModal}>
            Sign Up
          </button>
        </>
      )}
      <Modal
        isOpen={authForm}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Email input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="password input" />
          </div>
        </div>

        <div className="field">
          <label className="label">ImageURL</label>
          <div className="control">
            <input className="input" type="text" placeholder="URL input" />
          </div>
        </div>
        
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="number" placeholder="number input" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-light" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
