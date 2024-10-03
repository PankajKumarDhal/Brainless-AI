import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/page/navbar";
import Main from "../src/page/main";
import Video from "../src/page/video";
import Footer from "../src/page/footer";
import Home from "../src/components/home";
import About from "../src/components/about";
import Contact from "../src/components/contact";
import Pricing from "../src/components/pricing";
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
      
        
      </Routes>
    </BrowserRouter>
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
