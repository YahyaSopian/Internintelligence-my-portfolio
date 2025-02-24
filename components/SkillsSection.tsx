"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={60} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={60} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" size={60} /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" size={60} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" size={60} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={60} /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-600" size={60} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="mb-6 py-16 px-6 md:px-12 bg-gray-100 text-center overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills 🚀
      </motion.h2>

      {/* Wrapper untuk efek scrolling */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
