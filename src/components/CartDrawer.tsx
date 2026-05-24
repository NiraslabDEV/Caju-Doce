"use client";

import Image from "next/image";
import { useState } from "react";
import { formatMZM, useCart } from "@/lib/cart";
import { WHATSAPP_PHONE } from "@/lib/products";

export function CartDrawer() {
  const { isOpen, close, items, total, setQty, remove, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().slice(0, 10);
  })();

  const canSubmit = items.length > 0 && name.trim() && phone.trim() && address.trim() && date;

  function buildMessage() {
    const lines: string[] = [];
    lines.push("*Nova Encomenda — Cajú Doce*");
    lines.push("");
    lines.push(`*Cliente:* ${name}`);
    lines.push(`*Telefone:* ${phone}`);
    lines.push(`*Endereço:* ${address}`);
    lines.push(`*Data desejada:* ${date}`);
    if (notes.trim()) lines.push(`*Observações:* ${notes}`);
    lines.push("");
    lines.push("*Itens:*");
    items.forEach((it) => {
      lines.push(
        `• ${it.qty}× ${it.product.name} — ${formatMZM(it.qty * it.product.price)}`
      );
    });
    lines.push("");
    lines.push(`*Total: ${formatMZM(total)}*`);
    lines.push("");
    lines.push("_Encomenda enviada pelo site cajudoce_");
    return lines.join("\n");
  }

  function submit() {
    if (!canSubmit) return;
    const msg = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-wine-dark/40 backdrop-blur-sm"
          onClick={close}
          aria-hidden
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Carrinho de encomenda"
      >
        <div className="flex items-center justify-between border-b border-wine/10 p-4">
          <h2 className="font-serif text-xl text-wine">A Sua Encomenda</h2>
          <button
            onClick={close}
            className="rounded-full p-2 text-wine hover:bg-wine/10"
            aria-label="Fechar"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-ink/60">
              <span className="text-5xl">🧁</span>
              <p className="mt-3 text-sm">O seu cesto está vazio.</p>
              <button onClick={close} className="btn-ghost mt-5">
                Ver produtos
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li
                  key={it.product.id}
                  className="flex gap-3 rounded-xl border border-wine/10 bg-white/60 p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={it.product.image}
                      alt={it.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-wine">{it.product.name}</p>
                      <button
                        onClick={() => remove(it.product.id)}
                        className="text-xs text-ink/50 hover:text-wine"
                        aria-label="Remover"
                      >
                        Remover
                      </button>
                    </div>
                    <p className="text-xs text-ink/60">{it.product.priceLabel} / {it.product.unit}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-wine/20">
                        <button
                          onClick={() => setQty(it.product.id, Math.max(0, it.qty - 1))}
                          className="h-8 w-8 text-wine hover:bg-wine/5"
                          aria-label="Diminuir"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{it.qty}</span>
                        <button
                          onClick={() => setQty(it.product.id, it.qty + 1)}
                          className="h-8 w-8 text-wine hover:bg-wine/5"
                          aria-label="Aumentar"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-gold-dark">
                        {formatMZM(it.qty * it.product.price)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="mt-6 space-y-3 rounded-xl border border-wine/10 bg-white/60 p-4">
              <h3 className="font-serif text-lg text-wine">Dados de Entrega</h3>
              <p className="text-[11px] text-ink/60">
                Política: encomendas com no mínimo 48h de antecedência.
              </p>
              <div className="grid gap-3">
                <Field label="Nome completo" value={name} onChange={setName} placeholder="Ex: Ana Sitoe" />
                <Field label="Telefone" value={phone} onChange={setPhone} placeholder="+258 …" type="tel" />
                <Field
                  label="Endereço de entrega"
                  value={address}
                  onChange={setAddress}
                  placeholder="Bairro, rua, referência"
                />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-wider text-ink/60">
                    Data desejada
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="rounded-lg border border-wine/20 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-wider text-ink/60">
                    Observações (opcional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Mensagem no bolo, alergias, etc."
                    className="rounded-lg border border-wine/20 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-wine/10 bg-cream-dark/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm uppercase tracking-wider text-ink/60">Total</span>
              <span className="font-serif text-2xl text-wine">{formatMZM(total)}</span>
            </div>
            <button onClick={submit} disabled={!canSubmit} className="btn-gold w-full disabled:opacity-50">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.5 3.4A11.7 11.7 0 0 0 3.2 17.7L2 22l4.4-1.2A11.7 11.7 0 1 0 20.5 3.4Zm-8.5 18a9.6 9.6 0 0 1-4.9-1.3l-.3-.2-2.6.7.7-2.6-.2-.3a9.7 9.7 0 1 1 7.3 3.7Zm5.5-7.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-3.9-3.4c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7c0 1.6 1.1 3 1.3 3.3a10.6 10.6 0 0 0 5 4.4 4.8 4.8 0 0 0 2.9.4 3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.4Z"/>
              </svg>
              Enviar Encomenda via WhatsApp
            </button>
            <button onClick={clear} className="mt-2 w-full text-center text-xs text-ink/50 hover:text-wine">
              Esvaziar cesto
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium uppercase tracking-wider text-ink/60">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-wine/20 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
