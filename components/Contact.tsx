"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, CheckCircle, X, Phone, Mail, MapPin, User } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Data Form:", data);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
    form.reset();
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">Jangan ragu untuk menghubungi saya kapan saja!</p>

        {/* Informasi Kontak */}
        <div className="flex flex-col gap-4 mb-6 text-gray-600">
          <div className="flex items-center gap-3">
            <FaPhone className="w-5 h-5 text-blue-500" />
            <span>+62 896-1487-1185</span>
          </div>
          <div>
            <Link href="mailto:yahyasopian5@gmail" className="flex items-center gap-3">
              <FaEnvelope className="w-5 h-5 text-red-500" />
              <span>yahyasopian5@gmail.com</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="w-5 h-5 text-green-500" />
            <span>Bogor, Indonesia</span>
          </div>
        </div>

        {/* Links Sosial Media */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/yahya-sopian96/" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a href="https://github.com/YahyaSopian" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://facebook.com/yahya.sopian96" target="_blank" className="text-gray-600 hover:text-blue-500 transition">
            <FaFacebook className="w-7 h-7" />
          </a>
          <a href="https://instagram.com/yahya.sopian96" target="_blank" className="text-gray-600 hover:text-pink-500 transition">
            <FaInstagram className="w-7 h-7" />
          </a>
        </div>

        {/* Alert Notifikasi */}
        {showAlert && (
          <Alert className="flex items-center gap-3 p-4 mb-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <AlertTitle>Pesan Terkirim!</AlertTitle>
              <AlertDescription>Terima kasih! Saya akan segera menghubungi Anda.</AlertDescription>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto text-green-600 hover:bg-green-200" onClick={() => setShowAlert(false)}>
              <X className="w-5 h-5" />
            </Button>
          </Alert>
        )}

        {/* Formulir Kontak */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Input Nama */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Masukkan nama Anda" {...field} />
                      <User className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="email" placeholder="Masukkan email Anda" {...field} />
                      <Mail className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Pesan */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesan</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea rows={4} placeholder="Tulis pesan Anda..." {...field} />
                      <Send className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tombol Kirim */}
            <Button type="submit" className="w-full flex items-center gap-2">
              <Send className="w-5 h-5" /> Kirim Pesan
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
