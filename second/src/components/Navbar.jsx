import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProductForm, AuthForm } from './index'
import { fetchTypes } from '../store/actions'
import { Loading } from './index'

export default function Navbar({ setSearch }) {
  const dispatch = useDispatch()
  const {types, loading, error} = useSelector(state => state.transactionTypesReducer)

  useEffect(() => {
    dispatch(fetchTypes())
  }, [])

  if (loading) return <Loading />
  if (error) return <div>error</div>

  return (
    <nav
      className="navbar box-content"
      role="navigation"
      aria-label="main navigation"
      style={{zIndex: 0}}
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img
            src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/second.png"
            alt="home"
          />
        </NavLink>

        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink exact to="/" className="navbar-item mr-2">
            <span className="title is-3">second.</span>
          </NavLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">sort by types ?</div>
            <div className="navbar-dropdown">
              {types.map((e) => (
                <NavLink to={`/type/${e.id}`} className="navbar-item" key={e.id}>
                  {e.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <input
              className="input is-link is-rounded"
              type="text"
              onChange={setSearch}
              placeholder="I'm looking for..."
            />
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="mr-2">
                <AuthForm />
              </div>
              <div className="mr-2">
                <ProductForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
