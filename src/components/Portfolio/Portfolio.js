import React from 'react' // eslint-disable-line no-unused-vars
import './Portfolio.scss'
import PortfolioEntry from '../PortfolioEntry/PortfolioEntry'


// Order of posts, listed by name in the posts/ folder
const portfolioPosts = [
  'wit',
  'rue-pigalle',
  // 'mackie',
  // 'chelsea',

  // 'rue-pigalle',
  // 'tiko',
  // 'valance',
  // 'lancelot'
]

const Portfolio = () => {

  return (
    <div id="portfolio" className="portfolio container">
      {portfolioPosts.map((post, i) => {
        // Get the post data from the specified folder.
        const json = require(`../../posts/${post}/post.json`) // eslint-disable-line no-undef
        return (<PortfolioEntry key={`${i}-${post}`} data={json} />)
      })}
     
    </div>
  )
}

export default Portfolio