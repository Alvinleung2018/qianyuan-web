import React, {Component, Fragment} from "react";
import style from './footer.module.scss'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={style.footer}>
          <div className="container">
            <p className={style.copy_right}>
            © 2016 Fashion Club . All rights reserved | Design by 
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
