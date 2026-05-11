import { motion } from "motion/react";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { EVENT_DETAILS } from "../../constants";

export default function Details() {
  const info = [
    { 
      icon: Calendar, 
      label: "Date", 
      value: EVENT_DETAILS.date,
      description: "Mercredi, une journée de foi"
    },
    { 
      icon: Clock, 
      label: "Heure", 
      value: EVENT_DETAILS.time,
      description: "Rassemblement dès 06:30"
    },
    { 
      icon: MapPin, 
      label: "Lieu", 
      value: EVENT_DETAILS.location,
      description: "Place Goho, Abomey"
    },
  ];

  return (
    <section id="details" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 text-slate-800">
        <div className="text-center mb-32">
          <span className="text-xs uppercase tracking-[0.4em] font-black text-[#005BA1] mb-6 block">Informations Clés</span>
          <h2 className="text-6xl font-serif font-bold tracking-tight">Célébrons <span className="text-[#2E7D32] italic">ensemble</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {info.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="p-12 bg-[#F8FAFC] border border-slate-100 rounded-[48px] hover:bg-white hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-10 bg-white shadow-xl rounded-2xl text-[#005BA1] group-hover:bg-[#005BA1] group-hover:text-white transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-6">{item.label}</h3>
              <p className="text-3xl font-serif font-bold mb-4 text-[#0F172A]">{item.value}</p>
              <p className="text-base text-slate-500/80 font-light italic">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] h-[600px] relative border-[12px] border-white bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.247!2d1.983!3d7.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102f477000000001%3A0xb785375ec8c313a9!2sAbomey!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj" 
            className="w-full h-full border-none grayscale-[40%] contrast-[1.1]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 to-transparent" />
          <div className="absolute bottom-12 right-12">
            <a 
              href={EVENT_DETAILS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-8 py-5 rounded-full shadow-2xl text-[10px] uppercase tracking-[0.3em] font-black text-[#005BA1] flex items-center gap-4 hover:bg-[#005BA1] hover:text-white transition-all duration-500 pointer-events-auto"
            >
              Itinéraire de la Marche <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
