import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { RegistrationFormData } from "../../types";
import { COLORS } from "../../constants";
import Button from "../ui/Button";

const schema = z.object({
  firstName: z.string().min(2, "Le prénom est requis (min 2 caractères)"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
});

export default function Registration() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setStatus("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Une erreur est survenue.");
      }

      setStatus("success");
      reset();
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  if (status === "success") {
    return (
      <section id="register" className="py-40 bg-[#005BA1]">
        <div className="container mx-auto px-6 max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-16 text-center rounded-[60px] shadow-2xl border-[12px] border-[#005BA1]/10"
          >
            <div className="w-24 h-24 bg-[#E3F2FD] text-[#005BA1] rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6 tracking-tight">C'est confirmé !</h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed italic">
              "Merci de nous rejoindre. Votre participation gratuite est bien enregistrée. Nous avons hâte de marcher avec vous."
            </p>
            <Button onClick={() => setStatus("idle")} className="w-full !rounded-full !bg-[#F1F5F9] !text-slate-600 py-5 font-black uppercase tracking-widest text-xs border-none hover:bg-slate-200 transition-all">
              Nouvelle inscription
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-32 bg-[#005BA1] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E7D32]/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#005BA1]/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-100/60 mb-8 block">
              INVITATION À TOUS
            </span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-10 leading-[0.95]">
              Participez <br/> <span className="text-[#2E7D32] italic">avec Jésus</span>
            </h2>
            <p className="text-blue-50/70 text-xl mb-12 leading-relaxed max-w-lg font-light italic">
              "Que vous soyez croyant ou non, vous êtes invité à marcher avec nous. C'est totalement gratuit et ouvert à tout le monde."
            </p>
            
            <div className="space-y-8">
              {[
                "Participation totalement gratuite",
                "Ouvert à tous (croyants ou non)",
                "Marche de fraternité simple",
                "Unité autour de Jésus"
              ].map((item) => (
                <div key={item} className="flex items-center gap-6 text-white text-sm font-bold tracking-wide">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white p-12 md:p-20 rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative border-[16px] border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Prénom</label>
                  <input
                    {...register("firstName")}
                    className={`w-full px-6 py-5 bg-[#F8FAFC] rounded-2xl border-2 border-transparent transition-all outline-none text-slate-900 font-medium focus:border-[#005BA1]/10 focus:bg-white focus:shadow-xl ${
                       errors.firstName ? "border-red-100 bg-red-50" : ""
                    }`}
                    placeholder="Jean"
                  />
                  {errors.firstName && <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Nom</label>
                  <input
                    {...register("lastName")}
                    className={`w-full px-6 py-5 bg-[#F8FAFC] rounded-2xl border-2 border-transparent transition-all outline-none text-slate-900 font-medium focus:border-[#005BA1]/10 focus:bg-white focus:shadow-xl ${
                       errors.lastName ? "border-red-100 bg-red-50" : ""
                    }`}
                    placeholder="Dossou"
                  />
                  {errors.lastName && <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Mon Contact Email</label>
                <input
                  {...register("email")}
                  className={`w-full px-6 py-5 bg-[#F8FAFC] rounded-2xl border-2 border-transparent transition-all outline-none text-slate-900 font-medium focus:border-[#005BA1]/10 focus:bg-white focus:shadow-xl ${
                    errors.email ? "border-red-100 bg-red-50" : ""
                  }`}
                  placeholder="jean.dossou@email.com"
                />
                {errors.email && <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.email.message}</p>}
              </div>

              {status === "error" && (
                <div className="p-5 bg-red-50 text-red-700 rounded-2xl text-[10px] font-bold uppercase tracking-wider flex gap-3 border border-red-100">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full !rounded-full !bg-[#005BA1] !text-white !py-6 text-xs font-black uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(0,91,161,0.3)] hover:shadow-[0_20px_50px_rgba(0,91,161,0.5)] transition-all flex items-center justify-center gap-4 group"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Patience...
                  </>
                ) : (
                  <>
                    Confirmer ma participation <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
