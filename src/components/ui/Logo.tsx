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
      <div className="relative">
        <motion.div
          animate={{ 
            scale: isScrolled ? 0.9 : 1,
          }}
          className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center relative overflow-hidden ${
            dark ? "bg-[#0F172A]" : "bg-white"
          } shadow-lg`}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#005BA1]/10 to-[#2E7D32]/10" />
          
          <div className="relative flex items-center justify-center">
            <Footprints 
              className={`w-6 h-6 md:w-8 md:h-8 ${dark ? "text-white" : "text-[#005BA1]"}`}
              strokeWidth={2.5}
            />
            <motion.div
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-1 -right-1"
            >
              <div className="w-2 h-2 bg-[#2E7D32] rounded-full shadow-[0_0_8px_#2E7D32]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col">
        <span className={`text-lg md:text-xl leading-tight tracking-tight ${
          isScrolled || dark ? "text-[#0F172A]" : "text-white drop-shadow-md"
        }`}>
          <span className="font-script text-[#2E7D32] lowercase italic capitalize mr-1">Marche</span>
          <span className="font-title font-black uppercase text-[0.8em]">avec <span className="text-[#005BA1]">JESUS</span></span>
        </span>
        <span className={`text-[8px] md:text-[10px] font-title font-black uppercase tracking-[0.3em] ${
          isScrolled || dark ? "text-slate-400" : "text-white/70"
        }`}>
          Le Messie
        </span>
      </div>
    </div>
  );
}
