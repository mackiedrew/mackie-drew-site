import React from 'react' // eslint-disable-line no-unused-vars
import './PortfolioEntry.scss'
import Angle from '../../images/triangle.svg'


// This stateless functional component creates, click-able tags that can filter by tag.
const Tag = (props) => 
  <div className="tag">
    {props.value}
  </div>

/*
 * This stateless functional component describes any additional information about a post besides
 * just the screenshot.
 */
const Info = (props) => {

  const logo = require(`../../posts/${props.id}/logo.png`) // eslint-disable-line no-undef
  
  return (
  <div className="info container">
    <div className="row">
      <div className="logo-wrap col-12 col-lg-6">
        <img className="logo img-fluid" src={logo} alt={name} />
      </div>
      <div className="description col-12 col-lg-6">
        <Angle className="triangle" />
        <div className="text">
          {props.description}
        </div>
        <div className="tags">
          {props.tags.map((tag) => 
            <Tag key={tag} value={tag} />
          )}
        </div>
      </div>


    </div>
  </div>
  )
}


// This component can toggle it's state 
class PortfolioEntry extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  toggle () {
    const data = {expanded: !this.state.expanded}
    this.setState(data)
  }

  render () {
    const {name, id} = this.props.data
    const imgSrc = require(`../../posts/${id}/screenshot.png`) // eslint-disable-line no-undef

    return (
      <div className="row portfolio-entry">
        <div className="col">
          <img className="screenshot img-fluid box-shadow" src={imgSrc} alt={name} onClick={() => this.toggle()} />
          {
            (() => {if (this.state.expanded)
              return <Info 
                {...this.props.data}
              />
            })()
          }
        </div>
        {}
      </div>
    )
  }
}

export default PortfolioEntry