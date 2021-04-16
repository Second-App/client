import React from 'react'
import {ProductForm} from './index'

export default function Navbar() {
  return (
    <nav className="navbar box-content" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/second.png"/>
        </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-bold">
              second.
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
               </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider"/>
                  <a className="navbar-item">
                    Report an issue
                  </a>
              </div>
          </div>
        </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-ghost" style={{color:'white', backgroundColor: '#ed7014'}}>
                    Log in
                  </a>
                  <ProductForm/>
                </div>
              </div>
            </div>
          </div>
    </nav>
  )
}
