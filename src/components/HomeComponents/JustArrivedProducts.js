import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";

const JustArrivedProducts = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    filterProduct();
  },[]);


  const filterProduct = async () => {
    // console.log("checked",checked)
    const checked="6411766ac39c83104ab27b11";
    const radio=[];
    try {
      const { data } = await axiosInstance.post(`/api/v1/product/product-filters`, {
        checked,
        radio
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };  

  // console.log({products})
  return (
    <React.Fragment>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Just Arrived</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
        {
          products.map((p)=>(
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={p._id}>
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`https://fashion-fusion-backend.onrender.com/api/v1/product/product-photo/${p._id}`}
                  alt="product"
                  style={{background:"#D3D3D3"}}
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6  className="text-truncate mb-3">{p.name}</h6>
                <div className="d-flex justify-content-center">
                  <h6> ${p.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>   ${(p.price)*1.25}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <button  className="btn btn-sm text-dark p-0">
                  <i onClick={() => navigate(`/product/${p.slug}`)} className="fas fa-eye text-primary mr-1" />
                  View Detail
                </button>
                <button onClick={() => {
                  setCart([...cart, p]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, p])
                  );
                  toast.success("Item Added to cart");
                }} className="btn btn-sm text-dark p-0">
                  <i   className="fas fa-shopping-cart text-primary mr-1" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          )
          )
        }
         

     
        </div>
      </div>
    </React.Fragment>
  );
};

export default JustArrivedProducts;
