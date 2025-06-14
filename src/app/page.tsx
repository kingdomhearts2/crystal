"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Volume2, Sparkles, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

// Composant Particules Crystal en pur React/Canvas
function CrystalStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<
  {
    x: number;
    y: number;
    r: number;
    alpha: number;
    speed: number;
    twinkle: number;
    color: string;
  }[]
>([]);


  useEffect(() => {
    const count = 70;
    stars.current = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.02 + 0.007,
      twinkle: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "#fff" : (Math.random() > 0.5 ? "#d946ef" : "#6366f1")
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let running = true;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!running) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars.current) {
        const twinkle = (Math.sin(Date.now() * s.speed + s.twinkle) + 1) * 0.5;
        ctx.globalAlpha = s.alpha * (0.6 + twinkle * 0.7);

        ctx.beginPath();
        ctx.arc(
          s.x * canvas.width,
          s.y * canvas.height,
          s.r * dpr * (1 + twinkle * 0.6),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10 * dpr * (0.7 + twinkle * 0.7);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1.0;
      requestAnimationFrame(draw);
    };

    draw();
    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh", background: "transparent" }}
      aria-hidden
    />
  );
}


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white font-sans overflow-hidden">
      {/* Fond étoilé crystal */}
      <CrystalStarsBackground />

      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-pink-500 opacity-25 blur-[180px] rounded-full animate-pulse z-0"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600 opacity-15 blur-[160px] rounded-full animate-pulse z-0"></div>

      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center py-20 px-4 flex flex-col items-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          crystal.
        </h1>
        <p className="text-zinc-400 mt-6 text-lg max-w-xl mx-auto">Mix, Mastering & Production.</p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/crystal.svn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:underline"
          >
            <Instagram className="w-5 h-5" />
            @crystal.svn
          </a>
        </div>
      </motion.header>

      <section className="w-full max-w-5xl flex flex-col items-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-10">
          {[{
            icon: <Volume2 className="text-pink-400" />,
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
              transition={{ duration: 0.7, delay: i * 0.18 }}
              className="flex justify-center"
            >
              <Card className="bg-zinc-900 border-zinc-800 hover:border-pink-400 transition-colors duration-300 shadow-xl rounded-2xl min-w-[280px] max-w-md w-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-3 mb-5">
                    {item.icon}
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-zinc-400 text-center text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center px-4 md:px-10 py-14 z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Nos derniers mix</h3>
        <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm" style={{ borderRadius: 24 }}>
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
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full flex flex-col items-center px-4 md:px-10 py-14 bg-zinc-900/80 z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tarifs</h3>
        <div className="grid gap-4 text-zinc-300 text-center">
          <div><strong>Mixage + mastering au titre :</strong> à partir de 55€ par morceau</div>
        </div>
        <div className="mt-7 flex justify-center">
          <Link href="/pricing">
            <Button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white rounded-xl px-6 py-2 font-bold tracking-wide">
              Voir tous les Tarifs
            </Button>
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full flex flex-col items-center px-4 md:px-10 py-14 z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact</h3>
        <form
          className="grid gap-5 max-w-lg w-full mx-auto"
          action="https://formspree.io/f/xjkrwjgy"
          method="POST"
        >
          <Input name="name" placeholder="Votre nom" className="bg-zinc-800 border-zinc-700" />
          <Input name="email" type="email" placeholder="Adresse e-mail" className="bg-zinc-800 border-zinc-700" />
          <Textarea name="message" placeholder="Parlez-nous de votre projet..." className="bg-zinc-800 border-zinc-700" rows={5} />
          <div className="flex justify-center">
            <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white rounded-xl px-8 py-2 font-bold">
              <Mail className="mr-2 h-4 w-4" /> Envoyer
            </Button>
          </div>
        </form>
      </motion.section>

      <footer className="w-full text-center text-zinc-600 text-sm py-8 flex flex-col items-center gap-2 z-10">
        <div>
          © {new Date().getFullYear()} crystal.
        </div>
        <a
          href="https://www.instagram.com/crystal.svn/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-pink-400 hover:underline"
        >
          <Instagram className="w-4 h-4" />
          @crystal.svn
        </a>
      </footer>
    </main>
  );
}
