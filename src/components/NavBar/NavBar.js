import React from 'react' // eslint-disable-line no-unused-vars
import './NavBar.scss'
import Logo from '../../images/logo.svg'

const NavBar = () =>
  <nav className="container-fluid">
    <div className="container">
      <div className="row">
      
        <div className="brand col-md-6">
          <Logo width={50} height={50} />
          <span className="brand-text">Mackie Drew</span>
        </div>

        <ul className="navigation-buttons col-md-6 container-fluid">
          <li className="col-md-6 col-sm-6 col-xs-12">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-12">
            <a href="#timeline">Timeline</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

export default NavBar