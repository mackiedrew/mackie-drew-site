import React from 'react' // eslint-disable-line no-unused-vars
import './Content.scss'

import Portfolio from '../Portfolio/Portfolio'

const Content = () =>
  <div className="container content">
    <div className="row">
      {/* Social/Contact Bar */}
    </div>
    <div className="row">
      <Portfolio />
    </div>
    <div className="row">
      {/* Timeline */}
    </div>
    <div className="row">
      <div className="col copyright">
        <hr />
        Check out on <a href="http://github.com/mackiedrew/mackie-drew-site/">GitHub</a>
      </div>
    </div>
  </div>

export default Content