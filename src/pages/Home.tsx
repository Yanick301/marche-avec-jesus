import { motion } from "motion/react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Registration from "../components/sections/Registration";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Heart } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Inclusive Message Section */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-4 mb-8">
              <Heart className="text-[#005BA1] w-6 h-6" />
              <Users className="text-[#2E7D32] w-6 h-6" />
              <Star className="text-[#D4AF37] w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-title font-black text-[#0F172A] mb-8 leading-tight">
              Un événement spirituel et sportif, <br />
              <span className="font-script text-[#005BA1] italic lowercase capitalize translate-y-1 inline-block">ouvert à tous</span>, croyants ou non.
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
              La "Marche avec JESUS le Messie" est un témoignage de fraternité pure. 
              Que vous cherchiez la paix intérieure, un moment de partage ou simplement à marcher pour votre santé, 
              vous avez votre place parmi nous.
            </p>
            <Link 
              to="/a-propos" 
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black text-[#005BA1] hover:gap-6 transition-all"
            >
              Découvrir la vision complète <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <About />

      {/* 4th Edition Teaser */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#2E7D32] mb-6 block">Édition Spéciale</span>
              <h2 className="text-5xl md:text-6xl font-title font-black text-[#0F172A] mb-8 leading-tight">
                Zoom sur la <span className="font-script text-[#005BA1] italic lowercase capitalize">4ème Éditions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Cette année, nous élevons le pas. Découvrez le nouveau parcours traversant Abomey, 
                les animations spirituelles prévues et comment vous préparer au mieux pour cette journée historique.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/4eme-edition"
                  className="bg-[#005BA1] text-white px-10 py-5 rounded-full text-center text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-[#005BA1]/30 transition-all"
                >
                  Détails de l'édition
                </Link>
                <Link 
                  to="/4eme-edition#register"
                  className="bg-white border border-slate-200 text-[#0F172A] px-10 py-5 rounded-full text-center text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
                >
                  S'inscrire directement
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" 
                alt="Preparation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#005BA1]/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <Registration />
    </motion.div>
  );
}
