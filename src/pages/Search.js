import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { Shimmer } from "../components/Shimmer";

const Search = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [values, setValues] = useSearch();
  // setValues("")
  return (
    <Layout title={"Search results"}>
    
    {values.results.length>0 ?
      <div className="container-fluid pt-5">
      <div className="text-center mb-4"></div>
      <div className="row px-xl-5 pb-3">
        {values.results?.map((p) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={p._id}>
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`https://fashion-fusion-backend.onrender.com/api/v1/product/product-photo/${p._id}`}
                  alt="product"
                  style={{ background: "gray" }}
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{p.name}</h6>
                <div className="d-flex justify-content-center">
                  <h6> ${p.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del> ${p.price * 1.25}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <button  onClick={() => navigate(`/product/${p.slug}`)} className="btn btn-sm text-dark p-0">
                  <i
                   
                    className="fas fa-eye text-primary mr-1"
                  />
                  View Detail
                </button>
                <button
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                  className="btn btn-sm text-dark p-0"
                >
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>:
    <Shimmer/>
    }
    </Layout>
  );
};

export default Search;
