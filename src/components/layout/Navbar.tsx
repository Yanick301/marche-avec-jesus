import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Archives", href: "/editions-precedentes" },
    { name: "4ème Édition", href: "/4eme-edition" },
    { name: "Galerie", href: "/galerie" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
        <Link to="/" className="flex items-center gap-3">
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] tracking-[0.2em] font-black uppercase transition-all duration-300 hover:text-[#005BA1] ${
                isScrolled ? "text-slate-600" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              } ${location.pathname === link.href ? "text-[#005BA1]" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/4eme-edition">
            <Button 
              className={`!rounded-full px-8 !py-4 text-[9px] font-black tracking-[0.2em] uppercase transition-all duration-500 shadow-2xl ${
                isScrolled 
                  ? "!bg-[#005BA1] !text-white hover:shadow-[#005BA1]/30" 
                  : "!bg-white !text-[#005BA1] hover:!scale-105 hover:shadow-white/20"
              }`}
            >
              S'INSCRIRE
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden p-2 rounded-lg transition-all duration-300 relative z-[70] ${
            isMobileMenuOpen 
              ? "text-[#005BA1] bg-[#005BA1]/10" 
              : isScrolled ? "text-[#0F172A]" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white shadow-2xl border-b border-slate-100 z-[60] overflow-hidden"
          >
            <div className="flex flex-col p-10 pt-24 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[12px] uppercase tracking-[0.3em] font-black transition-colors ${
                    location.pathname === link.href ? "text-[#005BA1]" : "text-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/4eme-edition" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="pt-4"
              >
                <Button className="w-full !rounded-full !py-6 text-[10px] font-black tracking-widest uppercase shadow-xl">
                  S'INSCRIRE
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
