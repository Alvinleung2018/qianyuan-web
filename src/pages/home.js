import React, {Component, Fragment} from 'react'
import {Carousel} from 'react-bootstrap'
// import Head from '../components/head'
import bannerOne from '../images/banner01.jpg'
import bannerTwo from '../images/banner02.jpg'
import bannerThree from '../images/banner02.jpg'
// import Foot from '../components/foot'
// import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  render () {
    const {Item} = Carousel
    // console.log(Router)
    return (
      <Fragment>
        {/* <Head goPath="/about"/> */}
        {/* <Foot> */}
        <div className="container">
          <Carousel style={{"minHeight": "280px"}}>
            <Item>
              <img className="d-block w-100" src={bannerOne} alt=""/>
            </Item>
            <Item>
              <img className="d-block w-100" src={bannerTwo} alt=""/>
            </Item>
            <Item>
              <img className="d-block w-100" src={bannerThree} alt=""/>
            </Item>
          </Carousel>
        </div>
        {/* </Foot> */}
      </Fragment>
    )
  }
}

export default Home