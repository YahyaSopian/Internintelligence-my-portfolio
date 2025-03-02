"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Data Projects
const projects = [
  {
    title: "Learn Programming App",
    image: "/projects/learnprogrammingapp.png",
    description: "An app for learning programming built with Flutter.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/YahyaSopian/learn-programming-app/tree/main/proyek-akhir-dicoding/learn_programming_apptes/learn_programming_app",
    demo: "https://yahyasopian.github.io/learn-programming-app/#/home",
  },
  {
    title: "Blog Preview Card",
    image: "/projects/blogpreviewcard.png",
    description: "Project for Frontend Mentor.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/YahyaSopian/frontend-mentor/tree/main/blog-preview-card-main",
    demo: "https://blog-priview-card.vercel.app/",
  },
  {
    title: "QR Code Component",
    image: "/projects/qr-code-component.png",
    description: "Project for Frontend Mentor.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/YahyaSopian/frontend-mentor/tree/main/qr-code-component-main",
    demo: "https://qr-codecomponent.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 px-6 md:px-12 bg-gray-100">
      <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        My Projects 🚀
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href={project.github} target="_blank" className="text-gray-700 hover:text-black transition">
                  <FaGithub size={20} />
                </a>
                <a href={project.demo} target="_blank" className="text-blue-500 hover:text-blue-700 transition">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
