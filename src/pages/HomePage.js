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
import Slider from "../components/Slider";

const HomePage = () => {
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
      const { data } = await axios.get("/api/v1/category/get-category");
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
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
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
      const { data } = await axios.get("/api/v1/product/product-count");
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
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
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
      <Slider/>
      {/*Featured Start*/}
     <div className="container-fluid pt-5">
  <div className="row px-xl-5 pb-3">
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
        <h1 className="fa fa-check text-primary m-0 mr-3" />
        <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
        <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
        <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
        <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
        <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
        <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
        <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
      </div>
    </div>
  </div>
</div>
 {/*Featured End*/}
     
 {/*Categories Start*/}
 <div className="container-fluid pt-5">
  <div className="row px-xl-5 pb-3">
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708393319FGZ9Az.png" alt='men' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708495002NYKOS6.png" alt='women' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png" alt='kids' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png" alt='img' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png" alt='img' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Bags</h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
        <p className="text-right">15 Products</p>
        <a href className="cat-img position-relative overflow-hidden mb-3">
          <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678708527182SX2Gx3.png" alt='img' />
        </a>
        <h5 className="font-weight-semi-bold m-0">Shoes</h5>
      </div>
    </div>
  </div>
</div>
{/*Categories End*/}

{/*Offer Start*/}
<div className="container-fluid offer pt-5">
  <div className="row px-xl-5">
    <div className="col-md-6 pb-4">
      <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
        <img src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/16787091913526s1cxd.png" alt="img" />
        <div className="position-relative" style={{zIndex: 1}}>
          <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
          <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
          <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
        </div>
      </div>
    </div>
    <div className="col-md-6 pb-4">
      <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
        <img src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678709303679fsJEx2.png" alt='img' />
        <div className="position-relative" style={{zIndex: 1}}>
          <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
          <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
          <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/*Offer End*/}
    </Layout>
  );
};

export default HomePage;
