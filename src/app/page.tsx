import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Volume2, Sparkles, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold tracking-wide">crystal.</h1>
        <p className="text-zinc-400 mt-4 text-lg">
          Mix, Mastering & Production.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-20 py-10">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Volume2 className="text-pink-500" />
              <h2 className="text-xl font-semibold">Mixage</h2>
            </div>
            <p className="text-zinc-400 text-sm">
              Arrangement et traitement vocal, sculpté avec des effets modernes pour un son actuel. Équilibre, profondeur et clarté garantis.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-blue-400" />
              <h2 className="text-xl font-semibold">Mastering</h2>
            </div>
            <p className="text-zinc-400 text-sm">
              Un rendu professionnel, prêt pour toutes les plateformes. Plus fort, plus net, sans distorsion ni écrasement.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="px-6 md:px-20 py-12">
        <h3 className="text-2xl font-bold mb-6">Nos derniers mix</h3>
        <div
          className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
          style={{ borderRadius: 24 }}
        >
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
      </section>

      <section className="px-6 md:px-20 py-12 bg-zinc-900">
        <h3 className="text-2xl font-bold mb-6">Tarifs</h3>
        <div className="grid gap-4 text-zinc-300">
          <div>
            <strong>Mixage vocal au titre :</strong> à partir de 40€ par morceau
          </div>
          <div>
            <strong>Mixage + mastering au titre :</strong> à partir de 55€ par morceau
          </div>
          <div>
			<strong>Mastering au titre :</strong> à partir de 30€ par morceau
          </div>
		  <div>
			<strong>3 titres mix + master :</strong> à partir de 100€
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12">
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
      </section>

      <footer className="text-center text-zinc-600 text-sm py-6">
        © {new Date().getFullYear()} crystal – Mix & Mastering en ligne
      </footer>
    </main>
  );
}
