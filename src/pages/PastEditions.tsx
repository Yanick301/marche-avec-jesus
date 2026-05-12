import { motion } from "motion/react";
import { Camera, Users, MapPin, Trophy } from "lucide-react";

export default function PastEditions() {
  const stats = [
    { label: "Participants total", value: "25 000+", icon: Users },
    { label: "Distance parcourue", value: "45 km", icon: MapPin },
    { label: "Éditions réussies", value: "03", icon: Trophy },
    { label: "Photos capturées", value: "5 000+", icon: Camera },
  ];

  const editions = [
    {
      year: "2023",
      title: "3ème Édition : La Lumière",
      desc: "Un rassemblement record avec plus de 8 000 participants à travers les rues d'Abomey.",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      year: "2022",
      title: "2ème Édition : L'Unité",
      desc: "La consolidation du mouvement et l'ouverture aux délégations nationales.",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      year: "2021",
      title: "1ère Édition : La Genèse",
      desc: "Le début de l'aventure avec les pionniers de la marche à Abomey.",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000"
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
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#005BA1] mb-8 block">Archives & Mémoire</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-12">
            Héritage de <span className="text-[#2E7D32] italic">Foi</span>.
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Revivez les moments forts qui ont forgé l'identité de la Marche avec JESUS. 
            Chaque édition a été une pierre posée pour l'édification de notre communauté.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#005BA1]/5 transition-colors">
                <s.icon className="w-6 h-6 text-[#005BA1]" />
              </div>
              <p className="text-4xl font-serif font-bold text-[#0F172A] mb-2">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Editions List */}
        <div className="space-y-40">
          {editions.map((ed, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl">
                  <img src={ed.img} alt={ed.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <span className="text-6xl font-serif font-bold text-slate-100 mb-6 block">{ed.year}</span>
                <h3 className="text-4xl font-serif font-bold text-[#0F172A] mb-8">{ed.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light mb-10">{ed.desc}</p>
                <button className="text-[10px] uppercase tracking-[0.3em] font-black text-[#005BA1] border-b-2 border-[#005BA1]/20 pb-2 hover:border-[#005BA1] transition-all">
                  Voir la galerie
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
