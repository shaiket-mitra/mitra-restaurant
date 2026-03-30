import { assets } from "../../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Brand Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            numquam dolore id dignissimos fugit culpa alias harum, itaque
            veritatis mollitia. Ab quibusdam voluptatum nemo, doloribus corporis
            dolorum minima dolor ipsa.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="Linkedin Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+8801571515000</li>
            <li>himu.mitra97@gmail.com</li>
            <li></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 © Tometo.com - All Right Reserved
      </p>
    </div>
  );
}
