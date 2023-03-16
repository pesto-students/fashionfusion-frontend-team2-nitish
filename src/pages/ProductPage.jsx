import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import { Shimmer } from "../components/Shimmer";

const ProductPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
scrollToTop()

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://fashion-fusion-backend.onrender.com/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://fashion-fusion-backend.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://fashion-fusion-backend.onrender.com/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (page === 1) return;
  //   loadMore();
  // }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://fashion-fusion-backend.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  
  useEffect(() => {
   getAllProducts();
  },[]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    // console.log("checked",typeof checked)

    try {
      const { data } = await axios.post(
        "https://fashion-fusion-backend.onrender.com/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
     if(data?.products.length===0) 
     {
      setProducts(0);
     }
     else{
      setProducts(data?.products);
     }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <h1>dfddc</h1>
      <div className="container-lg">
      <div className="row  pt-3 "> 
      <select
       className="form-select m-2 col-lg-3 col-md-6 col-sm-12 "
        onChange={(e) => {
          setProducts('')
          setChecked(e.target.value);
        }}
      >
        <option value="">Select a Category</option>
        {categories.map((p) => (
          <option value={p._id}>{p.name}</option>
        ))}
      </select>

      <select
      className="form-select m-2 col-lg-3 col-md-6 col-sm-12 "
        onChange={(e) => {
          setProducts('')
          let val = [e.target.value];
          const result = val.map((str) => str.split(",").map(Number)).flat();
         
          setRadio(result);
        }}
      >
        <option>Pricing Range</option>
        {Prices.map((p) => (
          <option value={p.array}>{p.name}</option>
        ))}
      </select>
      <button className="m-2 btn btn-secondary col-lg-3 col-md-6 col-sm-12" onClick={()=>
        {
         window.location.reload()
        }}>
      Reset Filters
      </button>
    </div>
      </div>
    
      {products.length>0 ?
        <div className="container-fluid pt-3">
        <div className="text-center mb-4"></div>
        <div className="row px-xl-5 pb-3">
          {products?.map((p) => (
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
      <div>
      {
        products!==0? <Shimmer/>:
        <React.Fragment>
        <div className="text-center mb-4 h-100">No Products found</div>
        </React.Fragment>
      }
     
      </div>
     
      }
     
    </Layout>
  );
};

export default ProductPage;
