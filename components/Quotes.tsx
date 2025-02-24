"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    image: "/quotes/churchill.jpg",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "/quotes/steve-jobs.jpg",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    image: "/quotes/roosevelt.jpg",
  },
];

const Quotes = () => {
  return (
    <section id="quotes" className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Inspirational Quotes 💡</h2>

      <div className="max-w-2xl mx-auto">
        <Carousel>
          <CarouselContent className="flex">
            {quotes.map((quote, index) => (
              <CarouselItem key={index} className="flex flex-col items-center text-center p-6">
                <Quote className="w-10 h-10 text-gray-400 mb-4" />

                <p className="text-lg italic text-gray-700">"{quote.text}"</p>

                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={quote.image}
                    alt={quote.author}
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-300"
                  />
                  <span className="text-sm font-semibold text-gray-600">{quote.author}</span>
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
