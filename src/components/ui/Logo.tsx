import { motion } from "motion/react";
import { Footprints, Church } from "lucide-react";

interface LogoProps {
  isScrolled?: boolean;
  className?: string;
  dark?: boolean;
}

export default function Logo({ isScrolled, className = "", dark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        animate={{ 
          scale: isScrolled ? 0.85 : 1,
        }}
        className={`w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden flex items-center justify-center transition-all bg-white p-1.5 shadow-lg border border-slate-100`}
      >
        <img 
          src="/logo.jpg" 
          alt="Marche avec JESUS Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="flex flex-col">
        <span className={`text-lg md:text-2xl leading-none tracking-tight font-title font-black uppercase ${
          isScrolled || dark ? "text-[#005BA1]" : "text-[#005BA1] md:text-white md:drop-shadow-lg"
        }`}>
          Marche avec JESUS
        </span>
        <span className={`text-[8px] md:text-[11px] font-title font-black uppercase tracking-[0.3em] ${
          isScrolled || dark ? "text-[#2E7D32]" : "text-[#2E7D32] bg-white/90 px-2 py-0.5 rounded-full inline-block w-fit mt-1 shadow-sm"
        }`}>
          Le Messie
        </span>
      </div>
    </div>
  );
}
