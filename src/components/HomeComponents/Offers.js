import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <React.Fragment>
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img
                src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/16787091913526s1cxd.png"
                alt="img"
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-right text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 text-right font-weight-semi-bold">
                  Spring Collection
                </h1>
                <Link
                  to="/product-page"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img
                src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678709303679fsJEx2.png"
                alt="img"
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-left text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 text-left font-weight-semi-bold">
                  Winter Collection
                </h1>
                <Link
                  to="/product-page"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offers;
