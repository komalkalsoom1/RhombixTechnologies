import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const Skills = () => {
  const skillIcons = [
    { name: 'React', icon: <FaReact size={50} />, color: '#61DAFB' },
    { name: 'HTML', icon: <FaHtml5 size={50} />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt size={50} />, color: '#2965F1' },
    { name: 'JavaScript', icon: <FaJs size={50} />, color: '#F7DF1E' },
    { name: 'Node.js', icon: <FaNodeJs size={50} />, color: '#8CC84B' },
    { name: 'MongoDB', icon: <DiMongodb size={50} />, color: '#4DB33D' },
  
  ];

  return (
    <div id='skills' className="min-h-screen bg-black text-white">
      {/* Skills Section */}
      <div className="skills-container flex flex-wrap justify-center items-center p-10">
        {skillIcons.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center mx-6 mb-10"
          >
            <div
              className="skill-icon transition transform hover:scale-110"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-xl">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Education and Courses Section */}
      <div className="p-10">
        <div className="flex flex-col flex-wrap justify-center items-center gap-10">
          {/* Education Section */}
          <div className="w-full md:w-[48%]">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-lg">
              I'm Komal Kalsoom, I have completed my BSc in Computer Science from GC University Faisalabad (2014-2018).
            </p>
          </div>

          {/* Courses Section */}
          <div className="w-full md:w-[48%]">
            <h2 className="text-3xl font-bold mb-4">Courses</h2>
            <ul className="list-disc pl-5">
              <li className="text-lg">
                MERN Stack Development Bootcamp from Stack Development Bootcamp with FRAG Games, Techlift, PSEB, P@SHA, and CONTOUR Software.
              </li>
              <li className="text-lg mt-2">
                Frontend Development Certification from e-Rozgaar Program by PITB.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
