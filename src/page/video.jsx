import React from "react";
// import React, { useState } from "react";
import style from "./video.module.css";
import viteLogo from "/vite.svg";
import { FaDownload } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function changeVideo(videoFile) {
  var video = document.getElementById("video");
  video.src = videoFile;
  video.play();
}

const Video = () => {
  return (
    <>
      <h1>Types of Translation</h1>
      <section className={style.videosection}>
        <div className={style.qualityoptions}>
          <div className={style.option}>
            <h3>CLONING</h3>
            <p>
              Best quality audio sample with best language translation in any
              regional Language
            </p>
            <span>
              Credit used in this sample: <strong>94</strong>
            </span>
          </div>
          <div className={style.option}>
            <h3>HIGH Q. DUBBING</h3>
            <p>
              High quality audio sample which is more affordable with best
              language translation in any regional Language
            </p>
            <span>
              Credit used in this sample: <strong>71</strong>
            </span>
          </div>
          <div className={style.option}>
            <h3>LOW Q. DUBBING</h3>
            <p>
              Good quality audio sample which is most affordable with good
              language translation in any regional Language
            </p>
            <span>
              Credit used in this sample: <strong>35</strong>
            </span>
          </div>
        </div>

        <div className={style.videoplayer}>
          <video
            id="video"
            width="320"
            height="240"
            controls
            poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-sc-fe.s3.ap-south-1.amazonaws.com%2Ftranslation_showcase%2Fted%2Fthumb.jpg&w=750&q=75"
          >
            <source src="../video/6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={style.sampleselector}>
          <h3>Choose Samples</h3>
          <div className={style.samples}>
            <div className={style.sample}>
              <img
                src="../video/9.png"
                alt="Sample 1"
                onclick="changeVideo('../video/6.mp4')"
              />
            </div>
            <div className={style.sample}>
              <img
                src="../video/8.png"
                alt="Sample 2"
                onclick="changeVideo('../video/7.mp4')"
              />
            </div>
          </div>
        </div>

        <div className={style.qualitybuttons}>
          <button>CLONING</button>
          <button>HIGH Q. DUBBING</button>
          {/* <button>LOW Q. DUBBING</button> */}
          {/* <button>ORIGINAL</button> */}
          <button onclick="changeVideo('highq.mp4')">HIGH Q. DUBBING</button>
          <button onclick="changeVideo('lowq.mp4')">LOW Q. DUBBING</button>
          <button onclick="changeVideo('original.mp4')">ORIGINAL</button>
        </div>
        {/* --------------section--------- */}
        <section>
          <div className={style.name}>
            <h1>Recent Generation</h1>
          </div>
          <div className={style.videosection}>
            <div className={style.videocard}>
              <div className={style.videothumbnail}>
                <video
                  controls
                  src="../video/6.mp4"// Replace with actual video URL
                  width="100%"
                  height="auto"
                  poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-dub-in.s3.amazonaws.com%2Fbf22e103-a434-4477-aac6-ae57285be686.jpg&w=1920&q=75"
                >
                  Your browser does not support the video tag.
                </video>
                <div className={style.languagelabels}>
                  <span className={style.langtag}>English</span>
                  <span className={style.langtag}>Hindi</span>
                </div>
              </div>
              <div className={style.videodetails}>
                <h4>0927(4)</h4>
                <div className={style.actionbuttons}>
                  <button className={style.downloadbtn}>
                    <i className={style.fadownload}>
                      <FaDownload />
                    </i>
                  </button>
                  <button className={style.sharebtn}>
                    <i className={style.fashare}>
                      <FaShare />
                    </i>
                  </button>
                </div>
              </div>
            </div>

            <div className={style.videocard}>
              <div className={style.videothumbnail}>
                <video
                  controls
                  src="../video/6.mp4" // Replace with actual video URL
                  width="100%"
                  height="auto"
                  poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-dub-in.s3.amazonaws.com%2F22948f1b-03f4-4481-8460-1bdf289c8539.jpg&w=1920&q=75"
                >
                  Your browser does not support the video tag.
                </video>
                <div className={style.languagelabels}>
                  <span className={style.langtag}>English</span>
                  <span className={style.langtag}>Hindi</span>
                </div>
              </div>
              <div className={style.videodetails}>
                <h4>0927(4)</h4>
                <div className={style.actionbuttons}>
                  <button className={style.downloadbtn}>
                    <i className={style.fadownload}>
                      <FaDownload />
                    </i>
                  </button>
                  <button className={style.sharebtn}>
                    <i className={style.fashare}>
                      <FaShare />
                    </i>
                  </button>
                </div>
              </div>
            </div>

            <div className={style.videocard}>
              <div className={style.videothumbnail}>
                <video
                  controls
                  src="../video/6.mp4" // Replace with actual video URL
                  width="100%"
                  height="auto"
                  poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-sc-fe.s3.ap-south-1.amazonaws.com%2Fshade_zahrai%2Ftrimmed_thumb_0.jpg&w=1920&q=75"
                >
                  Your browser does not support the video tag.
                </video>
                <div className={style.languagelabels}>
                  <span className={style.langtag}>English</span>
                  <span className={style.langtag}>Hindi</span>
                </div>
              </div>
              <div className={style.videodetails}>
                <h4>0927(4)</h4>
                <div className={style.actionbuttons}>
                  <button className={style.downloadbtn}>
                    <i className={style.fadownload}>
                      <FaDownload />
                    </i>
                  </button>
                  <button className={style.sharebtn}>
                    <i className={style.fashare}>
                      <FaShare />
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className={style.videocard}>
              <div className={style.videothumbnail}>
                <video
                  controls
                  src="../video/6.mp4" // Replace with actual video URL
                  width="100%"
                  height="auto"
                  poster="https://www.brainlessai.in/_next/image?url=https%3A%2F%2Fbl-ai-dub-in.s3.amazonaws.com%2Ffd6c29d6-ea47-4d9c-8640-eb40a4b1ab06.jpg&w=1920&q=75"
                >
                  Your browser does not support the video tag.
                </video>
                <div className={style.languagelabels}>
                  <span className={style.langtag}>English</span>
                  <span className={style.langtag}>Hindi</span>
                </div>
              </div>
              <div className={style.videodetails}>
                <h4>0927(4)</h4>
                <div className={style.actionbuttons}>
                  <button className={style.downloadbtn}>
                    <i className={style.fadownload}>
                      <FaDownload />
                    </i>
                  </button>
                  <button className={style.sharebtn}>
                    <i className={style.fashare}>
                      <FaShare />
                    </i>
                  </button>
                </div>
              </div>
            </div>

            <div className={style.showmore}>
              <button>Show More</button>
            </div>
          </div>
        </section>

        {/* -------------price -------------*/}
        <section>
          <h1>Pricing</h1>
          <div className={style.pricingcontainer}>
            <div className={style.pric}>
              <p>
                Our flexible pricing plans cater to your specific needs,
                ensuring top-quality dubbing services without breaking the bank.
                Whether you're a small-scale production or a major studio, we
                offer competitive rates and customizable packages to fit your
                budget.
              </p>

              <div className={style.togglecontainer}>
                <button className={style.togglebtn}>Monthly</button>
                <button className={style.togglebtn}>
                  Yearly (1 Month Free)
                </button>
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
      </section>
    </>
  );
};

