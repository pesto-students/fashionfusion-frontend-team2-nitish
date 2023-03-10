import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
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

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://fashion-fusion-backend.onrender.com/api/v1/category/get-category");
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
      const { data } = await axios.get(`https://fashion-fusion-backend.onrender.com/api/v1/product/product-list/${page}`);
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
      const { data } = await axios.get("https://fashion-fusion-backend.onrender.com/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://fashion-fusion-backend.onrender.com/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    // let all = [checked];
    // if (value) {
    //   all.push(id);
    // } else {
    //   all = all.filter((c) => c !== id);
    // }
    setChecked(id);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    console.log("checked",checked)
    
    try {
      const { data } = await axios.post("https://fashion-fusion-backend.onrender.com/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
     
      <div className="container-fluid row mt-3 home-page">
       <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
          <Radio.Group onChange={(e) => 
            {
              setProducts('')
              setChecked(e.target.value)
            }
           }>
          {categories?.map((p) => (
            <div key={p._id}>
              <Radio value={p._id}>{p.name}</Radio>
            </div>
          ))}
        </Radio.Group>
          </div>
          {/* price filter */}

         

          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => 
              {
                setProducts('')
                setRadio(e.target.value)
              }
            }>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className=" add-to-cart btn ms-1"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        
        <div className="col-md-9 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
        
          {
            products?.length>0?
              <React.Fragment>
              {products?.map((p) => (
                <div  className="card m-2" key={p._id}>
                
                  <img onClick={() => navigate(`/product/${p.slug}`)} 
                    src={`https://fashion-fusion-backend.onrender.com/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{background:"#D3D3D3"}}
                  />
                  
                  <div className="card-body">
                  <h5 onClick={() => navigate(`/product/${p.slug}`)}  className="card-title">{p.name}</h5>
                    <div className="card-name-price">
  
                      <h5 className="card-title card-price-discount">
                        ${p.price}
                      </h5>
                      <h5 className="card-title card-price-original">
                      ${(p.price)*1.25}
                      </h5>
                    </div>
                    <p onClick={() => navigate(`/product/${p.slug}`)}  className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                     
                      <button
                        className="add-to-cart btn ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </React.Fragment>
              :
              <Shimmer/>
          }
         
          
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  if(checked && radio)
                  {
                    setPage(1);
                  }
                  else{
                    setPage(page + 1);
                  }
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;






