import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Facebook, Instagram, Youtube } from "lucide-react";
import Button from "../components/ui/Button";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#005BA1] mb-8 block">Nous Sommes à l'Écoute</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0F172A] mb-12 leading-[0.9]">
              Parlons de <br /> <span className="text-[#2E7D32] italic">votre Marche</span>.
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-16">
              Une question sur l'organisation ? Une envie de devenir partenaire ? 
              Ou simplement besoin de nous parler ? Notre équipe est disponible pour vous.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#005BA1] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Email</p>
                  <p className="text-lg font-bold text-[#0F172A]">contact@marcheavecjesus.bj</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2E7D32] group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Téléphone & WhatsApp</p>
                  <p className="text-lg font-bold text-[#0F172A]">+229 01 00 00 00 01</p>
                </div>
              </div>

              <div className="pt-12 border-t border-slate-100">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-8">Réseaux Sociaux</p>
                <div className="flex gap-10">
                  <Facebook className="w-6 h-6 text-[#0F172A] hover:text-[#1877F2] cursor-pointer transition-colors" />
                  <Instagram className="w-6 h-6 text-[#0F172A] hover:text-[#E4405F] cursor-pointer transition-colors" />
                  <Youtube className="w-6 h-6 text-[#0F172A] hover:text-[#FF0000] cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[60px] p-12 md:p-16 border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.05)]">
            <h3 className="text-3xl font-serif font-bold text-[#0F172A] mb-12 flex items-center gap-4">
               Envoyez un message <MessageSquare className="w-6 h-6 text-[#005BA1]" />
            </h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Nom Complet</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#005BA1]/20 transition-all" placeholder="Votre nom" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#005BA1]/20 transition-all" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Sujet</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#005BA1]/20 transition-all" placeholder="De quoi s'agit-il ?" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#005BA1]/20 transition-all resize-none" placeholder="Votre message..."></textarea>
              </div>
              <Button className="w-full !rounded-2xl !py-6 font-black uppercase tracking-[0.2em] text-xs">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