export default Video;

// function Video() {
//     const [videoSource, setVideoSource] = useState("../video/6.mp4");

//     const changeVideo = (videoFile) => {
//       setVideoSource(videoFile);
//     };

//     return (
//       <div className={style.videosection}>
//         {/* Quality Options */}
//         <div className={style.qualityoptions}>
//           <div className={style.option}>
//             <h3>CLONING</h3>
//             <p>Best quality audio sample with best language translation in any regional Language</p>
//             <span>Credit used in this sample: <strong>94</strong></span>
//           </div>
//           <div className={style.option}>
//             <h3>HIGH Q. DUBBING</h3>
//             <p>High quality audio sample which is more affordable with best language translation in any regional Language</p>
//             <span>Credit used in this sample: <strong>71</strong></span>
//           </div>
//           <div className={style.option}>
//             <h3>LOW Q. DUBBING</h3>
//             <p>Good quality audio sample which is most affordable with good language translation in any regional Language</p>
//             <span>Credit used in this sample: <strong>35</strong></span>
//           </div>
//         </div>

//         {/* Video Player */}
//         <div className={style.videoplayer}>
//           <video width="320" height="240" controls>
//             <source src={videoSource} type="../video/6.mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Sample Selector */}
//         <div className={style.sampleselector}>
//           <h3>Choose Samples</h3>
//           <div className={style.samples}>
//             <div className={style.sample}>
//               <img
//                 src="sample1.jpg"
//                 alt="Sample 1"
//                 onClick={() => changeVideo("../video/6.mp4")}
//               />
//             </div>
//             <div className={style.sample}>
//               <img
//                 src="sample2.jpg"
//                 alt="Sample 2"
//                 onClick={() => changeVideo("../video/6.mp4")}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Quality Buttons */}
//         <div className={style.qualitybuttons}>
//           <button onClick={() => changeVideo("cloning.mp4")}>CLONING</button>
//           <button onClick={() => changeVideo("highq.mp4")}>HIGH Q. DUBBING</button>
//           <button onClick={() => changeVideo("lowq.mp4")}>LOW Q. DUBBING</button>
//           <button onClick={() => changeVideo("original.mp4")}>ORIGINAL</button>
//         </div>
//       </div>
//     );
//   }

//   export default Video;
