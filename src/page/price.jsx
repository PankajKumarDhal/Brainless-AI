import React from "react";
import style from "./price.module.css";
// import { viteLogo } from "/vite.svg";
import viteLogo from "/vite.svg";
import { FaDisease } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "./../components/contact";

const Price = () => {
  return (
    <>
      <section>
        <h1>Pricing</h1>
        <div className={style.pricingcontainer}>
          <div className={style.pric}>
            <p>
              Our flexible pricing plans cater to your specific needs, ensuring
              top-quality dubbing services without breaking the bank. Whether
              you're a small-scale production or a major studio, we offer
              competitive rates and customizable packages to fit your budget.
            </p>

            <div className={style.togglecontainer}>
              <button className={style.togglebtn}>Monthly</button>
              <button className={style.togglebtn}>Yearly (1 Month Free)</button>
            </div>
          </div>
          <div className={style.plan}>
            <h3>Always Free</h3>
            <p className={style.price}>Free</p>
            <p>for two videos</p>
            <button>Get started</button>
            <ul>
              <li>✓ 300 Credits</li>
              <li>✓ Approx 8 min of Low Q. Dubbing</li>
              <li>✓ Approx 4 min of High Q. Dubbing</li>
              <li>✓ No Cloning Service</li>
            </ul>
          </div>

          <div className={style.plan}>
            <h3>Tester</h3>
            <p className={style.discount}>40% off</p>
            <p className={style.price}>
              ₹509 <span className={style.oldprice}>₹849</span>
            </p>
            <p>₹5603 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 1000 Credits</li>
              <li>✓ Approx 27 min of Low Q. Dubbing</li>
              <li>✓ Approx 13 min of High Q. Dubbing</li>
              <li>✓ Approx 10 min of Cloning</li>
            </ul>
          </div>

          <div className={style.plan}>
            <h3>Standard</h3>
            <p className={style.discount}>45% off</p>
            <p className={style.price}>
              ₹1869 <span className={style.oldprice}>₹3399</span>
            </p>
            <p>₹20563 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 4500 Credits</li>
              <li>✓ Approx 121 min of Low Q. Dubbing</li>
              <li>✓ Approx 60 min of High Q. Dubbing</li>
              <li>✓ Approx 45 min of Cloning</li>
            </ul>
          </div>

          <div className={style.plan}>
            <h3>Creator</h3>
            <p className={style.discount}>50% off</p>
            <p className={style.price}>
              ₹4249 <span className={style.oldprice}>₹8499</span>
            </p>
            <p>₹46744 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 12500 Credits</li>
              <li>✓ Approx 337 min of Low Q. Dubbing</li>
              <li>✓ Approx 167 min of High Q. Dubbing</li>
              <li>✓ Approx 125 min of Cloning</li>
            </ul>
          </div>

          <div className={style.plan}>
            <h3>Creator</h3>
            <p className={style.discount}>50% off</p>
            <p className={style.price}>
              ₹4249 <span className={style.oldprice}>₹8499</span>
            </p>
            <p>₹46744 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 12500 Credits</li>
              <li>✓ Approx 337 min of Low Q. Dubbing</li>
              <li>✓ Approx 167 min of High Q. Dubbing</li>
              <li>✓ Approx 125 min of Cloning</li>
            </ul>
          </div>
          <div className={style.plan}>
            <h3>Creator</h3>
            <p className={style.discount}>50% off</p>
            <p className={style.price}>
              ₹4249 <span className={style.oldprice}>₹8499</span>
            </p>
            <p>₹46744 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 12500 Credits</li>
              <li>✓ Approx 337 min of Low Q. Dubbing</li>
              <li>✓ Approx 167 min of High Q. Dubbing</li>
              <li>✓ Approx 125 min of Cloning</li>
            </ul>
          </div>
          <div className={style.plan}>
            <h3>Creator</h3>
            <p className={style.discount}>50% off</p>
            <p className={style.price}>
              ₹4249 <span className={style.oldprice}>₹8499</span>
            </p>
            <p>₹46744 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 12500 Credits</li>
              <li>✓ Approx 337 min of Low Q. Dubbing</li>
              <li>✓ Approx 167 min of High Q. Dubbing</li>
              <li>✓ Approx 125 min of Cloning</li>
            </ul>
          </div>
          <div className={style.plan}>
            <h3>Creator</h3>
            <p className={style.discount}>50% off</p>
            <p className={style.price}>
              ₹4249 <span className={style.oldprice}>₹8499</span>
            </p>
            <p>₹46744 if billed annually</p>
            <button>Get started</button>
            <ul>
              <li>✓ 12500 Credits</li>
              <li>✓ Approx 337 min of Low Q. Dubbing</li>
              <li>✓ Approx 167 min of High Q. Dubbing</li>
              <li>✓ Approx 125 min of Cloning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
