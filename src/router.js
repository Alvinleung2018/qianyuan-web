import React from 'react'
import ReactDOM from 'react-dom'
import About from './pages/about'
import Product from './pages/product'
import Home from './pages/home'

import { Router, Route, Link } from 'react-router'




ReactDOM.render(<Router>
  <React.Fragment>
      <Route path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/product" component={Product}/>
  </React.Fragment>
</Router>, document.getElementById('root'));