"use client";

import { motion } from "framer-motion";
import { GraduationCap, Handshake, Users, Building2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function OQueFazemosSection() {
    const motivators = [
        {
            id: "01",
            title: "CONEXÃO",
            desc: "Elo entre empresas que precisam de mão de obra qualificada e os milhões de brasileiros disponíveis.",
            icon: Handshake,
            color: "from-pink-500 to-rose-600",
        },
        {
            id: "02",
            title: "CAPACITAÇÃO",
            desc: "Preparo em habilidades técnicas e comportamentais para atuação em áreas de alta demanda.",
            icon: GraduationCap,
            color: "from-blue-500 to-indigo-600",
        },
        {
            id: "03",
            title: "REPRESENTATIVIDADE",
            desc: "Professores e facilitadores cujo histórico de vida conecta diretamente com a história dos talentos.",
            icon: Users,
            color: "from-yellow-400 to-orange-500",
        },
    ];

    return (
        <>
     <section id="fazemos" className="py-20 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 italic uppercase tracking-tighter">O que fazemos?</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-xl leading-relaxed">
            Nós somos a conexão inteligente entre a necessidade do mercado e o potencial invisibilizado da periferia.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        
        {/* Lado 1: Empresas (Acima no mobile, Esquerda no desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[40%] group relative"
        >
          <div className="absolute inset-0 bg-orange-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 md:p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
              <Building2 size={32} />
            </div>
            <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2">Empresas</p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase italic">Oportunidades <br/>não preenchidas</h3>
          </div>
        </motion.div>

        {/* Centro: O Conector Dinâmico */}
        <div className="relative flex-1 flex md:flex-col items-center justify-center py-4 md:py-0 w-full">
           {/* Linha de Conexão Vertical (Mobile) / Horizontal (Desktop) */}
           <div className="absolute w-0.5 h-[120px] md:h-0.5 md:w-full bg-gradient-to-b md:bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 opacity-30" />
           
           <motion.div 
             initial={{ scale: 0, rotate: -45 }}
             whileInView={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
             viewport={{ once: true }}
             className="relative z-20"
           >
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] ring-8 ring-black">
                 <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter"><Image src="/logo/logoAfroIt-v2.png" alt="Afro.it logo" width={80} height={80} className="h-20 w-20 md:h-32 md:w-32 object-contain" /></div>
              </div>
              {/* Partículas de Match flutuando */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 rounded-full border-2 border-pink-500/20" 
              />
           </motion.div>
        </div>

        {/* Lado 2: Talentos (Abaixo no mobile, Direita no desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[40%] group relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 md:p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Users size={32} />
            </div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Talentos</p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase italic">Em busca de <br/>qualificação</h3>
          </div>
        </motion.div>
      </div>
      
      {/* Texto de Fechamento da Seção */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <Sparkles size={14} className="text-amber-400" /> Match perfeito através da educação
        </span>
      </motion.div>
    </section>

            <section className="bg-slate-900/20 px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-start gap-16 lg:flex-row">
                        <div className="lg:w-1/3">
                            <h2 className="mb-8 text-4xl font-black text-white italic">O que nos move?</h2>
                            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                                <div className="mb-4 text-xl font-black tracking-tighter text-orange-500">AFRO IT</div>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    Capacitamos talentos das periferias pelo Brasil afora para terem habilidades técnicas e comportamentais.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6 lg:w-2/3">
                            {motivators.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-white/5 bg-white/5 p-8 md:flex-row"
                                >
                                    <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.color}`} />
                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                                    >
                                        <item.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-2xl font-black text-white">{item.title}</h3>
                                        <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div className="mt-20 rounded-[40px] border border-white/5 bg-gradient-to-r from-[#ec4899]/5 to-[#f97316]/5 p-10 text-center">
                        <p className="text-xl leading-relaxed font-medium text-slate-100 italic md:text-3xl">
                            &quot;Qualificamos os talentos através de habilidades técnicas e comportamentais. Pois acreditamos que o conhecimento transforma vidas e muda realidades&quot;
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
