import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
              <p className="text-right">Exclusive</p>
              <Link
               
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/5/591890-5440322.jpg?imwidth=256"
                  alt="men"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">Exclusive</p>
              <Link
              
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/4/481881-3513864.jpg?imwidth=256"
                  alt="women"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">Exclusive</p>
              <Link
              
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/5/558519-4634187.jpg?imwidth=256"
                  alt="kids"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">Exclusive</p>
              <Link
                
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/7/736143-8235491.jpg?imwidth=256"
                  alt="img"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">Exclusive</p>
              <Link
                
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/8/806164-9570277.jpg?imwidth=256"
                  alt="img"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">Exclusive</p>
              <Link
                
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                onClick={() => navigate("/product-page")}
                  className="img-fluid"
                  src="https://imagescdn.pantaloons.com/img/app/product/7/792008-9287308.jpg?imwidth=256"
                  alt="img"
                />
              </Link>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
