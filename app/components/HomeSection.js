"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronRight, Home, Zap } from "lucide-react";

function FusionAtom() {
    const [phase, setPhase] = useState("approach");

    useEffect(() => {
        const timer1 = setTimeout(() => setPhase("collision"), 2500);
        const timer2 = setTimeout(() => setPhase("explosion"), 3000);
        const timer3 = setTimeout(() => setPhase("logo"), 3500);

        const loop = setInterval(() => {
            setPhase("approach");
            setTimeout(() => setPhase("collision"), 2500);
            setTimeout(() => setPhase("explosion"), 3000);
            setTimeout(() => setPhase("logo"), 3500);
        }, 10000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearInterval(loop);
        };
    }, []);

    return (
        <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center overflow-visible lg:mx-0">
            <AnimatePresence>
                {(phase === "approach" || phase === "collision") && (
                    <motion.div
                        initial={{ x: -300, opacity: 0, scale: 0.5 }}
                        animate={{ x: phase === "collision" ? 0 : -80, opacity: 1, scale: 1, rotate: 360 }}
                        exit={{ scale: 2, opacity: 0 }}
                        transition={{ duration: phase === "collision" ? 0.5 : 2, ease: "easeInOut" }}
                        className="absolute z-20"
                    >
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-blue-500/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-sm md:h-40 md:w-40">
                            <Home className="text-blue-400" size={40} />
                            <div className="absolute inset-0 animate-ping rounded-full border border-blue-400/20" />
                            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                                PERIFERIA
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(phase === "approach" || phase === "collision") && (
                    <motion.div
                        initial={{ x: 300, opacity: 0, scale: 0.5 }}
                        animate={{ x: phase === "collision" ? 0 : 80, opacity: 1, scale: 1, rotate: -360 }}
                        exit={{ scale: 2, opacity: 0 }}
                        transition={{ duration: phase === "collision" ? 0.5 : 2, ease: "easeInOut" }}
                        className="absolute z-20"
                    >
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-orange-500/30 bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.2)] backdrop-blur-sm md:h-40 md:w-40">
                            <Building2 className="text-orange-400" size={40} />
                            <div
                                className="absolute inset-0 animate-ping rounded-full border border-orange-400/20"
                                style={{ animationDelay: "0.5s" }}
                            />
                            <div className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                                MERCADO
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {phase === "explosion" && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center">
                        {[...Array(20)].map((_, i) => {
                            const angle = (i / 20) * Math.PI * 2;
                            const distance = 120 + (i % 5) * 20;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{ scale: [1, 0], x: Math.cos(angle) * distance, y: Math.sin(angle) * distance }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"
                                />
                            );
                        })}
                        <motion.div
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute h-20 w-20 rounded-full bg-white blur-xl"
                        />
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {phase === "logo" && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="absolute z-40 flex flex-col items-center text-center"
                    >
                        <div className="group relative mt-16">
                            <div className="absolute inset-0 transition-opacity group-hover:opacity-60" />
                            <div className="relative flex h-48 w-48 items-center justify-center rounded-full  shadow-[0_0_60px_rgba(236,72,153,0.4)] md:h-64 md:w-64">
                                <Image
                                    src="/logo/logoAfroIt-v2.png"
                                    alt="Afro.it logo"
                                    width={180}
                                    height={180}
                                    className="h-24 w-24 object-contain md:h-32 md:w-32"
                                    priority
                                />
                                <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-white/20" />
                                <div className="absolute inset-4 animate-spin-reverse rounded-full border border-white/10" />
                            </div>
                        </div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                        >
                            <Zap size={14} className="fill-orange-400 text-orange-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                                Revelando talentos
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 opacity-20">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 1" />
                </svg>
            </div>
        </div>
    );
}

export default function HomeSection() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="home" className="relative flex min-h-[90vh] scroll-mt-28 items-center overflow-hidden px-6 pt-20">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="mb-8 text-4xl leading-[1.1] mt-8 font-black text-white md:text-7xl">
                        Iluminando Caminhos <br />
                        <span className="bg-gradient-to-r from-[#ec4899] to-[#f97316] bg-clip-text text-transparent italic">
                            Abrindo portas para o futuro.
                        </span>
                    </h1>
                    <div className="mx-auto w-full max-w-[500px] lg:hidden">
                        <FusionAtom />
                    </div>

                    <p className="mx-auto mb-8 max-w-lg text-xl leading-relaxed text-slate-300 lg:mx-0">
                        A Afro.it conecta a energia transformadora da periferia com as demandas reais das empresas.
                        Criamos o match perfeito que gera valor e impacto social.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <button
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f97316] px-8 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition-transform hover:scale-105"
                            onClick={() => scrollToSection("cursos")}
                            type="button"
                        >
                            Nossos Cursos <ChevronRight size={18} />
                        </button>
                        <button
                            className="rounded-full border border-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white/5"
                            onClick={() => scrollToSection("apoiadores")}
                            type="button"
                        >
                            Seja um Apoiador
                        </button>
                    </div>
                </motion.div>

                <div className="relative hidden py-20 lg:block">
                    <FusionAtom />
                </div>

            </div>
        </section>
    );
}
