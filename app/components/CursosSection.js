"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, BarChart3, Languages, Rocket, ShoppingBag, Truck } from "lucide-react";

export default function CursosSection() {
  const courses = [
    {
      id: "01",
      title: "LOGÍSTICA",
      desc: "Transportes, armazenamento, varejo, distribuição.",
      icon: Truck,
      color: "from-red-500 to-orange-600",
    },
    {
      id: "02",
      title: "PROMOTOR DE VENDAS",
      desc: "Indústria, tecnologia, e-commerce, varejo.",
      icon: ShoppingBag,
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: "03",
      title: "MARKETING DIGITAL",
      desc: "Presença online e diversos mercados.",
      icon: BarChart3,
      color: "from-green-400 to-emerald-600",
    },
    {
      id: "04",
      title: "EMPREENDEDORISMO",
      desc: "Gestão e criação de novos negócios.",
      icon: Rocket,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "05",
      title: "CONSULTOR VENDAS",
      desc: "Instituições de ensino e consultorias.",
      icon: BadgeDollarSign,
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: "06",
      title: "INGLÊS NEGÓCIOS",
      desc: "Diferencial competitivo global.",
      icon: Languages,
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <section id="cursos" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-3xl font-black text-white italic md:text-5xl">Trilhas de Acesso</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white transition-transform group-hover:rotate-6`}
              >
                <course.icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-black text-white">{course.title}</h3>
              <p className="text-sm text-slate-400">{course.desc}</p>
              <div className="absolute right-0 top-0 p-4 text-4xl font-black opacity-10">{course.id}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
