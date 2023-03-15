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
import Slider from "../components/HomeComponents/Slider";
import Featured from "../components/HomeComponents/Featured";
import Categories from "../components/HomeComponents/Categories";
import Offers from "../components/HomeComponents/Offers";
import TrendyProducts from "../components/HomeComponents/TrendyProducts";
import Subscribe from "../components/HomeComponents/Subscribe";
import JustArrivedProducts from "../components/HomeComponents/JustArrivedProducts";

const HomePage = () => {
  return (
    <Layout title={"Landing Page"}>
    <Slider />
    <Featured />
    <Categories />
    <Offers />
    <TrendyProducts />
    <Subscribe />
    <JustArrivedProducts />
    </Layout>
  );
};

export default HomePage;
