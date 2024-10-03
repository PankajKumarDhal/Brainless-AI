import React from "react";
import style from "./footer.module.css";
// import { viteLogo } from "/vite.svg";
import viteLogo from "/vite.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footercontainer}>
          <div className={style.footerleft}>
            <div className={style.logo}>
              <img
                src="https://www.brainlessai.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbl-logo-curved.2d260ddc.png&w=1080&q=75"
                alt="BrainlessAI Logo"
              />
              <span>BrainlessAI</span>
            </div>
            <div className={style.socialicons}>
              <a href="#">
                <FaInstagram />

                {/* <img src="instagram-icon.png" alt="Instagram" /> */}
              </a>
              <a href="#">
                <FaLinkedin />
                {/* <img src="linkedin-icon.png" alt="LinkedIn" /> */}
              </a>
              <a href="#" >
              <FaDiscord />
                {/* <img src="discord-icon.png" alt="Discord" /> */}
              </a>
            </div>
          </div>

          <div className={style.footerright}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">AI Dub</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Recent Generation</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.footerbottom}>
          <p>© Brainless-AI 2024</p>
          <div className={style.legallinks}>
            <a href="#">Terms and Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
