import Layout from "./../components/Layout/Layout";
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
