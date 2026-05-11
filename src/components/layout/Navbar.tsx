import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { EVENT_DETAILS } from "../../constants";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "L'Événement", href: "#" },
    { name: "Programme", href: "#about" },
    { name: "Localisation", href: "#details" },
    { name: "Contact", href: "#register" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl py-3 border-b border-slate-100 shadow-xl" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/logo/logo.png" 
            onError={(e) => { e.currentTarget.src = "input_file_0.png" }}
            alt="Marche avec JESUS Logo" 
            className={`transition-all duration-700 ${isScrolled ? "h-10 md:h-12" : "h-14 md:h-24"}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] tracking-[0.2em] font-black uppercase transition-all duration-300 hover:text-[#005BA1] ${
                isScrolled ? "text-slate-600" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className={`!rounded-full px-10 !py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 shadow-2xl ${
              isScrolled 
                ? "!bg-[#005BA1] !text-white hover:shadow-[#005BA1]/30" 
                : "!bg-white !text-[#005BA1] hover:!scale-105 hover:shadow-white/20"
            }`}
          >
            S'INSCRIRE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-blue-50 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest font-bold text-slate-800 hover:text-[#005BA1] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
