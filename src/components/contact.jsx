import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Footer from "../page/footer";
import Navbar from "../page/navbar";
import ContactUs from "../page/contactcard";


function Contact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
      {/* <AudioSampleSelector /> */}
    </>
  );
}

export default Contact;
