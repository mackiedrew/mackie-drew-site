import React from 'react' // eslint-disable-line no-unused-vars
import './Portfolio.scss'

const PortfolioEntry = (props) => {

  const {name} = props
  const imgSrc = require('../../images/wit-screenshot.png')

  return (
    <div className="row">
      <div className="col">
        <img className="screenshot img-fluid" src={imgSrc} alt={name} />
      </div>
    </div>
  )
}

const Portfolio = () => {

  return (
    <div id="portfolio" className="portfolio container">
      <PortfolioEntry name="1" />
      <PortfolioEntry name="2" />
      <PortfolioEntry name="3" />
      <PortfolioEntry name="4" />
    </div>
  )
}

export default Portfolio