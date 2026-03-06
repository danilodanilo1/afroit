"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ApoiadoresSection from "./components/ApoiadoresSection";
import Background3D from "./components/Background3D";
import ContatoSection from "./components/ContatoSection";
import CursosSection from "./components/CursosSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import MetricasSection from "./components/MetricasSection";
import Navbar from "./components/Navbar";
import OQueFazemosSection from "./components/OQueFazemosSection";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-slate-200 antialiased selection:bg-pink-500 selection:text-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <Image
                src="/logo/logoAfroIt-v2.png"
                alt="Afro.it"
                width={220}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.main key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <Background3D />
            <Navbar />
            <HomeSection />
            <OQueFazemosSection />
            <CursosSection />
            <MetricasSection />
            <ApoiadoresSection />
            <ContatoSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
