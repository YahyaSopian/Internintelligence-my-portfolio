"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

const blogs = [
  {
    title: "Mengenal Next.js 14",
    date: "Feb 20, 2025",
    topic: "Web Development",
    likes: 120,
    comments: 45,
    image: "/blogs/next-js.jpg",
    link: "/blog/nextjs-14",
  },
  {
    title: "Flutter vs React Native",
    date: "Feb 15, 2025",
    topic: "Mobile Development",
    likes: 95,
    comments: 30,
    image: "/blogs/flutter-vs-react.jpg",
    link: "/blog/flutter-vs-react",
  },
  {
    title: "Tips Menggunakan Tailwind",
    date: "Feb 10, 2025",
    topic: "CSS & UI Design",
    likes: 75,
    comments: 25,
    image: "/blogs/tailwind.jpg",
    link: "/blog/tips-tailwind",
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="py-16 p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <motion.h2
        className="text-center text-3xl font-bold mb-12 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Blogs ✍️
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={blog.link} aria-label={`Read more about ${blog.title}`}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.03] cursor-pointer border border-gray-300">
                {/* Gambar Blog */}
                <div className="relative w-full h-52">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Konten Blog */}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {blog.date} • {blog.topic}
                  </p>
                </CardContent>

                {/* Footer (Likes & Comments) */}
                <CardFooter className="flex justify-between items-center p-4 border-t bg-gray-50">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>{blog.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-5 h-5 text-blue-500" />
                    <span>{blog.comments}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
