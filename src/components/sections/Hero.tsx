import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { COLORS, EVENT_DETAILS } from "../../constants";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Background Image Header */}
      <section className="relative w-full bg-white overflow-hidden">
        <div className="relative w-full">
          <img 
            src="/fond.jpg" 
            alt="Marche avec JESUS"
            className="w-full h-auto block"
          />
          {/* Top overlay for navbar visibility */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent z-[1]" />
          {/* Soft overlay at the bottom for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
      </section>

      {/* Hero Content Section (Post-Image) */}
      <section className="relative z-10 text-center px-6 pb-20 pt-10 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-3 mb-10 bg-slate-50 rounded-full border border-slate-100">
            <span className="w-2.5 h-2.5 bg-[#2E7D32] rounded-full animate-pulse shadow-[0_0_10px_#2E7D32]" />
            <span className="text-[#005BA1] text-xs font-black tracking-[0.4em] uppercase">
              Bohicon - Abomey • 30 Mai 2026
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-title font-black text-[#0F172A] mb-10 leading-[0.8] tracking-tighter">
            <span className="font-script text-[#2E7D32] lowercase italic capitalize tracking-normal block text-7xl md:text-[160px] -mb-4 md:-mb-10">Marche</span>
            avec <span className="text-[#005BA1]">JESUS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light italic">
            "Une marche de foi et d'unité pour tous, dans l'amour de Jésus. C'est totalement gratuit."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link to="/4eme-edition">
              <Button 
                className="w-full sm:w-auto !rounded-full !bg-[#005BA1] !text-white !px-16 !py-10 !text-sm uppercase tracking-widest font-black shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                S'inscrire gratuitement
              </Button>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center border-t border-slate-100 pt-16"
          >
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#005BA1] transition-colors">Date</p>
              <p className="text-3xl font-title font-bold text-[#0F172A]">30 Mai</p>
              <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">08h00</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-slate-100 mx-auto" />
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#005BA1] transition-colors">Départ</p>
              <p className="text-2xl font-title font-bold text-[#0F172A]">SHB Bohicon</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-slate-100 mx-auto" />
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#2E7D32] transition-colors">Arrivée</p>
              <p className="text-2xl font-title font-bold text-[#0F172A]">Place Goho</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
