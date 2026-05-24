export type Product = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  unit: string;
  description: string;
  ideal: string[];
  image: string;
  badge?: string;
};

export const WHATSAPP_PHONE = "258879732457";
export const WHATSAPP_LINK = "https://wa.me/258879732457";
export const INSTAGRAM = "https://instagram.com/cajudoce.ofc";
export const FACEBOOK = "https://facebook.com/cajudoce";

export const products: Product[] = [
  {
    id: "bolo-laranja-nobre",
    name: "Bolo Laranja Nobre",
    price: 650,
    priceLabel: "650 MZM",
    unit: "unidade",
    description:
      "Simples. Autêntico. Incrivelmente delicioso. Massa fofa e leve com aroma marcante de laranja fresca. Húmido na medida certa, sabor equilibrado e elegante.",
    ideal: [
      "Acompanhar um café ou chá especial",
      "Celebrar momentos em família",
      "Tornar aniversários ainda mais doces",
      "Presentear com sabor e carinho",
    ],
    image: "/produtos/bolo-laranja.jpg",
    badge: "Mais Pedido",
  },
  {
    id: "tarte-de-natas",
    name: "Tarte de Natas",
    price: 550,
    priceLabel: "550 MZM",
    unit: "dúzia",
    description:
      "Clássica, cremosa e irresistível. Massa crocante recheada com natas cremosas e levemente caramelizadas no topo. A expressão perfeita da doçaria tradicional.",
    ideal: [
      "Acompanhar um café ou chá especial",
      "Presentear com sabor e tradição",
      "Compartilhar com quem você ama",
    ],
    image: "/produtos/tarte-natas.jpg",
  },
  {
    id: "rolo-imperial",
    name: "Rolo Imperial",
    price: 400,
    priceLabel: "400 MZM",
    unit: "dúzia",
    description:
      "Tradição que se saboreia. Massa leve e delicadamente enrolada, recheada com creme suave e finalizada com açúcar refinado que confere um toque dourado.",
    ideal: [
      "Acompanhar um café ou chá da tarde",
      "Presentear com sabor e elegância",
      "Tornar momentos simples em ocasiões especiais",
    ],
    image: "/produtos/rolo-imperial.jpg",
  },
  {
    id: "bolachas-500g",
    name: "Bolachas Artesanais (500g)",
    price: 500,
    priceLabel: "500 MZM",
    unit: "embalagem 500g",
    description:
      "Variedade que encanta. Ingredientes selecionados, textura perfeita e sabor equilibrado. Formatos clássicos e acabamentos especiais (chocolate, glacê, granulados).",
    ideal: [
      "Acompanhar um café ou chá especial",
      "Presentear com elegância e carinho",
      "Servir em eventos e ocasiões especiais",
    ],
    image: "/produtos/bolachas.jpg",
  },
  {
    id: "bolachas-1kg",
    name: "Bolachas Artesanais (1Kg)",
    price: 900,
    priceLabel: "900 MZM",
    unit: "embalagem 1Kg",
    description:
      "A nossa caixa premium de bolachas artesanais com a variedade completa: formatos clássicos, chocolate, glacê e granulados. Perfeita para eventos e partilha.",
    ideal: [
      "Eventos e ocasiões especiais",
      "Presentes corporativos",
      "Famílias grandes e festas",
    ],
    image: "/produtos/bolachas.jpg",
  },
];

export const combos: Product[] = [
  {
    id: "combo-familia-luxo",
    name: "Combo Família Luxo",
    price: 1650,
    priceLabel: "1.650 MZM",
    unit: "combo",
    description:
      "Disponibilizado na campanha especial Sexta Dourada. Uma oportunidade única a preço especial.",
    ideal: [
      "1 Kg de Bolachas Variadas",
      "12 Muffins com Pepitas",
      "1 Bolo Loaf Cake",
    ],
    image: "/produtos/muffins.jpg",
    badge: "Sexta Dourada",
  },
  {
    id: "combo-especial-eid",
    name: "Combo Especial Eid",
    price: 1480,
    priceLabel: "1.480 MZM",
    unit: "combo",
    description:
      "Celebrado sob a campanha EID Mubarak. Para partilhar com afetos em momentos especiais em família.",
    ideal: [
      "1 Kg de Bolachas Artesanais",
      "12 Madeleines",
      "10 Mini Churros",
    ],
    image: "/enfeite/bolo-bonito.jpg",
    badge: "EID Mubarak",
  },
];
