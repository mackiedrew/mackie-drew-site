import React from 'react' // eslint-disable-line no-unused-vars
import './NavBar.scss'
import Logo from '../../images/logo.svg'

const NavBar = (props) =>
  <nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
    
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
    
    <a className="navbar-brand" href="#">
      <Logo width={props.logoSize} height={props.logoSize} />
      <span className="brand-text">Mackie Drew</span>
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>

  </nav>

export default NavBar