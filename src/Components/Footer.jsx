import React from "react";
import "./footer.css";
import AdbIcon from "@mui/icons-material/Adb";
import Shop2Icon from "@mui/icons-material/Shop2";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <div >
          <AdbIcon className="icon" />
        </div>
        <div className="foottext">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            possimus cumque quam quasi ullam, quod repellendus officiis modi
            magni voluptate.
          </p>
        </div>
      </div>
      <div className="foot2">
        <div className="customerservice">
          <h2>Customer Service</h2>

          <ul >
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="foot3">
        <h2>Download App</h2>
        <div >
          <Shop2Icon className="icon"/>
        </div>
      </div>
      <div className="foot4">
        <h2>Get Social</h2>
        <div >
          <InstagramIcon className="icon" />
          <WhatsAppIcon className="icon" />
          <TwitterIcon className="icon"/>
          <LinkedInIcon className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
