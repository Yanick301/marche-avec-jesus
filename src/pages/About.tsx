import { motion } from "motion/react";
import { Heart, ShieldCheck, Sun, Star } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Sun,
      title: "Spiritualité",
      desc: "Un retour à l'essentiel, une communion profonde avec le Créateur à chaque pas."
    },
    {
      icon: Heart,
      title: "Fraternité",
      desc: "Briser les barrières sociales et religieuses pour ne faire qu'un sous la bannière de l'Amour."
    },
    {
      icon: ShieldCheck,
      title: "Santé",
      desc: "Honorer nos corps, temples de l'Esprit, par l'effort physique et le bien-être."
    },
    {
      icon: Star,
      title: "Unité",
      desc: "Marcher ensemble pour la paix au Bénin et la réconciliation des cœurs."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-[#2E7D32] mb-8 block"
          >
            Notre Histoire
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-title font-black text-[#0F172A] mb-12 leading-[0.9]">
            L'origine d'une <br /> <span className="font-script text-[#005BA1] italic lowercase capitalize">vision divine</span>.
          </h1>
          <p className="text-2xl text-slate-600 font-light leading-relaxed">
            Née de la volonté de rassembler le peuple béninois autour des valeurs de paix et de foi, 
            la "Marche avec <span className="font-script text-[#2E7D32] lowercase capitalize">JESUS</span>" a débuté comme un humble rassemblement à Abomey. 
            Aujourd'hui, elle est devenue un rendez-vous incontournable pour des milliers d'âmes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
            <img 
              src="/gallery/magnific_a-group-of-young-people-m_2975712824.png" 
              alt="Vision" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#005BA1]/10 mix-blend-overlay" />
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-title font-black text-[#0F172A] mb-6">Notre Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Nous voyons un Bénin où chaque citoyen, indépendamment de ses origines, 
                marche main dans la main vers un avenir de paix. Notre vision est de faire de cette marche 
                un symbole national de réconciliation et de dévotion.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-title font-black text-[#0F172A] mb-6">Nos Valeurs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {values.map((v, i) => (
                  <div key={i}>
                    <v.icon className="w-8 h-8 text-[#005BA1] mb-4" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A] mb-3">{v.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0F172A] rounded-[60px] p-12 md:p-24 text-center">
          <Heart className="w-12 h-12 text-[#2E7D32] mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-title font-bold text-white mb-12 max-w-2xl mx-auto italic">
            "Une marche n'est pas seulement un déplacement physique, c'est une ascension de l'âme."
          </h2>
          <p className="text-blue-100/60 text-xs uppercase tracking-[0.4em] font-black">Fondateur de l'initiative</p>
        </div>
      </div>
    </motion.div>
  );
}
