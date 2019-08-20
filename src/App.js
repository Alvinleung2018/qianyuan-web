import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// import * as re from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Layout from './components/layout'
import routes from './route.config'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    console.log(Router)
    return (  
        <Router>
          {/* <NavLink to="/ab" exact activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>qqq</NavLink> */}
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
