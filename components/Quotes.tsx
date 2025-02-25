"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    image: "/yahya.jpg",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "/yahya.jpg",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    image: "/yahya.jpg",
  },
];

const Quotes = () => {
  return (
    <section
      id="quotes"
      className="py-16 p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      {/* Header */}
      <motion.h2
        className="text-center text-3xl font-bold mb-8 text-gray-900 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Sparkles className="w-8 h-8 text-yellow-500" />
        Inspirational Quotes 💡
      </motion.h2>

      {/* Carousel Container */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 relative border border-gray-300">
        {/* Dekorasi Icon Quote Besar */}
        <Quote className="absolute -top-6 -left-6 w-14 h-14 text-gray-200 opacity-70" />
        <Quote className="absolute -bottom-6 -right-6 w-14 h-14 text-gray-200 opacity-70 rotate-180" />

        <Carousel>
          <CarouselContent className="flex">
            {quotes.map((quote, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative p-6 border-l-4 border-yellow-500 bg-gray-50 rounded-lg shadow-md"
                >
                  <Quote className="w-8 h-8 text-yellow-500 mb-4" />
                  <p className="text-lg italic text-gray-700">"{quote.text}"</p>
                </motion.div>

                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={quote.image}
                    alt={quote.author}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-yellow-500 shadow-md"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    {quote.author}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Quotes;
