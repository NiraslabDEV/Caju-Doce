import { FACEBOOK, INSTAGRAM, WHATSAPP_LINK } from "@/lib/products";

export function Footer() {
  return (
    <footer id="contacto" className="mt-20 border-t border-wine/10 bg-wine text-cream">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl text-gold-light">Cajú Doce</h3>
          <p className="mt-2 text-sm text-cream/80">
            O Seu Paladar De Luxo Merece um Sabor Autêntico.
          </p>
          <p className="mt-4 text-sm text-cream/80">
            Bolos, Bolachas e Doces Premium feitos com ingredientes
            selecionados em Marracuene, Moçambique.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Contactos
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li>📍 Marracuene, Moçambique</li>
            <li>
              📱{" "}
              <a className="underline-offset-2 hover:underline" href={WHATSAPP_LINK}>
                +258 87 973 2457 (WhatsApp)
              </a>
            </li>
            <li>🕐 Seg – Sáb · Encerrado aos Domingos</li>
            <li>⏱️ Encomendas com 48h de antecedência</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Redes Sociais
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={INSTAGRAM} className="hover:text-gold-light">
                Instagram · @cajudoce.ofc
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} className="hover:text-gold-light">
                Instagram · @cajudoce.academy.ofc
              </a>
            </li>
            <li>
              <a href={FACEBOOK} className="hover:text-gold-light">
                Facebook · Caju Doce
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Cajú Doce · Qualidade que se sente. Sabor que se lembra.
      </div>
    </footer>
  );
}
