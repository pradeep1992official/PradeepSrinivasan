import React, { useState } from "react";
import boy2 from "../assets/boy2.png";
import "../App.css";

function About() {
  const config = {
    para: "Entry-level Full-Stack Developer trained in the MERN stack with hands-on experience building responsive web applications and RESTful APIs. Strong fundamentals in JavaScript (ES6+), component-based UI development, authentication, and backend integration, with a focus on clean code, performance, and usability. Gold Medalist in M.E. Mechatronics Engineering with entrepreneurial experience managing business operations and digital platforms.",
  };

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Function to change the active tab
  const opentab = (tab) => {
    setActiveTab(tab);  // Set the active tab
  };

  return (
    <div className="min-h-screen bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image */}
          <img
            src={boy2}
            alt="Pradeep"
            className="w-[10px] h-[600px]  md:w-1/3 rounded-lg mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-2xl mb-8 text-justify">{config.para}</p>

            {/* Tab Buttons */}
            <div className="tab-tiles flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <p
                className={`tab-links px-4 py-2 cursor-pointer ${activeTab === "skills" ? "active-link" : ""
                  }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links px-4 py-2 cursor-pointer ${activeTab === "education" ? "active-link" : ""
                  }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>

            {/* Skills Tab Content */}
            {activeTab === "skills" && (
              <div className="space-y-4 tab-contents active-tab" id="skills">
                {/* Skills Content */}
                {/* <div className="font-bold text-transparent bg-clip-text text-3xl bg-gradient-to-r from-green-400 to-blue-500">Front-End</div> */}
                <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    React JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-100 w-10/12"></div>
                  </div>
                </div>

                {/* <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    JavaScript
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-100 w-11/12"></div>
                  </div>
                </div> */}

                <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    Redux
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-100 w-9/12"></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <label htmlFor="MySQL" className="w-2/12">
                    HTML5/CSS3
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    NodeJS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-100 w-8/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    ExpressJS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-100 w-10/12"></div>
                  </div>
                </div>



              </div>

            )}

            {/* Education Tab Content */}
            {activeTab === "education" && (
              <div className="tab-contents1" id="education">
                <ul>
                  <li>
                    <div className="year mb-2">2016 (Master of Engineering)</div>
                    <div className="education-details">
                      Mechatronics Engineering from Kongu Engineering College, Erode - <b className="text-yellow-300">Gold Medalist</b>
                    </div>
                  </li>
                  <br />
                  <hr />
                  <li>
                    <div className="year mb-2 mt-2">2014 (Bachelor of Engineering)</div>
                    <div className="education-details">
                      Mechatronics Engineering from Maharaja Engineering College, Coimbatore - <b className="text-yellow-300">Distinction</b>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
