import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { combos, products, WHATSAPP_LINK } from "@/lib/products";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/enfeite/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 via-wine/70 to-wine-dark/90" />
        </div>

        <div className="container-page flex min-h-[78vh] flex-col items-start justify-center py-16 text-cream sm:py-24">
          <span className="rounded-full bg-gold/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
            Marracuene · Moçambique
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            O seu paladar de luxo merece um{" "}
            <span className="text-gold-light">sabor autêntico</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/90 sm:text-lg">
            Bolos, bolachas e doces premium feitos artesanalmente, com
            ingredientes selecionados e muito carinho.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produtos" className="btn-gold">Ver Menu</a>
            <a href={WHATSAPP_LINK} className="btn-ghost border-cream/40 text-cream hover:bg-cream/10">
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/80">
            <Pill>⏱️ Encomendas com 48h</Pill>
            <Pill>🕐 Seg – Sáb</Pill>
            <Pill>🎁 Combos especiais</Pill>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="container-page py-16 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Menu de Produtos
          </span>
          <h2 className="section-title mt-2">Nossas Especialidades</h2>
          <div className="mt-4 h-px w-24 bg-gold" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SOBRE / FAIXA DOURADA */}
      <section id="sobre" className="bg-wine text-cream">
        <div className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-luxe">
            <Image
              src="/enfeite/bolo-bonito.jpg"
              alt="Bolo artesanal Cajú Doce"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Sobre nós
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Tradição, elegância e sabor inesquecível.
            </h2>
            <p className="mt-4 text-cream/85">
              Na <strong>Cajú Doce</strong> celebramos a doçaria com o cuidado
              do artesanal. Cada produto é feito com ingredientes selecionados,
              tempo certo de forno e um toque de carinho que transforma momentos
              simples em ocasiões memoráveis.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/90">
              <li>✨ Bolos, bolachas e doces premium</li>
              <li>📍 Marracuene, Moçambique</li>
              <li>📅 Encomendas com no mínimo 48h de antecedência</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMBOS */}
      <section id="combos" className="container-page py-16 sm:py-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Promocionais
          </span>
          <h2 className="section-title mt-2">Combos Especiais</h2>
          <div className="mt-4 h-px w-24 bg-gold" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {combos.map((c) => (
            <ProductCard key={c.id} product={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 pt-4">
        <div className="rounded-3xl bg-gradient-to-br from-wine to-wine-dark p-10 text-center text-cream shadow-luxe sm:p-14">
          <p className="font-serif text-2xl italic text-gold-light sm:text-3xl">
            "Qualidade que se sente. Sabor que se lembra."
          </p>
          <p className="mt-3 text-cream/80">Reserva já o teu — 48h de antecedência.</p>
          <a href={WHATSAPP_LINK} className="btn-gold mt-6">
            Encomendar agora
          </a>
        </div>
      </section>
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-xs">
      {children}
    </span>
  );
}
