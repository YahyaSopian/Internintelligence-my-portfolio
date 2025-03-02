"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// List menu
const navItems = ["home", "about", "skills", "experience", "blogs", "quotes", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Fungsi untuk smooth scroll ke section dengan offset
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Offset untuk navbar
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Update activeSection saat scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Yahya Sopian
        </Link>

        {/* Navigation Menu untuk Desktop */}
        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 text-gray-700 transition duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    activeSection === item ? "text-blue-600 font-semibold after:w-full" : ""
                  }`}
                  onClick={() => handleScrollTo(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dropdown Menu untuk Mobile & Tablet */}
        <div className="lg:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <Menu className="w-7 h-7" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mt-2 bg-white shadow-lg rounded-lg relative right-0">
              {navItems.map((item) => (
                <DropdownMenuItem key={item}>
                  <Button variant="ghost" className={`w-full text-gray-700 text-left py-2 transition duration-300 hover:text-blue-600 ${activeSection === item ? "text-blue-600 font-semibold" : ""}`} onClick={() => handleScrollTo(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
