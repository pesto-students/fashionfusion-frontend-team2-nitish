import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708393319FGZ9Az.png"
                  alt="men"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708495002NYKOS6.png"
                  alt="women"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png"
                  alt="kids"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png"
                  alt="img"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png"
                  alt="img"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png"
                  alt="img"
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
