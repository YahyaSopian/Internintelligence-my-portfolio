"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Code, BookOpen, PenTool } from "lucide-react";

const experiences = [
  {
    title: "Magang sebagai FrontEnd Developer",
    company: "Intern Intelligence",
    date: "Feb 2025 - Mar 2025",
    description: "Mengerjakan proyek pembuatan website menggunakan Next.js, dan Tailwind CSS.",
    image: "/web-nextjs.jpg",
    icon: <Code className="text-blue-500" size={24} />,
  },

  {
    title: "Guru Al-Qur'an",
    company: "SD Permata Islam",
    date: "2022 - 2024",
    description: "Mengajar Al-Qur'an dan mendidik siswa dengan metode tahsin serta tahfidz.",
    image: "/guru.jpg",
    icon: <BookOpen className="text-green-500" size={24} />,
  },
  {
    title: "Guru Al-Qur'an",
    company: "Imam Nawawi School",
    date: "2021 - 2022",
    description: "Mengajar Al-Qur'an dan mendidik siswa dengan metode tahsin serta tahfidz.",
    image: "/guru.jpg",
    icon: <BookOpen className="text-green-500" size={24} />,
  },
  {
    title: "Guru Al-Qur'an",
    company: "SD Daarus Sunnah",
    date: "2018 - 2020",
    description: "Mengajar Al-Qur'an dan mendidik siswa dengan metode tahsin serta tahfidz. Juga mengajar mata pelajaran Fiqih dan Tauhid.",
    image: "/writer.jpg",
    icon: <PenTool className="text-purple-500" size={24} />,
  },
  {
    title: "Operator Produksi",
    company: "PT. Perfetti Van Melle Indonesia",
    date: "2017 - 2018",
    description: "Menjalankan proses produksi untuk menghasilkan produk-produk berkualitas tinggi.",
    image: "/writer.jpg",
    icon: <PenTool className="text-purple-500" size={24} />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 p-6 md:p-12 bg-gray-50 relative">
      {/* Dekorasi Background */}
      <motion.div className="absolute top-10 left-12 text-gray-200 opacity-60 w-8 h-8" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <Briefcase />
      </motion.div>
      <motion.div className="absolute bottom-20 right-16 text-gray-300 opacity-50 w-10 h-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <Briefcase />
      </motion.div>

      {/* Judul Section */}
      <motion.h2 className="text-center text-4xl font-bold mb-16 text-gray-900" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>
        My Experience 💼
      </motion.h2>

      {/* Garis Timeline */}
      <div className="relative max-w-4xl mx-auto space-y-16">
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-lg border-l-4 ${index % 2 === 0 ? "border-blue-500" : "border-green-500"} ${
              index % 2 === 0 ? "md:pl-10 md:pr-6" : "md:pl-6 md:pr-10"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon & Garis */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 p-3 rounded-full shadow-md">{exp.icon}</div>

            {/* Gambar Experience */}
            <motion.div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0 rounded-md overflow-hidden" whileHover={{ scale: 1.05 }}>
              <Image src={exp.image} alt={exp.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
            </motion.div>

            {/* Detail Experience */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company} • {exp.date}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
