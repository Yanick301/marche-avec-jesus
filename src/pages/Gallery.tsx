import { motion } from "motion/react";
import { Youtube, Play, Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const images = [
    "/gallery/magnific_a-group-of-young-people-m_2975712824.png",
    "/gallery/magnific_a-group-of-young-people-m_2975712853.png",
    "/gallery/magnific_a-group-of-young-people-m_2975740607.png",
    "/gallery/magnific_a-group-of-young-people-m_2975740623.png",
    "/gallery/magnific_a-group-of-young-people-m_2975748875.png",
    "/gallery/magnific_a-group-of-young-people-m_2975748885.png",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#D4AF37] mb-8 block">Galerie Multimédia</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-8">
              Fragments de <span className="text-[#005BA1] italic">Lumière</span>.
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Découvrez les sourires, les prières et les moments de fraternité capturés au fil des années. 
              Une playlist Youtube est également disponible pour revivre les animations en vidéo.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-slate-100 p-4 rounded-full hover:bg-[#005BA1] hover:text-white transition-all">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button className="bg-slate-100 p-4 rounded-full hover:bg-[#FF0000] hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Integration Section */}
        <div className="mb-32 rounded-[60px] overflow-hidden relative shadow-2xl bg-slate-900 group">
          <video 
            className="w-full aspect-video object-cover"
            controls
            poster="/gallery/magnific_a-group-of-young-people-m_2975740623.png"
          >
            <source src="/gallery/marche-jesus.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute top-12 left-12 pointer-events-none group-hover:opacity-0 transition-opacity">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/60 mb-2">À la une</p>
            <h3 className="text-3xl font-serif font-bold text-white">Édition Spéciale : Marche avec Jésus</h3>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-zoom-in"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-6 bg-[#FF0000] text-white px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
          >
            <Youtube className="w-5 h-5" /> Rejoindre notre chaîne YouTube
          </a>
        </div>
      </div>
    </motion.div>
  );
}
