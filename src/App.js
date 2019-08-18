import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from './components/footer'
import Header from './components/header'
import Layout from './components/layout'
import routes from './route.config'


class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (  
        <Router>
          <Header /> 
          {routes.map((route, index) => (
           <Route
           key={index}
           path={route.path}
           exact={route.exact}
           component={route.component}
            />
          ))}
          <Footer />
        </Router>
      
    )
  }
}

export default App;
