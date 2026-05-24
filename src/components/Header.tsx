"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count, open } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-wine/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold sm:h-12 sm:w-12">
            <Image src="/logo.jpg" alt="Cajú Doce" fill className="object-cover" sizes="48px" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-wide text-wine sm:text-xl">
              CAJÚ DOCE
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-gold-dark sm:block">
              Paladar de Luxo
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-wine md:flex">
          <a href="#produtos" className="hover:text-gold-dark">Produtos</a>
          <a href="#combos" className="hover:text-gold-dark">Combos</a>
          <a href="#sobre" className="hover:text-gold-dark">Sobre</a>
          <a href="#contacto" className="hover:text-gold-dark">Contacto</a>
        </nav>

        <button
          type="button"
          onClick={open}
          aria-label="Abrir carrinho"
          className="relative inline-flex items-center gap-2 rounded-full bg-wine px-3 py-2 text-cream shadow-luxe transition hover:bg-wine-dark sm:px-4"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.5L21 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1.4" fill="currentColor" />
            <circle cx="17" cy="20" r="1.4" fill="currentColor" />
          </svg>
          <span className="hidden text-sm font-semibold sm:inline">Encomenda</span>
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-wine-dark ring-2 ring-cream">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
