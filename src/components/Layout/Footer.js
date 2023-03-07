import React from "react";
import { Layout,Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import { BsFacebook,BsInstagram} from "react-icons/bs";


const Footer = () => {
  return (
    <Layout class="ant-layout-footer" style={{ textAlign: 'center' }}>
    <Row >
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </Col>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Return Policy</a></li>
        </ul>
      </Col>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <h3>Contact Us</h3>
        <ul>
          <li>123 Main Street</li>
          <li>Anytown, USA 12345</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@example.com</li>
        </ul>
      </Col>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <h3>Follow Us</h3>
        <ul>
          <li><a class="bounce" href="#"><BsFacebook/></a></li>
          <li><a class="bounce" href="#"><AiFillTwitterCircle/></a></li>
          <li><a class="bounce" href="#"> <BsInstagram/></a></li>
          <li><a class="bounce" href="#"><AiFillLinkedin/></a></li>
        </ul>
      </Col>
    </Row>
    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
  </Layout>
  );
};

export default Footer;
