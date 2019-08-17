import React, {Component, Fragment} from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import logo from '../images/logo192.png'
import style from './head.module.scss'
import { Link as RouterLink } from "react-router-dom";
// import About from '../pages/about'
// import Home from '../pages/home'
// import Product from '../pages/product'


class Head extends Component {


  render () {
    const {Brand, Toggle, Collapse} = Navbar
    const {Item, Link} = Nav
    // const {goPath} = this.props
    return ( 
      
      <Fragment>
        <Container>
          <Navbar expand="lg">
            <Brand>
              <img className={style.logo} src={logo}  alt="logo"/>
            </Brand>
           </Navbar> 
          <Navbar bg="light" expand="lg">
            <div className={style.box}>
              <Toggle className={style.respond_btn} aria-controls="nav-list"></Toggle>  
            </div>      
            <Collapse id="nav-list" className="justify-content-center">
              <Nav className="mr-auto" justify="true" style={{ "marginTop": "20px", "borderTop" : "1px solid #e7e7e7"}}>  
                <Item>
                  <Link as="div" className={style.item} style={{ "textAlign":"center" }}>
                    <RouterLink to="/">Home</RouterLink>
                  </Link>
                </Item> 
                             
                <Item>
                  <Link as="div" style={{ "textAlign":"center" }}>
                    <RouterLink to="/about">about</RouterLink>                  
                  </Link>
                </Item>
                        
                <Item>
                  <Link as="div" style={{ "textAlign":"center" }}>
                  <RouterLink to="/product">Product</RouterLink>
                  </Link>
                </Item> 
           
              </Nav> 
            </Collapse>
          </Navbar> 
        </Container>
        {/* <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} /> */}
      </Fragment> 
      
    )

  }
}

export default Head;