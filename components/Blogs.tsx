"use client";

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
    image: "/blogs/nextjs.jpg",
  },
  {
    title: "Flutter vs React Native",
    date: "Feb 15, 2025",
    topic: "Mobile Development",
    likes: 95,
    comments: 30,
    image: "/blogs/flutter-vs-react.jpg",
  },
  {
    title: "Tips Menggunakan Tailwind CSS",
    date: "Feb 10, 2025",
    topic: "CSS & UI Design",
    likes: 75,
    comments: 25,
    image: "/blogs/tailwind.jpg",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-12">Latest Blogs ✍️</h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-transform transform hover:scale-105 shadow-lg"
          >
            {/* Gambar Blog */}
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>

            {/* Konten Blog */}
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500">
                {blog.date} • {blog.topic}
              </p>
            </CardContent>

            {/* Footer (Likes & Comments) */}
            <CardFooter className="flex justify-between items-center p-4 border-t">
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
        ))}
      </div>
    </section>
  );
};

export default Blogs;
