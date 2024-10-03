import { useState } from "react";
// import reactLogo from "./assets/react.svg"
import Footer from "../page/footer";
import Navbar from "../page/navbar";
import Price from "../page/price";


function Pricing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Price />
      <Footer />
    </>
  );
}

export default Pricing;
