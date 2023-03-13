import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const navigate = useNavigate();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings}>
      <div>
      <img    onClick={() => navigate("/product-page")}
      src="https://vendee.vercel.app/static/media/Carousel1.1a8c7cd4.webp"
      className="banner-img"
      alt="bannerimage"
      width={"100%"}
    />
      </div>
      <div>
      <img   onClick={() => navigate("/product-page")} 
      src="https://vendee.vercel.app/static/media/carousle2.c9025152.jpg"
      className="banner-img"
      alt="bannerimage"
      width={"100%"}
    />
      </div>
      <div>
      <img    onClick={() => navigate("/product-page")}
      src="https://vendee.vercel.app/static/media/carousel5.8d1e54a9.webp"
      className="banner-img"
      alt="bannerimage"
      width={"100%"}
    />
      </div>
    
    </Carousel>
  );
};

export default Slider;
