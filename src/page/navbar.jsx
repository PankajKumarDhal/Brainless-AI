import React from "react";
import style from "./project.module.css";
// import { viteLogo } from "/vite.svg";
import viteLogo from "/vite.svg";
import { FaDisease } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from './../components/contact';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <img
              src="https://www.brainlessai.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbl-logo-curved.2d260ddc.png&w=1080&q=75"
              alt="BrainlessAI Logo"
            />
            <span>BrainlessAI</span>
          </div>
          <ul className={style.navlinks}>
            <li>
              <Link to="/">Home</Link>

            </li>
            <li>
              {/* <a href="#">About</a> */}
              <Link to="/About">About</Link>

            </li>
            <li>
              {/* <a href="#">Contact</a> */}
              <Link to="/Contact">Contact</Link>

            </li>
            <li>
              {/* <a href="#">Pricing</a> */}
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
          <button className={style.gotoapp}>Go To App     <FaDisease size={20}/></button>
        </nav>
        <hr />
      </header>

      {/* <section className={style.hero}>
        <h1>Create professional quality voice overs for video content</h1>
        <p>
          Automatically dub over any video with a voiceover that matches the
          original language and tone
        </p>
        <div className={style.ctabuttons}>
          <button className={style.getstarted}>Get Started</button>
          <button className={style.joindiscord}>Join Discord</button>
        </div>
      </section> */}
    </>
  );
};

export default Navbar;
