"use client";

import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function ContatoSection() {
  return (
    <section id="contato" className="scroll-mt-28 px-6 py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
        <div className="flex flex-col justify-center lg:w-1/2">
          <h2 className="mb-8 text-4xl font-black text-white italic md:text-6xl">
            Vamos{" "}
            <span className="bg-gradient-to-r from-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
              Conectar?
            </span>
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <Mail className="text-pink-500" size={24} />
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500">E-mail</p>
                <p className="font-bold text-white">contato@afroit.com.br</p>
              </div>
            </div>
            <a href="https://wa.me/5519982869472" className="group flex items-center gap-6">
              <MessageCircle className="text-green-500" size={24} />
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500">WhatsApp</p>
                <p className="font-bold text-white">19 98286-9472</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/afro.it.oficial/"
              className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3"
            >
              <Instagram className="text-pink-500" size={20} />
              <span className="text-xs font-black">@afro.it.oficial</span>
            </a>
          </div>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 lg:w-1/2">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 text-white"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 text-white"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows="4"
              className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 text-white"
            />
            <button
              className="w-full rounded-2xl bg-gradient-to-r from-[#ec4899] to-[#f97316] py-5 font-black text-white uppercase"
              type="button"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
