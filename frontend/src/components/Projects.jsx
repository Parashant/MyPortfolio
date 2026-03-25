import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import arr from '../assets/arrow-upper-right.png';
import git from '../assets/github.png';

const Projects = () => {
  const projects = [
      { title: "PK Weather application", 
        description: "A weather application that provides real-time weather updates for any city worldwide. It fetches live data using APIs and displays temperature, humidity, and weather conditions with a clean and responsive user interface.", 
        color: "DC3545", 
        techs: ["React", "JavaScript", "API", "CSS"], 
        src: "https://github.com/Parashant/PK-Weather" },
    { title: "PK Todo-Website", 
      description: "A todo application that allows users to create, update, and delete daily tasks. It uses Node.js and MongoDB for backend data storage and provides a simple and user-friendly interface for task management.", 
      color: "FF5F1F", 
      techs: ["Node.js", "Express.js", "MongoDB", "JavaScript"], 
      src: "https://github.com/Parashant/PK-todo" },
    
    { title: "PK News Website", 
      description: "A News application designed to keep you updated with the latest news from around the world. It offers a clean, responsive design and an engaging user experience for easy access to current events.", 
      color: "0066B2", 
      techs: ["React", "JavaScript", "API", "CSS"], 
      src: "https://github.com/Parashant/PK-News" },
    
    { title: "MyPortfolio", 
      description: "A portfolio website built to showcase individual skills, projects, and accomplishments in a professional and captivating manner. It provides a comprehensive platform to demonstrate expertise, share creative work, and connect with a wider audience and explore new opportunities.", 
      color: "9C27B0", 
      techs: ["TailwindCSS", "ReactJs", ], 
      src: "https://github.com/AnishInGit/myportfolio" },
  ];
  return (
    <section id="project" className="sm:pt-10 lg:pt-0">
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={0.8}>
        <h2 className="text-7xl mb-8 mt-10 font-extrabold text-center text-cyan-400 pb-10">
          My Projects
        </h2>
      </ScrollAnimation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project, index) => (
          <ScrollAnimation
            key={index}
            animateIn={`animate__animated animate__flipInY`}
            delay={index * 100} // Staggered animation
            className="flex justify-center"
          >
            <div
              className="bg-gray-800 text-white rounded-xl p-6 overflow-x-auto flex flex-col transition-transform transform hover:text-black hover:-translate-y-2 w-full"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `#${project.color}`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 1)")} 
            >
              <header className="flex justify-between items-center mb-6 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className='max-w-10 max-h-10' enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="Folder">
                       <path fill="#6be3f2" d="M2.1,57.4h57.7c1.1,0,2.1-0.9,2.1-2.1V13.4c0-1.1-0.9-2.1-2.1-2.1H31c-0.8,0-1.5-0.4-1.8-1.1l-1.7-3.4
		                  c-0.4-0.7-1.1-1.1-1.8-1.1H2.1C0.9,5.7,0,6.6,0,7.8v47.5C0,56.4,0.9,57.4,2.1,57.4z" class="colorf2786b svgShape"></path>
                    <path fill="#47c4d4" d="M3,58.3h56.7c1.1,0,2.1-0.9,2.1-2.1V14.3c0-1.1-0.9-2.1-2.1-2.1H31c-0.8,0-1.5-0.4-1.8-1.1l-1.7-3.4
	                  	c-0.4-0.7-1.1-1.1-1.8-1.1H2.1C0.9,6.6,0,7.6,0,8.7v46.6C0,56.9,1.3,58.3,3,58.3z" class="colord45947 svgShape"></path>
                    <rect width="58.6" height="21.1" x="1.6" y="14.7" fill="#f3f3f3" class="colorf3f3f3 svgShape"></rect>
                    <rect width=".8" height="21.1" x="1.6" y="14.7" fill="#26c6da" class="colore2e2e2 svgShape"></rect>
                    <rect width="58.6" height=".9" x="1.6" y="14.7" fill="#26c6da" class="colore2e2e2 svgShape"></rect>
                    <path fill="#99ecf6" d="M64,18.6v35.8c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3v-31c0-1.7,1.3-3,3-3h29.2c0.8,0,1.6-0.3,2.1-0.9l3-3
	                  	c0.6-0.6,1.3-0.9,2.1-0.9H61C62.7,15.6,64,17,64,18.6z" class="colorf69f99 svgShape"></path>
                    <path fill="#6be3f2" d="M64,19.5v35.8c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3v-31c0-1.7,1.3-3,3-3h29.2c0.8,0,1.6-0.3,2.1-0.9l3-3
	                  	c0.6-0.6,1.3-0.9,2.1-0.9H61C62.7,16.5,64,17.9,64,19.5z" class="colorf2786b svgShape"></path>
              </svg>
                <div className="flex items-center gap-4">
                  <a href={project.src} className="text-blue-400 underline hover:text-blue-300 text-xs sm:text-sm">
                    <img src={git} alt="Github" className='max-w-10 max-h-10' />
                  </a>
                  <a href={project.src} className="text-blue-400 underline hover:text-blue-300 text-xs sm:text-sm">
                    <img src={arr} alt="View Code" className='max-w-8 max-h-8' />
                  </a>
                </div>
              </header>
              <h3 className="text-xl sm:text-xl mb-4 font-bold">{project.title}</h3>
              <p className="text-sm sm:text-base mb-6 tracking-wide">
                {project.description}
                <a href={project.src} className="text-white border-b border-green-500 hover:text-green-500"> here </a>.
              </p>
              <footer className="mt-auto">
                <ul className="flex items-center gap-6 text-xs sm:text-sm opacity-60">
                  {project.techs.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
