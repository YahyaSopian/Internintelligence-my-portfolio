"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Send, CheckCircle, X } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // Alert otomatis hilang setelah 4 detik
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Jangan ragu untuk menghubungi saya!
        </p>

        {/* Links Sosial Media */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            <X className="w-7 h-7" />
          </a>
          <a
            href="https://yahyasopian5@gmail.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://yahyasopian5@gmail.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            <FaInstagram className="w-7 h-7" />
          </a>
          <a
            href="https://yahyasopian5@gmail.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>

        {/* Alert Notifikasi */}
        {showAlert && (
          <Alert
            variant="default"
            className="flex items-center gap-3 p-4 mb-4 bg-green-100 text-green-800 border border-green-300 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <AlertTitle>Pesan Terkirim!</AlertTitle>
              <AlertDescription>
                Terima kasih! Saya akan segera menghubungi Anda.
              </AlertDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-green-600 hover:bg-green-200"
              onClick={() => setShowAlert(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </Alert>
        )}

        {/* Formulir Kontak */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Nama</label>
            <Input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Pesan</label>
            <Textarea
              name="message"
              rows={4}
              placeholder="Tulis pesan Anda..."
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full flex items-center gap-2">
            <Send className="w-5 h-5" /> Kirim Pesan
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
