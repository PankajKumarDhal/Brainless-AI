import React from "react";
import style from "./aboutcard.module.css";
// import { viteLogo } from "/vite.svg";
import viteLogo from "/vite.svg";
// import { FaDisease } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Aboutcard = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>About Us</h1>

        <p className={style.description}>
          We're here to make your Digital Content accessible to Everyone. At
          BrainlessAI, we revolutionize the way videos are dubbed using
          cutting-edge artificial intelligence technology.
        </p>

        <ul className={style.list}>
          <li className={style.listItem}>
            Make high-quality dubbing accessible and effortless
          </li>
          <li className={style.listItem}>Eliminate language barriers</li>
          <li className={style.listItem}>
            Deliver seamless and natural-sounding voiceovers
          </li>
          <li className={style.listItem}>
            Bring content to life for audiences worldwide
          </li>
        </ul>
        <div className={style.teamSection}>
          <h2>Meet the Team</h2>
          <div className={style.teamContainer}>
            <div className={style.teamCard}>
              <img
                src="https://www.brainlessai.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsatya.6175d067.jpg&w=640&q=75" // Replace with actual image URL
                alt="Priyanshu Patel"
                className={style.profileImage}
              />
              <h3 className={style.role}>Co-Founder</h3>
              <h2 className={style.name}>Priyanshu Patel</h2>
              <p className={style.description}>
                Backend Developer & AI Engineer
              </p>
              <div className={style.socialLinks}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:someone@example.com">
                  <MdEmail size={31} />
                </a>
              </div>
            </div>

            
            <div className={style.teamCard}>
              <img
                src="https://www.brainlessai.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpriyanshu.347a94ba.jpg&w=1920&q=75" // Replace with actual image URL
                alt="Satya Dewangan"
                className={style.profileImage}
              />
              <h3 className={style.role}>Contributor</h3>
              <h2 className={style.name}>Satya Dewangan</h2>
              <p className={style.description}>
                Full Stack Developer & AI Engineer
              </p>
              <div className={style.socialLinks}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:someone@example.com">
                  <MdEmail size={31} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Description */}
          <p className={style.bottomDescription}>
            Whether for entertainment, education, or business, BrainlessAI is
            your go-to partner for all your video dubbing needs, making the
            process smart, simple, and hassle-free.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutcard;
