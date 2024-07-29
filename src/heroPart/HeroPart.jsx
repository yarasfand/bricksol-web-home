import React, { useEffect, useState } from "react";
import "./heroPart.css";

function HeroPart() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [videoHeight, setVideoHeight] = useState(10);
  const [videoWidth, setVideoWidth] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
      console.log("Page scrolled:", window.pageYOffset);
    };
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log("Window resized:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    if (scrollY < 400 && screenWidth > 800) {
      setVideoHeight(40);
      setVideoWidth(40);
    }

    if (scrollY > 450 && screenWidth > 800) {
      const updateVideoSize = () => {
        if (scrollY > prevScrollY) {
          setVideoHeight((prevHeight) =>
            prevHeight < 99 ? prevHeight + 4 : prevHeight
          );
          setVideoWidth((prevWidth) =>
            prevWidth < 95 ? prevWidth + 3 : prevWidth
          );
        } else if (scrollY < prevScrollY) {
          setVideoHeight((prevHeight) =>
            prevHeight > 30 ? prevHeight - 1 : prevHeight
          );
          setVideoWidth((prevWidth) =>
            prevWidth > 30 ? prevWidth - 1 : prevWidth
          );
        }
        setPrevScrollY(scrollY);
      };

      animationFrameId = requestAnimationFrame(updateVideoSize);
    }

   

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollY, screenWidth]);

  const scale = scrollY > 40 ? 0.8 : 1;
  const transformOrigin = "bottom";
  const borderRadius = scrollY > 40 ? "50px" : "0px";

  let textScale = 15;
  if (scrollY > 600 && screenWidth > 800) {
    textScale = 10;
  } else if (scrollY > 500 && screenWidth > 800) {
    textScale = 10;
  } else if (scrollY > 400 && screenWidth > 800) {
    textScale = 12;
  }

  const heroSectionStyles =
    screenWidth > 800
      ? {
          transform: `scale(${scale})`,
          transformOrigin: transformOrigin,
          transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
          borderRadius: borderRadius,
          zIndex: 1,
          position: "sticky",
          top: "0",
          perspective: "1000px",
        }
      : {};

  const parallexLayer2Styles =
    screenWidth > 800
      ? {
          position: "relative",
          zIndex: 2,
          transition: "transform 0.3s ease-out",
          boxShadow: videoWidth > 90 ? "none" : "100px 0 100px 100px #0d0d0d",
        }
      : {};

  const parallexLayer2DivVideoStyles =
    screenWidth > 800
      ? {
          transition: "transform 0.3s ease-out, margin-top 0.3s ease-out",
            borderRadius: "30px",
          width: `${videoWidth}vw`,
          zIndex: 3,
          position: "relative",
        }
      : {
          borderRadius: "30px",
          width: "90vw",
        };

  return (
    <div className="parallax-container">
      <section
        id="heroSection"
        className="heroSection"
        style={heroSectionStyles}
      >
        <div className="heroSectionDiv">
          <div className="textContainer">
            <h2 className="heroSectionh2 lg:text-7xl sm:text-6xl text-4xl">
              Building Tomorrow, <br /> Digitally Today.
            </h2>
            <p className="heroSectionh2subtitle">
              "Your Partners in Building Immersive Future."
            </p>
          </div>
          <div className="heroSectionButtonDiv">
            <div className="heroSectionButtonInnerDiv">
              <button className="heroSectionButton">
                <span className="heroSectionButtonSpan"></span>
                <p className="heroSectionButtonP">See Projects</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="parallexLayer2"
        className="parallexLayer2"
        style={parallexLayer2Styles}
      >
        <div className="parallexLayer2Div lg:flex lg:flex-col">
          <div className="parallexLayer2Heading">
            <h1
              className="parallexText"
              style={{
                fontSize: `${textScale}vw`,

                marginBottom:
                  videoHeight > 60 ? `-${(videoHeight - 60) * 10}px` : "0px",
              }}
            >
              RUNDOWN
            </h1>
          </div>
          <div className="parallexLayer2DivVideoDiv ">
            <video
              className="parallexLayer2DivVideo"
              src={"/bricksol.mp4"}
              autoPlay
              loop
              muted
              style={parallexLayer2DivVideoStyles}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPart;
