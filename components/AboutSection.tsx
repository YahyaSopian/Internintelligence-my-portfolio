"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Users, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 bg-gray-100 mt-20" // Tambah jarak dari Hero
    >
      {/* Ikon Dekoratif */}
      <Star className="absolute top-10 left-10 text-yellow-400 opacity-50 w-10 h-10 md:w-12 md:h-12" />
      <Users className="absolute bottom-10 right-10 text-blue-400 opacity-50 w-12 h-12 md:w-14 md:h-14" />
      <Code className="absolute top-1/2 left-5 text-gray-400 opacity-30 w-8 h-8 md:w-10 md:h-10" />

      {/* Bagian Kiri: Gambar */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-blue-600 p-2 bg-white rounded-lg shadow-md">
          <Image
            src="/about.jpg"
            alt="About Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
      </motion.div>

      {/* Bagian Kanan: Teks */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Me
        </h2>
        <p className="text-gray-700 text-lg">
          Saya adalah seorang Web Developer yang antusias membangun aplikasi web
          modern. Selain itu, saya juga aktif menulis blog dan mengajar
          Al-Qur'an. Saya percaya bahwa teknologi dan ilmu agama dapat
          beriringan untuk memberikan manfaat bagi banyak orang.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Button variant="default" size="lg">
            View Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
