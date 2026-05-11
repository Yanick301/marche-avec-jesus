import { motion } from "motion/react";
import { EVENT_DETAILS } from "../../constants";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#2E7D32] mb-8 block">
              Tous sont Bienvenus
            </span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-[#0F172A] mb-10 leading-[1] tracking-tight">
              Un chemin de <span className="text-[#005BA1] italic underline decoration-[#2E7D32]/30 underline-offset-8">foi</span> et d'unité
            </h2>
            <div className="space-y-8 text-slate-700/80 leading-relaxed text-xl font-light">
              <p>
                La "Marche avec JESUS" est un rassemblement ouvert à tous, croyants comme non-croyants. Nous marchons ensemble par amour pour Jésus, dans la fraternité et la simplicité.
              </p>
              <p>
                Ce n'est pas une visite, c'est un moment de communion gratuit où chaque pas exprime notre désir d'unité et de paix. Tout le monde est invité.
              </p>
              <div className="pt-12 grid grid-cols-2 gap-16 border-t border-slate-200">
                <div className="flex flex-col gap-3">
                  <span className="text-5xl font-serif font-bold text-[#005BA1]">2026</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#2E7D32]">Rassemblement</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-5xl font-serif font-bold text-[#005BA1]">Gratuit</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#2E7D32]">Pour Tous</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative z-10 border-[12px] border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" 
                alt="Marche spirituelle" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative organic shapes */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#005BA1]/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-[#2E7D32]/5 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
