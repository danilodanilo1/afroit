"use client";

import { motion } from "framer-motion";

export default function MetricasSection() {
  const data = [
    { label: "Escolas Parceiras", value: "04", color: "from-orange-400 to-yellow-500" },
    { label: "Alunos nas Escolas", value: "3.000", color: "from-purple-600 to-pink-500" },
    { label: "Conversão", value: "34%", color: "from-blue-500 to-cyan-400" },
    { label: "Universo de Alunos", value: "670", color: "from-pink-600 to-red-500" },
    { label: "Adesão à Proposta", value: "228", color: "from-yellow-400 to-green-500" },
  ];

  return (
    <section id="metricas" className="scroll-mt-28 px-6 py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-20 text-3xl font-black text-white italic md:text-5xl">Atuação Até Junho/2024</h2>
        <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full border-t-2 border-dashed border-white/10 md:block" />
          {data.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -10 }} className="flex flex-col items-center">
              <div
                className={`flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-2xl md:h-40 md:w-40`}
              >
                <span className="text-3xl font-black text-white md:text-4xl">{item.value}</span>
              </div>
              <p className="mt-8 text-xs font-black tracking-widest text-slate-500 uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
