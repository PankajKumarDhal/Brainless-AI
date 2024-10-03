import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Footer from "../page/footer";
import Navbar from "../page/navbar";
import Aboutcard from "../page/aboutcard";



function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Aboutcard />
      <Footer />
      {/* <AudioSampleSelector /> */}
    </>
  );
}

export default About;
