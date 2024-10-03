import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
// import Navbar from "./src/page/navbar";
import Main from "../page/main";
import Video from "../page/video";
import Footer from "../page/footer";
import Navbar from "../page/navbar";


function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
      <Video />
      <Footer />
      {/* <AudioSampleSelector /> */}
    </>
  );
}

export default Home;
