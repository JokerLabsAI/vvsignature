export type Product = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  includes: string[];
  details?: string[];
};

export const products: Product[] = [
  {
    name: "Signature Royale",
    subtitle: "Nuestra pieza más imponente",
    description:
      "Una creación exclusiva para quienes buscan regalar algo verdaderamente especial. Un bouquet artesanal que combina elegancia, delicadeza y un toque de distinción.",
    image: "/images/page-03-img-1.jpeg",
    price: "$260.000 COP",
    details: ["36 velas aprox.", "1.800 g de cera", "30 flores grandes", "5 flores pequeñas", "1 mega rosa central"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Majestic Signature",
    subtitle: "Detalles que hablan sin palabras",
    description:
      "Una composición floral hecha completamente a mano para expresar cariño, admiración y amor. Cada flor se moldea artesanalmente para convertirse en una experiencia memorable.",
    image: "/images/page-04-img-1.png",
    price: "$160.000 COP",
    details: ["18 velas aprox.", "900 g de cera", "12 flores grandes", "5 flores pequeñas", "1 mega flor central"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Petit",
    subtitle: "Un pequeño detalle, un gran recuerdo",
    description:
      "Creación artesanal ideal para sorprender, celebrar una ocasión especial o regalar un gesto bonito que perdure más allá del momento.",
    image: "/images/page-05-img-1.png",
    price: "$100.000 COP",
    details: ["500 g de cera aprox.", "10 flores grandes"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Mini",
    subtitle: "Delicado, sofisticado y lleno de significado",
    description:
      "Arreglo floral elaborado artesanalmente con velas en forma de flores y detalles cuidadosamente seleccionados.",
    image: "/images/page-06-img-1.png",
    price: "$80.000 COP",
    details: ["10 flores pequeñas"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Romance",
    subtitle: "Una expresión de amor y distinción",
    description:
      "Arreglo artesanal de rosas en cera, creado para transformar cada detalle en una expresión de amor, elegancia y distinción.",
    image: "/images/page-07-img-1.jpeg",
    price: "$90.000 COP",
    details: ["15 flores pequeñas"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Blossom",
    subtitle: "Una canasta que florece en cera",
    description:
      "Delicado arreglo floral elaborado artesanalmente con velas en forma de flores, creado para convertir cada regalo en un recuerdo especial.",
    image: "/images/page-08-img-1.jpeg",
    price: "Desde $120.000 COP",
    details: ["Grande: 36 flores — $270.000", "Mediana: 20 flores — $160.000", "Pequeña: 13 flores — $120.000"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Vela Lumière",
    subtitle: "Luz, aroma y elegancia",
    description:
      "Vela 100% artesanal con aroma a hot chocolate, elaborada con 200 g de cera de soja.",
    image: "/images/page-09-img-1.jpeg",
    price: "$65.000 COP",
    details: ["200 g de cera de soja", "Aroma hot chocolate"],
    includes: ["Tarjeta personalizada", "Botella con fósforos"],
  },
];
