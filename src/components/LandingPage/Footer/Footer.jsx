import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div>
        <section id="footer">
          <div className="container">
            <ul className=" row list-unstyled ">
              <li className="col-12 my-2 col-md-6 ">
                  <i className="fa fa-envelope mx-2"></i>
                sopapaso73@gmail.com
              </li>

              <li className="col-12 my-2 col-md-6 ">
                  <i className="fa fa-phone mx-2"></i>
                +256777947691
              </li>
            </ul>
            <div className="row">
              <div className="col-12 text-center text-white my-4">
                <h6>
                  You can contact me when you need some quality work to be
                  done.
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
