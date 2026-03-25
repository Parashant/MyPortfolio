import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import photo from "../assets/photo.png";
import "animate.css/animate.min.css";
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Programming", "Software Development", "Web Development"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    let timeoutId = null;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(true), 150); 
          } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(false), 150);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
  
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);
  

  return (
    <div
  id="Home"
  className="lg:pl-10 min-w-full min-h-screen bg-black grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:items-center sm:justify-items-center md:items-center "
>
  <div className=" relative sm:text-left sm:max-w-fit sm:pt-[25%] lg:pt-0  lg:pl-[25%] sm:pl-0  justify-center  ">
    <h3 className={`text-3xl md:text-4xl font-bold text-white ${isVisible ? "animate__animated animate__fadeInDown" : ""}`}>
      Hello, It's Me
    </h3>
    <h1
      ref={headerRef}
      className={`text-5xl sm:text-8xl text-nowrap   font-extrabold text-white mt-2 ${
        isVisible ? "animate__animated animate__fadeInLeft" : ""
      }`}
    >
      Parashant Kumar
    </h1>
    <h4 className={`text-xl sm:text-3xl font-bold text-white mt-4  ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
      Full Stack Developer | Building modern web applications <br />
      passionate in{" "}
      <span className="text-cyan-400 text-2xl sm:text-4xl animate__delay-2s " ref={textRef}></span>
    </h4>

        <div className="mt-8 flex justify-start sm:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/parashant-kumar-056b332b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
          >
            <i className="bx bxl-linkedin bx-md"></i>
          </a>
          <a
            href="https://github.com/Parashant"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
          >
            <i className="bx bxl-github bx-md"></i>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-1 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition group"
          >
            <svg
              xmlns="/"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="Leetcode"
              className="w-8 h-8"
            >
              <path
                d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
                className="fill-current text-[#26c6da] group-hover:text-black transition-colors"
              ></path>
              <path
                d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
                className="fill-current text-[#26c6da] group-hover:text-black transition-colors"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@JOKESFUNPOINTFILMS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
          >
            <i className="bx bxl-youtube bx-md"></i>
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-black shadow-lg hover:shadow-[0px_5px_30px_15px_rgba(0,255,255,0.4)] transition"
          >
            <i className='bx bxl-twitter bx-md'></i>
          </a>
        </div>
         <a
      href="https://drive.google.com/file/d/1__J2phFznb1RfwsRciFY1pwKDhVirBfW/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 lg:text-sm sm:text-2xl px-4 py-2 md:px-6 md:py-3 bg-[#0ef] text-[#081b29] font-semibold shadow-2xl rounded-full hover:shadow-[10px_5px_60px_25px_rgba(0,255,255,0.4)] transition"
    >
      Download Resume
    </a>
  </div>

  <div className="sm:w-fit md:w-5/6 lg:w-8/12 animate-born sm:pb-24 lg:pb-0 ">
    <img
      src={photo}
      alt="Parashant Kumar"
      className="rounded-full ml-16 "
    />
  </div>
</div> 
  );
};

export default Home;
