import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { COLORS, EVENT_DETAILS } from "../../constants";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-40 pb-20 md:pt-60 md:pb-32 px-6 overflow-hidden bg-[#F1F5F9]">
      {/* Background with soft image and organic masks */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#005BA1]/40 via-[#F1F5F9]/20 to-[#F1F5F9]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-4 px-8 py-3 mb-10 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-white/50"
          >
            <span className="w-2.5 h-2.5 bg-[#2E7D32] rounded-full animate-pulse shadow-[0_0_10px_#2E7D32]" />
            <span className="text-[#005BA1] text-xs font-black tracking-[0.4em] uppercase">
              Abomey • 20 Mai 2026
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[140px] font-title font-black text-[#0F172A] mb-10 leading-[0.8] tracking-tighter">
            <span className="font-script text-[#2E7D32] lowercase italic capitalize tracking-normal block mb-4 md:mb-0">Marche</span>
            avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005BA1] to-[#2E7D32]">JESUS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light italic">
            "Une marche de foi et d'unité pour tous, dans l'amour de Jésus. C'est totalement gratuit."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link to="/4eme-edition">
              <Button 
                className="w-full sm:w-auto !rounded-full !bg-[#005BA1] !text-white !px-16 !py-10 !text-sm uppercase tracking-widest font-black shadow-[0_25px_60px_rgba(0,91,161,0.4)] hover:shadow-[0_25px_60px_rgba(0,91,161,0.6)] transition-all transform hover:-translate-y-2"
              >
                Participer gratuitement
              </Button>
            </Link>
            <Link to="/a-propos">
              <button 
                className="flex items-center gap-6 text-[#0F172A] font-black group transition-all"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#005BA1]/10 flex items-center justify-center group-hover:border-[#005BA1] group-hover:bg-[#005BA1]/5 transition-all duration-500">
                  <div className="w-3 h-3 bg-[#005BA1] rounded-full shadow-[0_0_10px_#005BA1]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em]">Découvrir la Marche</span>
              </button>
            </Link>
          </div>

          {/* Floating Stat Cards Integration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-24 hidden md:flex items-center justify-center gap-16 border-t border-slate-200 pt-16"
          >
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#005BA1] transition-colors">Date</p>
              <p className="text-3xl font-title font-bold text-[#0F172A]">20 Mai</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#005BA1] transition-colors">Lieu</p>
              <p className="text-3xl font-title font-bold text-[#0F172A]">Abomey</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-[#005BA1] transition-colors">Heure</p>
              <p className="text-3xl font-title font-bold text-[#0F172A]">08:00</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -top-[10%] -right-[10%] w-[1000px] h-[1000px] bg-[#005BA1]/10 rounded-full blur-[200px] -z-10" />
      <div className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] bg-[#2E7D32]/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
