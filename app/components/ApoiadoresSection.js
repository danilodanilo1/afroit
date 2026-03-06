"use client";

import { CheckCircle2, Handshake, ShieldCheck, Star } from "lucide-react";

export default function ApoiadoresSection() {
  const tiers = [
    {
      title: "MANTENEDORES",
      color: "from-orange-400 to-yellow-500",
      benefits: [
        "Acesso ilimitado talentos",
        "Cursos in company",
        "Visibilidade total",
        "Participação Hackaton",
      ],
      icon: ShieldCheck,
    },
    {
      title: "PATROCINADORES",
      color: "from-purple-600 to-pink-500",
      benefits: [
        "Participação Hackaton",
        "Estratégia formações",
        "Acesso limitado",
        "Divulgação social",
      ],
      icon: Star,
    },
    {
      title: "APOIADORES",
      color: "from-blue-500 to-cyan-400",
      benefits: ["Reconhecimento destacado", "Participação eventos", "Divulgação social"],
      icon: Handshake,
    },
  ];

  return (
    <section id="apoiadores" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-3xl font-black text-white italic md:text-5xl">
          Benefícios Apoiadores
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl"
            >
              <div
                className={`absolute left-8 top-0 h-4 w-16 rounded-b-xl bg-gradient-to-r ${tier.color} shadow-lg`}
              />
              <div className="mb-10 flex items-center gap-4 pt-4">
                <tier.icon className="text-white" size={24} />
                <h3 className="text-xl font-black text-white">{tier.title}</h3>
              </div>
              <ul className="mb-10 flex-grow space-y-4">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-pink-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-2xl bg-gradient-to-r ${tier.color} py-4 font-black tracking-widest text-white uppercase`}
                type="button"
              >
                Seja um {tier.title.slice(0, -1)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
