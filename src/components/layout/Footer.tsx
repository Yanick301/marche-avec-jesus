import { motion } from "motion/react";
import { Youtube, Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { EVENT_DETAILS, COLORS } from "../../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", name: "FB" },
    { icon: Instagram, href: "#", name: "IG" },
    { icon: Twitter, href: "#", name: "TW" },
    { icon: Youtube, href: "#", name: "YT" },
  ];

  return (
    <footer className="bg-white pt-40 pb-20 border-t border-slate-100 text-[#0F172A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="inline-block mb-12">
              <img src="input_file_0.png" alt="Logo" className="h-20 w-auto" />
            </a>
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-10 leading-tight">
              Portons ensemble la <br /> <span className="text-[#005BA1] italic">lumière</span> du Messie.
            </h2>
            <div className="flex gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#2E7D32] mb-4">Emplacement</p>
                <p className="text-sm font-bold text-[#0F172A]">Place Goho, Abomey</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#2E7D32] mb-4">Fondation</p>
                <p className="text-sm font-bold text-[#0F172A]">20 Mai • 08:00</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 mb-12">Explorer</h4>
            <ul className="space-y-6">
              {["L'Événement", "Programme", "Localisation", "Participer"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs uppercase tracking-widest font-black text-[#0F172A] hover:text-[#005BA1] transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 mb-12">Nous Contacter</h4>
            <ul className="space-y-6">
              <li className="text-sm font-bold text-[#0F172A] hover:text-[#005BA1] transition-all cursor-pointer">
                contact@marcheavecjesus.bj
              </li>
              <li className="text-sm font-bold text-[#0F172A]">
                +229 01 00 00 00 01
              </li>
              <li className="pt-6">
                <span className="inline-block px-4 py-2 border border-blue-50 bg-blue-50/50 text-[#005BA1] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                  Assistance Continue
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">Présence Sociale</span>
            <div className="flex gap-8">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="text-xs font-black text-[#0F172A] hover:text-[#005BA1] transition-all tracking-[0.2em]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">
            © {currentYear} • MARCHE AVEC JESUS • ABOMEY
          </div>
        </div>
      </div>
    </footer>
  );
}
