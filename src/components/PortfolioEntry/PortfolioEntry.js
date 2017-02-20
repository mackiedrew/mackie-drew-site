import React from 'react' // eslint-disable-line no-unused-vars
import './PortfolioEntry.scss'


// This stateless functional component creates, click-able tags that can filter by tag.
const Tag = (props) => 
  <div className="tag">
    {props.value}
  </div>

/*
 * This stateless functional component describes any additional information about a post besides
 * just the screenshot.
 */
const Description = (props) => 
  <div className="description">
    <div className="tags">
      {props.tags.map((tag) => 
        <Tag value={tag} />
      )}
    </div>
    Description! {props.description}
  </div>


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
    const {name} = this.props.data
    const imgSrc = require(`../../posts/${name}/screenshot.png`) // eslint-disable-line no-undef

    return (
      <div className="row portfolio-entry">
        <div className="col">
          <img className="screenshot img-fluid" src={imgSrc} alt={name} onClick={() => this.toggle()} />
          {
            (() => {if (this.state.expanded)
              return <Description 
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