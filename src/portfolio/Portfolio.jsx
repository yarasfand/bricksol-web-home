import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useSpring, animated } from "@react-spring/web";
import "./portfolio.css";

// Custom hook to use Intersection Observer
const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
      if (callback) {
        callback(entry.isIntersecting);
      }
    }, options);

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [targetRef, options, callback]);

  return [targetRef, isIntersecting];
};

// Custom hook to get screen width
const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

function Portfolio() {
  const screenWidth = useScreenWidth();
  const [scrollX, setScrollX] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [portfolioRef, isIntersecting] = useIntersectionObserver((isVisible) => {
    console.log(
      isVisible
        ? "PorfolioContainerDiv is in view"
        : "PorfolioContainerDiv is out of view"
    );
  });
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    if (screenWidth > 800) {
      const handleWheel = (event) => {
        if (portfolioRef.current && portfolioRef.current.contains(event.target) && isMouseInside) {
          setScrollX((prevScrollX) => {
            let newScrollX = prevScrollX - event.deltaY * 0.1;
            console.log(newScrollX);

            if (newScrollX > -60 && newScrollX < 40) {
              document.body.classList.add("no-scroll");
            } else {
              document.body.classList.remove("no-scroll");
            }
            newScrollX = Math.max(-60, Math.min(newScrollX, 40));

            return newScrollX;
          });
        } else {
          document.body.classList.remove("no-scroll");
        }
      };

      window.addEventListener("wheel", handleWheel);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        document.body.classList.remove("no-scroll"); // Clean up class on unmount
      };
    }
  }, [portfolioRef, screenWidth, isMouseInside]);

  const horizontalTransform = scrollX;

  const [cursorVariant, setCursorVariant] = useState("default");

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    if (screenWidth > 800) {
      const handleMouseMove = (e) => {
        api.start({ x: e.clientX - 16, y: e.clientY - 16, immediate: false });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [api, screenWidth]);

  const variants = {
    default: {},
    text: {
      height: 150,
      width: 150,
      fontSize: 18,
      color: "#ffff",
      backgroundColor: 'rgba(0, 0, 0,0.1)',
      backdropFilter: 'blur(14px)',
      padding: 20,
      fontFamily: 'Syne ',
      fontWeight: 600,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const videoLinks = [
    "https://youtu.be/4AfLe4_iO5Q?si=uXzbkrogsatB_miL",
    "https://youtu.be/j7TgOWjEau4?si=Sk9WFOxO0xKYC-yI",
    "https://youtu.be/bp-4eiCn6Co?si=CPhZ61ZFOFK2AuUw",
    "https://youtu.be/RQfLQp0PKZQ?si=SeKfRwW0SsR6Nl9S",
  ];

  return (
    <div
      className="PorfolioContainer"
      ref={portfolioRef}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      {screenWidth > 800 && (
        <animated.div
          className="cursor"
          style={{ x, y, ...variants[cursorVariant] }}
        >
          {cursorVariant === "text" && "Watch Full Video"}
        </animated.div>
      )}
      <div
        className="PorfolioContainerDiv"
        style={{ transform: screenWidth > 800 ? `translateX(${horizontalTransform}%)` : 'none' }}
      >
        {[
          "/project4.mp4",
          "/project3.mp4",
          "/project2.mp4",
          "/project1.mp4",
        ].map((url, index) => (
          <div
            key={index}
            className="PorfolioContainerVideo"
           
          >
            <div className="PorfolioContainerVideoAnchor">
            <a
             onMouseEnter={() => {
              if (screenWidth > 800) {
                setPlayingIndex(index);
                textEnter();
              }
            }}
            onMouseLeave={() => {
              if (screenWidth > 800) {
                setPlayingIndex(null);
                textLeave();
              }
            }}
              href={videoLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="PorfolioContainerVideoLink"
            >
              <ReactPlayer
                className="react-player"
                playing={screenWidth < 800 || playingIndex === index}
                loop
                muted
                url={url}
                width="100%"
                height="100%"
               
              />
            </a>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Portfolio;
