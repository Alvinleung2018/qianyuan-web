import React, {Component, Fragment} from 'react'
import {Carousel, Container, Col, Row} from 'react-bootstrap'
// import Head from '../components/head'
import bannerOne from '../images/banner01.jpg'
import bannerTwo from '../images/banner02.jpg'
import bannerThree from '../images/banner02.jpg'
import style from './home.module.scss'
// import Foot from '../components/foot'
// import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  render () {
    const {Item} = Carousel
    // console.log(Router)
    return (
      <Fragment>
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
        <div className={style.sell_off}>
           <Container>
            <Row>
              <Col md={5}>
                <div className={style.sell_left}>
                  <h3>SALE</h3>
					        <h4>upto<span>75%</span></h4>
                </div>
              </Col>
              <Col md={4}>
                <div className={style.sell_middle_top}>
                  <h3>SALE</h3>
				          <h4>
                    upto
                    <span>55%</span>
                  </h4>
                </div>
                <div className={style.sell_middle_bottom}>
                  <h3>SALE</h3>
					        <h4>
                    upto
                    <span>75%</span>
                  </h4>
                </div>
              </Col>

            </Row>  
           </Container>
        </div>
      </Fragment>
    )
  }
}

export default Home