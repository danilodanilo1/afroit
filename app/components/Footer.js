import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <Image
          src="/logo/logoAfroIt-v2.png"
          alt="Afro.it"
          width={150}
          height={44}
          className="h-11 w-auto"
        />
        <p className="text-[8px] font-bold tracking-widest text-slate-600 uppercase">
          © 2024 Afro.it | Iluminando Talentos da Periferia
        </p>
        <p className="text-[8px] font-bold tracking-widest text-slate-600 uppercase">
          Criado por <a href="https://www.nascoliver.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Nascoliver</a>
        </p>
      </div>
    </footer>
  );
}
