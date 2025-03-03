"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter, SiDart } from "react-icons/si";
import { Star, Sparkles, Circle } from "lucide-react";

// Data Skills
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 drop-shadow-lg" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 drop-shadow-lg" size={50} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 drop-shadow-lg" size={50} /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 drop-shadow-lg" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black drop-shadow-lg" size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 drop-shadow-lg" size={50} /> },
  { name: "Dart", icon: <SiDart className="text-blue-600 drop-shadow-lg" size={50} /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-600 drop-shadow-lg" size={50} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mt-20 py-16 px-6 md:px-12 bg-gray-100 text-center overflow-hidden">
      {/* Dekorasi Floating */}
      <motion.div className="absolute top-8 left-12 text-yellow-400 opacity-60 w-6 h-6 md:w-8 md:h-8">
        <Star />
      </motion.div>
      <motion.div className="absolute top-16 right-16 text-blue-400 opacity-50 w-10 h-10 md:w-14 md:h-14">
        <Sparkles />
      </motion.div>
      <motion.div className="absolute bottom-20 left-20 text-gray-300 opacity-40 w-14 h-14 md:w-20 md:h-20">
        <Circle />
      </motion.div>
      <motion.div className="absolute bottom-10 right-12 text-pink-400 opacity-50 w-6 h-6 md:w-8 md:h-8">
        <Star />
      </motion.div>
      <motion.div className="absolute top-40 left-1/2 text-green-400 opacity-50 w-8 h-8 md:w-12 md:h-12">
        <Sparkles />
      </motion.div>

      {/* Judul Section */}
      <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>
        My Skills 🚀
      </motion.h2>

      {/* Grid Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <p className="mt-3 text-sm md:text-lg font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
