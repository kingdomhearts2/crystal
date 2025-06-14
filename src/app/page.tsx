"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Volume2, Sparkles, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white font-sans relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[200px] rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[180px] rounded-full animate-pulse"></div>

      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4"
      >
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          crystal.
        </h1>
        <p className="text-zinc-400 mt-4 text-lg">Mix, Mastering & Production.</p>
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.instagram.com/crystal.svn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 hover:underline"
          >
            <Instagram className="w-5 h-5" />
            @crystal.svn
          </a>
        </div>
      </motion.header>

      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-20 py-10">
        {[{
          icon: <Volume2 className="text-pink-500" />,
          title: "Mixage",
          desc: "Arrangement et traitement vocal, sculpté avec des effets modernes pour un son actuel. Équilibre, profondeur et clarté garantis."
        }, {
          icon: <Sparkles className="text-blue-400" />,
          title: "Mastering",
          desc: "Un rendu professionnel, prêt pour toutes les plateformes. Plus fort, plus net, sans distorsion ni écrasement."
        }].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:border-pink-500 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-20 py-12"
      >
        <h3 className="text-2xl font-bold mb-6">Nos derniers mix</h3>
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg" style={{ borderRadius: 24 }}>
          <iframe
            src="https://untitled.stream/embed/w12gA9p0IH0L"
            width="100%"
            height="344"
            allowFullScreen
            allow="picture-in-picture"
            frameBorder="0"
            loading="lazy"
            className="block"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-6 md:px-20 py-12 bg-zinc-900"
      >
        <h3 className="text-2xl font-bold mb-6">Tarifs</h3>
        <div className="grid gap-4 text-zinc-300">
          <div><strong>Mixage + mastering au titre :</strong> à partir de 55€ par morceau</div>
        </div>
        <div className="mt-6">
          <Link href="/pricing">
            <Button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white">
              Voir tout les Tarifs
            </Button>
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 md:px-20 py-12"
      >
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <form
          className="grid gap-4 max-w-xl"
          action="https://formspree.io/f/xjkrwjgy"
          method="POST"
        >
          <Input name="name" placeholder="Votre nom" className="bg-zinc-800 border-zinc-700" />
          <Input name="email" type="email" placeholder="Adresse e-mail" className="bg-zinc-800 border-zinc-700" />
          <Textarea name="message" placeholder="Parlez-nous de votre projet..." className="bg-zinc-800 border-zinc-700" rows={5} />
          <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white w-fit">
            <Mail className="mr-2 h-4 w-4" /> Envoyer
          </Button>
        </form>
      </motion.section>

      <footer className="text-center text-zinc-600 text-sm py-6 space-y-2">
        <div>
          © {new Date().getFullYear()} crystal – Mix, Mastering & Production
        </div>
        <a
          href="https://www.instagram.com/crystal.svn/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-pink-500 hover:underline"
        >
          <Instagram className="w-4 h-4" />
          @crystal.svn
        </a>
      </footer>
    </main>
  );
}
