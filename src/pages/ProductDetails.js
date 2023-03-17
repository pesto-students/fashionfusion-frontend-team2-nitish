import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { axiosInstance } from "../config";
// import { ProductDetailsShimmer } from "../components/Shimmer";
const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
// scrollToTop()
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // if(product.length===0)
  // {
  //    return <ProductDetailsShimmer/>
  // }
  return (
    
    <Layout>
    <div className="container-fluid">
      <div className="row product-details" >
        <div className="col-md-4 col-sm-12">
          <img
            src={`https://fashion-fusion-backend.onrender.com/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="400px"
            width={"250px"}
            style={{background:"#D3D3D3"}}
          />
        </div>
        <div className="col-md-5 col-sm-12 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button 
          onClick={() => {
            setCart([...cart, product]);
            localStorage.setItem(
              "cart",
              JSON.stringify([...cart, product])
            );
            toast.success("Item Added to cart");
          }}
          className="add-to-cart btn ms-1">ADD TO CART</button>
        </div>
      </div>
      </div>
      <hr />
      <h4>Similar Products ➡️</h4>
      {relatedProducts.length < 1 && (
        <p className="text-center">No Similar Products found</p>
      )}
      <div className="container-fluid pt-5">
      <div className="text-center mb-4"></div>
      <div className="row px-xl-5 pb-3">
        {relatedProducts?.map((p) => (
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
    </div>
    
    </Layout>
  );
};

export default ProductDetails;
