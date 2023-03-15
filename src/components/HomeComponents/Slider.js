import React from 'react'
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const navigate = useNavigate();

  return (
    <div>
     {/*Slider Start*/}
     <div id="header-carousel" className="carousel slide" data-ride="carousel" >
     <div className="carousel-inner">
       <div className="carousel-item active" style={{height: 410}}>
         <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678712248469mVlryo.png" alt="mage" />
         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
           <div className="p-3" style={{maxWidth: 700}}>
             <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
             <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
             <a onClick={() => navigate("/product-page")} href className="btn btn-light py-2 px-3">Shop Now</a>
           </div>
         </div>
       </div>
       <div className="carousel-item" style={{height: 410}}>
         <img className="img-fluid" src="https://static-sellercentral.shopperr.in/images/supplier/61da9c8a124b4f0eed89a895/2023/21/1678712248477jJ6hSV.png" alt="mage" />
         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
           <div className="p-3" style={{maxWidth: 700}}>
             <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
             <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
             <a href className="btn btn-light py-2 px-3">Shop Now</a>
           </div>
         </div>
       </div>
     </div>
     <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
       <div className="btn btn-dark" style={{width: 45, height: 45}}>
         <span className="carousel-control-prev-icon mb-n2" />
       </div>
     </a>
     <a className="carousel-control-next" href="#header-carousel" data-slide="next">
       <div className="btn btn-dark" style={{width: 45, height: 45}}>
         <span className="carousel-control-next-icon mb-n2" />
       </div>
     </a>
   </div>
   
        {/*Slider End*/}
    </div>
  )
}

export default Slider