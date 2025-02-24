"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 bg-gray-100"
    >
      {/* Bagian Kiri: Gambar */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 border-4 border-blue-600 p-2 bg-white">
          <Image
            src="/about.jpg"
            alt="About Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md object-cover"
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
