import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Comment se préparer physiquement pour la marche ?",
      excerpt: "Des conseils pratiques pour aborder les 12km de parcours dans les meilleures conditions.",
      author: "Dr. Serge A.",
      date: "10 Mai 2026",
      category: "Santé"
    },
    {
      title: "Interviews : Pourquoi ils marchent pour Jésus",
      excerpt: "Trois participants de l'édition précédente partagent leur motivation profonde.",
      author: "Marie L.",
      date: "05 Mai 2026",
      category: "Témoignages"
    },
    {
      title: "Les nouveautés de l'itinéraire 2026",
      excerpt: "Découvrez les nouvelles rues historiques qui seront traversées cette année.",
      author: "Comité d'Organisation",
      date: "01 Mai 2026",
      category: "Actualités"
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
        <div className="max-w-3xl mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#2E7D32] mb-8 block">Le Fil de l'Événement</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-8 leading-[0.9]">
            Nouvelles & <br /> <span className="text-[#005BA1] italic">Réflexions</span>.
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Restez informé sur les préparatifs, découvrez des conseils de santé, de sport 
            et de spiritualité pour vivre pleinement cet événement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all group cursor-pointer"
            >
              <span className="inline-block px-4 py-2 bg-slate-50 text-[10px] font-black text-[#005BA1] uppercase tracking-[0.2em] rounded-full mb-8 group-hover:bg-[#005BA1] group-hover:text-white transition-colors">
                {post.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-6 leading-tight group-hover:text-[#005BA1] transition-colors">{post.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-10">{post.excerpt}</p>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black text-[#0F172A] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Lire <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
