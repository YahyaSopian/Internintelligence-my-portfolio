"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 bg-gray-100">
      {/* Bagian Kiri: Teks */}
      <motion.div className="md:w-1/2 space-y-6" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Yahya Sopian</span>
        </h1>
        <TypeAnimation sequence={["Frontend Developer", 2000, "Blogger", 2000, "Guru Al-Qur'an", 2000, "Penuntut Ilmu", 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-2xl font-semibold text-blue-500" />
        <p className="text-gray-700 text-lg">
          Saya seorang <span className="font-semibold text-blue-600">Web Developer</span> yang memiliki semangat dalam membangun aplikasi web modern. Selain itu, saya juga seorang{" "}
          <span className="font-semibold text-blue-600">Guru Al-Qur'an </span>
          dan penulis blog yang membagikan ilmu dan pengalaman saya. Saya percaya bahwa teknologi dan ilmu agama dapat berjalan beriringan untuk menciptakan manfaat bagi banyak orang.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Button variant="default" size="lg">
            View Projects
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </motion.div>

      {/* Bagian Kanan: Gambar */}
      <motion.div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        {/* Border animasi terus berjalan */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow">
          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
            <Image src="/yahya.jpg" alt="Profile Image" width={200} height={200} className="rounded-full" priority />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
