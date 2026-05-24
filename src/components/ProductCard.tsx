"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-wine/10 bg-cream shadow-luxe">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wine/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-wine-dark shadow">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl text-wine">{product.name}</h3>
          <span className="whitespace-nowrap font-semibold text-gold-dark">
            {product.priceLabel}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink/75">{product.description}</p>

        {product.ideal.length > 0 && (
          <ul className="mt-1 space-y-1 text-xs text-ink/70">
            {product.ideal.slice(0, 3).map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gold-dark">•</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3">
          <button
            type="button"
            onClick={() => add(product, 1)}
            className="btn-primary w-full"
          >
            Adicionar à encomenda
          </button>
          <p className="mt-2 text-center text-[11px] uppercase tracking-wider text-ink/50">
            por {product.unit}
          </p>
        </div>
      </div>
    </article>
  );
}
