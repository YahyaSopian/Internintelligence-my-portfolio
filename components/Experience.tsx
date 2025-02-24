"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: "Mengerjakan proyek pembuatan website menggunakan React.js, Next.js, dan Tailwind CSS.",
    image: "/experience/web-developer.jpg",
  },
  {
    title: "Flutter Developer",
    company: "Freelance",
    date: "2022 - 2023",
    description: "Membuat aplikasi mobile berbasis Flutter untuk berbagai kebutuhan bisnis.",
    image: "/experience/flutter.jpg",
  },
  {
    title: "Guru Al-Qur'an",
    company: "SD Permata Islam",
    date: "2020 - 2024",
    description: "Mengajar Al-Qur'an dan mendidik siswa dengan metode tahsin serta tahfidz.",
    image: "/experience/guru.jpg",
  },
  {
    title: "Technical Writer",
    company: "Blog & Tutorial",
    date: "2021 - Present",
    description: "Menulis artikel dan tutorial tentang pemrograman di blog dan platform edukasi.",
    image: "/experience/writer.jpg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-12">Experience 💼</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-md ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gambar Experience */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
              <Image
                src={exp.image}
                alt={exp.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Detail Experience */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} • {exp.date}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
