import { motion } from "motion/react";
import { Clock, MapPin, Music, UserPlus, Info, Play } from "lucide-react";
import Registration from "../components/sections/Registration";

export default function CurrentEdition() {
  const infoItems = [
    {
      icon: MapPin,
      title: "Parcours 2026",
      desc: "Départ de la Place Goho, traversée des quartiers historiques et arrivée au Stade d'Abomey."
    },
    {
      icon: Clock,
      title: "Horaires",
      desc: "Rassemblement à 07:30. Départ officiel à 08:30 précises. Fin prévue vers 13:00."
    },
    {
      icon: Music,
      title: "Animations",
      desc: "Chorales gospel en pleine rue, fanfares locales et moments de méditation guidée."
    },
    {
      icon: Info,
      title: "Conseils Utiles",
      desc: "Prévoyez des chaussures confortables, de l'eau et un cœur ouvert. Gratuité totale."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40"
    >
      <div className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-[#005BA1] mb-8 block"
            >
              Événement Actuel
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-12 leading-[0.9]">
              La 4ème <br /> <span className="text-[#2E7D32] italic">Destination</span>.
            </h1>
            <p className="text-2xl text-slate-600 font-light leading-relaxed mb-12">
              Le 20 Mai 2026, Abomey vibrera d'une énergie nouvelle. Joignez-vous à 10 000 participants 
              pour cette marche historique placée sous le signe de la Paix Infinitésimale.
            </p>
            <div className="flex gap-8">
               <button className="flex items-center gap-4 bg-[#0F172A] text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                <Play className="w-4 h-4 fill-current" /> Vidéo de présentation
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-white">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" alt="4th Edition" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#005BA1] p-10 rounded-[40px] text-white shadow-2xl">
              <p className="text-5xl font-serif font-bold">20</p>
              <p className="text-[10px] uppercase tracking-widest font-black opacity-60">Mai 2026</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {infoItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-8">
                <item.icon className="w-5 h-5 text-[#005BA1]" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#0F172A] mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="register">
        <Registration />
      </div>
    </motion.div>
  );
}
