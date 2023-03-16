import React from "react";
import "../../styles/Homepage.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      {/*Footer End*/}

      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <Link href className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  Fashion
                </span>
              </h1>
            </Link>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3" />
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link to="/" className="text-dark mb-2">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link to="/product-page" className="text-dark mb-2">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </Link>
                  <Link to="/product-page" className="text-dark mb-2">
                    <i className="fa fa-angle-right mr-2" />
                    Shop Detail
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link to="/cart" className="text-dark mb-2">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </Link>
                  <Link to='/cart' className="text-dark mb-2">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </Link>
                  <Link to='/contact' className="text-dark">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-dark">
              ©{" "}
              <Link className="text-dark font-weight-semi-bold" href="#">
                Fashion-fusion
              </Link>
              . All Rights Reserved. Designed by
              <Link
                className="text-dark font-weight-semi-bold"
                href="https://htmlcodex.com"
              >
                Fashion-fusion
              </Link>
              <br />
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img
              className="img-fluid"
              src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678712000473ntSUxg.png"
              alt="footer"
            />
          </div>
        </div>
      </div>

      {/*Footer End*/}
    </React.Fragment>
  );
};

export default Footer;
