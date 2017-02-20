import React from 'react' // eslint-disable-line no-unused-vars
import './NavBar.scss'
import Logo from '../../images/logo.svg'

const NavBar = () =>
  <div className="navbar-wrap container-fluid">
  <nav className="container navbar navbar-toggleable-md navbar-inverse bg-faded">
    
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="navbar-brand">
      <Logo width={50} height={50} />
      <span className="brand-text">Mackie Drew</span>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#timeline">Timeline</a>
        </li>
      </ul>
    </div>

  </nav>
  </div>

export default NavBar