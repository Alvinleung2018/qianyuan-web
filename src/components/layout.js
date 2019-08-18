import React, {Component, Fragment} from 'react'
import Header from './header'
import Footer from './footer'



class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        )
    }
}

export default Layout;