import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import js from '../assets/javascript.png'
import Python from '../assets/python.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/mongo-db.png'
import mysql from '../assets/mysql.png'
import cpp from '../assets/s.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'
import vs from '../assets/visual-studio-code.png'
import npm from '../assets/npm.png'
import cmd from '../assets/cmd.png'
import github from '../assets/github 2.png'


const Skills = () => {
  const skills = [
    {skl:'C++', sr: cpp}, 
    {skl:'Phthon', sr: Python}, 
    {skl:'JavaScript', sr: js}, 
    {skl:'HTML', sr: html}, 
    {skl:'CSS', sr: css}, 
    {skl:'Tailwind CSS', sr: tailwind}, 
    {skl:'Bootstrap', sr: bootstrap}, 
    {skl:'React.js', sr: react}, 
    {skl:'Node.js', sr: node}, 
    {skl:'MySQL', sr: mysql}, 
    {skl:'MongoDB', sr: mongo}, 

  ];

  return (
  <>
    <div className=" text-white py-10 ">
       <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={.8}> 
          <h2 className="text-7xl mb-8 mt-10  font-extrabold text-center text-cyan-400 pb-10">
                My Main Skills
          </h2>
     </ScrollAnimation>

      {/* Infinite scrolling container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scrollSmall space-x-4 min-w-full">
          {/* Triple skills list */}
          {[...skills, ...skills,...skills].map((skill, index) => (
            <div className=' shadow-lg hover:scale-110  transition-transform duration-300  min-w-40 min-h-40'>
            <img src={skill.sr} alt={skill} />
            <div
              className="  rounded-lg flex-none px-4 py-2 flex items-center justify-center text-xl font-semibold text-cyan-400  "
              key={index}
            >
              {skill.skl}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div>
    <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={.8}> 
          <h2 className="text-7xl mb-8  font-extrabold text-center text-cyan-400 ">
                Tools
          </h2>
     </ScrollAnimation>

           <div className='flex justify-center gap-5'>
           <img src={vs} alt="VS Code"  className='max-h-32 max-w-32 hover:scale-110  '/>
           <img src={github} alt="GitHub"  className='max-h-32 max-w-32 hover:scale-110 '/>
           <img src={npm} alt="Npm"  className='max-h-32 max-w-32 hover:scale-110 '/>
           <img src={git} alt="Git"  className='max-h-32 max-w-32 hover:scale-110 '/>
           <img src={cmd} alt="Cmd"  className='max-h-32 max-w-32 hover:scale-110 '/>
           </div>

    </div>
    
  </>
  );
};

export default Skills;
