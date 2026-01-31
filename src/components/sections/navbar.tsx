"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ABOUT_ME } from "../constants/data";
import ThemeToggle from "../ui/theme-toggle";

// Navigation items with their respective href values
const navItems = [
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "open source", href: "#open-source" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle smooth scroll to section when nav link is clicked
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1)); // Remove '#' from href
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="py-5 sm:py-10 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo/Brand link */}
        <Link href="/" className="text-xl font-semibold text-foreground lowercase">
          {ABOUT_ME.name?.split(" ")[0]?.toLowerCase() || "portfolio"}.
        </Link>

        {/* Desktop navigation menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="relative text-base text-foreground/80 hover:text-foreground pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-base text-foreground py-2 border-b border-border/50 last:border-0"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Switch Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
