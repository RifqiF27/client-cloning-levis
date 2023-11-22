import './Footer.css'
import logo from '../assets/logo.png'
import {Outlet} from 'react-router-dom'
const Footer = () => {
  return ( 
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
      <div className="footer-bottom">
        &copy; 2023 Your Company. All rights reserved.
      </div>
      {/* <Outlet/> */}
    </footer>
    </>
  );
}

export default Footer;
