import React from 'react' // eslint-disable-line no-unused-vars
import './App.scss'

import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'

const App = () =>
  <div className="app">
    <NavBar 
      logoSize={50}
    />
    <Content />
  </div>

export default App