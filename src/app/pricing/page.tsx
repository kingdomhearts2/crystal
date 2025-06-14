"use client";

import { motion } from "framer-motion";
import { Sparkles, Volume2 } from "lucide-react";

const tarifs = [
  {
    title: "🎚️ Mixage vocal (à l’unité)",
    price: "40€",
    desc: "Édition, balance, spatialisation, FX modernes.",
    color: "from-pink-500 to-pink-400",
  },
  {
    title: "✨ Mixage + Mastering",
    price: "55€",
    desc: "Un rendu final prêt à diffuser sur toutes les plateformes.",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "📀 Mastering seul",
    price: "30€",
    desc: "Loudness optimal, clarté et impact sans écrasement.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "🔥 Pack 3 titres Mix + Master",
    price: "100€",
    desc: "Idéal pour EP ou lancement de projet.",
    color: "from-green-500 to-teal-400",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white px-6 py-16 font-sans relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[200px] rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[180px] rounded-full animate-pulse"></div>

      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-fade-in-up">
          Tarifs
        </h1>
        <p className="text-zinc-400 text-lg mt-4 animate-fade-in-up delay-150">
          Des services clairs, pros et adaptés à ton projet.
        </p>
      </header>

      <section className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-2">
        {tarifs.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`rounded-3xl p-1 bg-gradient-to-br ${t.color} shadow-lg relative hover:scale-[1.03] transition-transform`}
          >
            <div className="bg-zinc-950 p-6 rounded-[inherit] h-full flex flex-col justify-between border border-zinc-800">
              <div>
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  {i % 2 === 0 ? <Volume2 className="text-pink-500 w-5 h-5" /> : <Sparkles className="text-blue-400 w-5 h-5" />} {t.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
              <div className="mt-6 text-right text-white text-xl font-bold">
                à partir de <span className="text-white">{t.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="text-center text-zinc-600 text-sm mt-24 animate-fade-in-up delay-300">
        © {new Date().getFullYear()} crystal.
      </footer>
    </main>
  );
}
