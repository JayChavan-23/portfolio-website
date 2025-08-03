import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import React from "react";

export const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const extraCard1Ref = useRef(null);
  const extraCard2Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
      extraCard1Ref.current,
      extraCard2Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
              Event Sphere (Event Discovery Platform)
              </h2>
              <p className="text-white-50 md:text-xl">
              A web platform enabling users to search and explore events by integrating data from external
              APIs, delivering up-to-date information on concerts, workshops, and social gatherings.
              </p>
              <button 
                onClick={() => window.open('https://github.com/JayChavan-23/EventSphere', '_blank')}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Github
              </button>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#D7D4FF]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Movies and TV Shows Recommendation System</h2>
              <button 
                onClick={() => window.open('https://github.com/JayChavan-23/movie_website', '_blank')}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Github
              </button>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#D3FFC8]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Teaching In-Context Learning to Large Language Models</h2>
              <button 
                onClick={() => window.open('https://github.com/JayChavan-23/Research-On-LLM-s', '_blank')}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Github
              </button>
            </div>
          </div>
        </div>
        <div className="second-container flex flex-col sm:flex-row justify-center gap-[106px] mt-8">
          <div
            ref={extraCard1Ref}
            className="thirdcard justify-items-center justify-center"
          >
            <div className="image-wrapper justify-center justify-items-center bg-[#FFFBAA] rounded-xl">
              <img
                width="65%"
                src="/images/project4.png"
                alt="Library Management Platform"
              />
            </div>
            <h2 className="text-white font-bold">Groceries Association Rule (Apriori Algorithm)</h2>
            <button 
              onClick={() => window.open('https://github.com/JayChavan-23/Groceries-Association-Rule-Apriori-Algorithm-', '_blank')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Github
            </button>
          </div>

          <div
            ref={extraCard2Ref}
            className="fouthcard justify-center justify-items-center"
          >
            <div className="image-wrapper justify-center justify-items-center bg-[#B9FFFF] rounded-xl">
              <img
                width="65%"
                src="/images/project5.png"
                alt="Library Management Platform"
              />
            </div>
            <h2 className="text-white font-bold">Forecast Energy Consumption (Time Series Analysis)</h2>
            <button 
              onClick={() => window.open('https://github.com/JayChavan-23/Forecast-Energy-Consumption-Time-Series-Forecasting-', '_blank')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
