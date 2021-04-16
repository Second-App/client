import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductForm, AuthForm } from './index'

export default function Navbar() {
  return (
    <nav
      className="navbar box-content"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/second.png" />
        </NavLink>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink exact to="/" className="navbar-item">
            second.
          </NavLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Categories</a>

            <div className="navbar-dropdown">
              <NavLink to="/category/2" className="navbar-item">
                Fashion
              </NavLink>
              <NavLink to="/category/3" className="navbar-item">
                Technology
              </NavLink>
              <NavLink to="/category/4" className="navbar-item">
                Contact
              </NavLink>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Types</a>

            <div className="navbar-dropdown">
              <NavLink to="/type/1" className="navbar-item">
                Jual-Beli
              </NavLink>
              <NavLink to="/type/2" className="navbar-item">
                Lelang
              </NavLink>
              <NavLink to="/type/3" className="navbar-item">
                Tukar-Tambah
              </NavLink>
              <NavLink to="/type/4" className="navbar-item">
                Community
              </NavLink>
            </div>
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
