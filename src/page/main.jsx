import React from "react";
import style from "./project.module.css";
// import { viteLogo } from "/vite.svg";
import viteLogo from "/vite.svg";
// import { RU } from "country-flag-icons/react/3x2";
import { FaDiscord } from "react-icons/fa";
// import US from 'country-flag-icons/react/3x2/US'
import Flag from "react-world-flags";

const Main = () => {
  return (
    <>
      <section className={style.hero}>
        <h1>
          Create professional quality voice <br />
          overs for video content
        </h1>
        <p>
          Automatically dub over any video with a voic eover that matches the
          original language and tone
        </p>
        <div className={style.ctabuttons}>
          <button className={style.getstarted}>Get Started</button>
          <button className={style.joindiscord}>
            <FaDiscord size={15} />
            Join Discord
          </button>
        </div>
      </section>

      <section className={style.creditssection}>
        <p>🎉 300 Credits Free for All New Users</p>
        <button className={style.claimbtn}>Claim Now</button>
      </section>

      <section className={style.videosection}>
        <div className={style.videocontainer}>
          <video
            id="videoPlayer"
            width="600"
            controls
            poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-sc-fe.s3.ap-south-1.amazonaws.com%2Ffcc_sele%2Fthumb.png&w=750&q=75"
          >
            <source src="../video/01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={style.languageoptions}>
        <button className={style.langbtn}>
            <Flag code="US" style={{ width: "20px", marginRight: "8px" }} />
            ORIGINAL
          </button>
          <button className={style.langbtn}>
            <Flag code="IN" style={{ width: "20px", marginRight: "8px" }} />
            INDIA
          </button>
          <button className={style.langbtn}>
            <Flag code="RU" style={{ width: "20px", marginRight: "8px" }} />
            RUSSIAN
          </button>
          <button className={style.langbtn}>
            <Flag code="DE" style={{ width: "20px", marginRight: "8px" }} />
            GERMAN
          </button>
          <button className={style.langbtn}>
            <Flag code="IT" style={{ width: "20px", marginRight: "8px" }} />
            ITALIAN
          </button>
          <button className={style.langbtn}>
            <Flag code="ES" style={{ width: "20px", marginRight: "8px" }} />
            SPANISH
          </button>
          <button className={style.langbtn}>
            <Flag code="KR" style={{ width: "20px", marginRight: "8px" }} />
            KOREAN
          </button>
        </div>

        {/* <div className={style.languageoptions}>
          <button className={style.langbtn}>
            ORIGINAL
          </button>
          <button className={style.langbtn}> HINDI</button>
          <button className={style.langbtn}>🇷🇺 RUSSIAN</button>
          <button className={style.langbtn}>🇩🇪 GERMAN</button>
          <button className={style.langbtn}>🇮🇹 ITALIAN</button>
          <button className={style.langbtn}>🇪🇸 SPANISH</button>
          <button className={style.langbtn}>🇰🇷 KOREAN</button>
        </div> */}

        <p className={style.supportinfo}>With Multi Language Support</p>
        <p className={style.description}>
          Wide range of Language support with Best in class Audio Samples
        </p>
      </section>

      <section className={style.howitworks}>
        <h2>How it works</h2>
        <div className={style.stepscontainer}>
          <div className={style.step}>
            <img src="../video/2.png" alt="Upload Icon" />
            <h3>Upload a Video</h3>
            <p>Upload the video you want to dub.</p>
          </div>
          <div className={style.step}>
            <img src="../video/3.png" alt="Translation Type Icon" />
            <h3>Select Translation Type</h3>
            <p>
              Choose between dubbing (AI-generated voice) or cloning (matching
              original speaker's voice).
            </p>
          </div>
          <div className={style.step}>
            <img src="../video/4.png" alt="Pick a Language Icon" />
            <h3>Pick a Language</h3>
            <p>Select the target language for translation.</p>
          </div>
          <div className={style.step}>
            <img src="../video/5.png" alt="Translated Video Icon" />
            <h3>Translated Video</h3>
            <p>
              Get the translated video with high-quality audio in your chosen
              language.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
