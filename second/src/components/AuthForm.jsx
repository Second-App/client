import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import { userLogin, userRegister } from '../store/actions'
import { REMOVE_LOGGED_USER } from '../store/types'
import { logoutConfirmation, errorMessages } from '../helpers'
import { Link, useHistory } from 'react-router-dom'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25rem',
  },
}

export default function AuthForm({ isEdit }) {
  const history = useHistory()
  const [authForm, setAuthForm] = useState(false)
  const [isLogin, setIsLogin] = useState(
    localStorage.access_token ? true : false
  )
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

  const dispatch = useDispatch()

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
    dispatch(REMOVE_LOGGED_USER())
    history.push('/')
  }

  const handleInput = (e) => {
    let { name, value } = e.target
    // console.log(value)
    setInput({
      ...input,
      [name]: value,
    })
  }

  const clearAll = () => {
    setInput({
      name: '',
      email: '',
      password: '',
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    const errors = []

    if (!input.name) errors.push('name is required')
    if (!input.email) errors.push('email is required')
    if (!input.password) errors.push('password is required')

    if (errors.length) return toast.warn(errorMessages(errors))
    dispatch(userRegister(input, closeModal, openModal, toast))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const errors = []

    if (!input.email) errors.push('email is required')
    if (!input.password) errors.push('password is required')

    if (errors.length) return toast.warn(errorMessages(errors))

    const payload = {
      email: input.email,
      password: input.password,
    }
    dispatch(userLogin(payload, closeModal, setIsLogin, toast))
  }

  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={2000} />
      {isLogin ? (
        <>
          <Link to='/chat'>
          <button className="button is-white" style={{
            marginRight: "10px", border: '2px solid #AA89D2'}}>
              <i className="fas fa-envelope"></i>
          </button>
          </Link>

          <Link to='/notification'>
          <button className="button is-white" style={{
            marginRight: "10px", border: '2px solid #AA89D2'}}>
              <i className="fas fa-bell"></i>
          </button>
          </Link>

          <Link to='/carts'>
          <button className="button is-white" style={{
            marginRight: "10px", border: '2px solid #AA89D2'}}>
              <i className="fas fa-cart-arrow-down"></i>
          </button>
          </Link>

          <Link to='/profile'>
          <button className="button is-white" style={{
            marginRight: "10px", border: '2px solid #AA89D2'}}>
              <i className="fas fa-user-circle"></i>
          </button>
          </Link>

          <Link to='/community'>
            <button className="button is-white" style={{
              marginRight: "35px", border: '2px solid #AA89D2'
            }}>
              <i className="fas fa-users"></i>
          </button>
          </Link>

          <button className="button is-white"
            onClick={() => logoutConfirmation(handleLogout)}
            style={{
              border: '2px solid #3D0085',
              color: '#3D0085'
            }}
          >
            Logout
            {console.log(isLogin)}
          </button>
      </>
      ) : (
        <>
          <button
            className="button is-white"
            style={{
            marginRight: "10px", border: '2px solid #3D0085'}}
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
          <div className="title is-4 ml-2">Register</div>
          <div className="field">
            <p class="control has-icons-left">
              <input
                value={input.name}
                onChange={handleInput}
                name="name"
                className="input is-medium"
                type="text"
                placeholder="name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p class="control has-icons-left">
              <input
                value={input.email}
                onChange={handleInput}
                name="email"
                className="input is-medium"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p class="control has-icons-left">
              <input
                value={input.password}
                onChange={handleInput}
                name="password"
                className="input is-medium"
                type="password"
                placeholder="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <hr />

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
          {/* <ToastContainer position="top-center" limit={1} /> */}
          <div className="title is-4 ml-2">Login</div>
          <div className="field">
            <p class="control has-icons-left has-icons-right">
              <input
                value={input.email}
                onChange={handleInput}
                name="email"
                className="input is-medium"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p class="control has-icons-left">
              <input
                value={input.password}
                onChange={handleInput}
                name="password"
                className="input is-medium"
                type="password"
                placeholder="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <hr />
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={handleLogin}
                type="submit"
                className="button is-link"
              >
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
