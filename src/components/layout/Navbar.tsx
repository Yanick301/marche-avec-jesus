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
    { name: "4ème Édition", href: "/4eme-edition" },
    { name: "Galerie", href: "/galerie" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl py-3 border-b border-slate-100 shadow-xl" 
          : "bg-white/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-6 md:py-8"
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
                isScrolled ? "text-slate-600" : "text-[#005BA1] md:text-white md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
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
          className={`xl:hidden p-3 rounded-xl transition-all duration-300 relative z-[70] ${
            isMobileMenuOpen 
              ? "text-white bg-[#005BA1]" 
              : isScrolled ? "text-[#005BA1] bg-[#005BA1]/5" : "text-white bg-white/10 backdrop-blur-md"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-0 bg-[#005BA1] text-white z-[60] flex flex-col justify-center p-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl uppercase tracking-[0.2em] font-black ${
                      location.pathname === link.href ? "text-white underline underline-offset-8 decoration-4" : "text-white/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-10"
              >
                <Link to="/4eme-edition" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full !rounded-full !py-8 !bg-white !text-[#005BA1] text-lg font-black tracking-widest uppercase shadow-2xl">
                    S'INSCRIRE MAINTENANT
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
