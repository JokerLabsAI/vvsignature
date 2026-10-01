export type Category = "bouquet" | "vaso" | "figura";

export const categories: { id: Category; label: string; description: string }[] = [
  { id: "bouquet", label: "Bouquets florales", description: "Flores de cera moldeadas a mano en caja o canasta." },
  { id: "vaso", label: "Velas en vaso", description: "Velas aromáticas en vaso para disfrutar en casa." },
  { id: "figura", label: "Velas de figura", description: "Piezas escultóricas en cera para regalos con intención." },
];

export type Product = {
  name: string;
  category: Category;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  includes?: string[];
  details?: string[];
  /** Optional second photo, revealed on hover. */
  hoverImage?: string;
  /** CSS object-position for the main photo (useful for side-by-side catalogue shots). */
  imagePosition?: string;
};

export const products: Product[] = [
  {
    name: "Signature Royale",
    category: "bouquet",
    subtitle: "Nuestra pieza más imponente",
    description:
      "Una creación exclusiva para quienes buscan regalar algo verdaderamente especial. Un bouquet artesanal que combina elegancia, delicadeza y un toque de distinción.",
    image: "/images/atelier/royale-front.jpg",
    hoverImage: "/images/atelier/royale-top.jpg",
    price: "$260.000 COP",
    details: ["36 velas aprox.", "1.800 g de cera", "30 flores grandes", "5 flores pequeñas", "1 mega rosa central"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Majestic Signature",
    category: "bouquet",
    subtitle: "Detalles que hablan sin palabras",
    description:
      "Una composición floral hecha completamente a mano para expresar cariño, admiración y amor. Cada flor se moldea artesanalmente para convertirse en una experiencia memorable.",
    image: "/images/atelier/majestic-front.jpg",
    hoverImage: "/images/atelier/majestic-top.jpg",
    price: "$160.000 COP",
    details: ["18 velas aprox.", "900 g de cera", "12 flores grandes", "5 flores pequeñas", "1 mega flor central"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Petit",
    category: "bouquet",
    subtitle: "Un pequeño detalle, un gran recuerdo",
    description:
      "Creación artesanal ideal para sorprender, celebrar una ocasión especial o regalar un gesto bonito que perdure más allá del momento.",
    image: "/images/atelier/petit-front.jpg",
    hoverImage: "/images/atelier/petit-angle.jpg",
    price: "$100.000 COP",
    details: ["500 g de cera aprox.", "10 flores grandes"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Mini",
    category: "bouquet",
    subtitle: "Delicado, sofisticado y lleno de significado",
    description:
      "Arreglo floral elaborado artesanalmente con velas en forma de flores y detalles cuidadosamente seleccionados.",
    image: "/images/atelier/mini-a.jpg",
    hoverImage: "/images/atelier/mini-b.jpg",
    price: "$80.000 COP",
    details: ["10 flores pequeñas"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Romance",
    category: "bouquet",
    subtitle: "Una expresión de amor y distinción",
    description:
      "Arreglo artesanal de rosas en cera, creado para transformar cada detalle en una expresión de amor, elegancia y distinción.",
    image: "/images/page-07-img-1.jpeg",
    imagePosition: "64% center",
    price: "$90.000 COP",
    details: ["15 flores pequeñas"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Signature Blossom",
    category: "bouquet",
    subtitle: "Una canasta que florece en cera",
    description:
      "Delicado arreglo floral elaborado artesanalmente con velas en forma de flores, creado para convertir cada regalo en un recuerdo especial.",
    image: "/images/atelier/blossom-front.jpg",
    hoverImage: "/images/atelier/blossom-angle.jpg",
    price: "Desde $120.000 COP",
    details: ["Grande: 36 flores — $270.000", "Mediana: 20 flores — $160.000", "Pequeña: 13 flores — $120.000"],
    includes: ["Pebetero", "Tarjeta personalizada", "Velas de té", "Botella con fósforos"],
  },
  {
    name: "Vela Lumière",
    category: "vaso",
    subtitle: "Luz, aroma y elegancia",
    description:
      "Vela 100% artesanal con aroma a hot chocolate, elaborada con 200 g de cera de soja.",
    image: "/images/page-09-img-1.jpeg",
    imagePosition: "40% center",
    price: "$65.000 COP",
    details: ["200 g de cera de soja", "Aroma hot chocolate"],
    includes: ["Tarjeta personalizada", "Botella con fósforos"],
  },
  {
    name: "Iced Coffee",
    category: "vaso",
    subtitle: "Tu café favorito, en cera",
    description:
      "Vela artesanal de doble mecha inspirada en un iced coffee: capas cremosas y detalles que parecen hielo, en un vaso de vidrio para disfrutar en casa.",
    image: "/images/atelier/iced-coffee-close.jpg",
    hoverImage: "/images/atelier/iced-coffee.jpg",
    price: "Precio a consultar",
    details: ["Doble mecha", "Vaso de vidrio"],
  },
  {
    name: "Velas Dentales",
    category: "figura",
    subtitle: "Una sonrisa hecha vela",
    description:
      "Velas escultóricas en forma de diente, elaboradas a mano en cera. Un detalle original para odontólogos, consultorios o para celebrar una nueva sonrisa.",
    image: "/images/atelier/dental.jpg",
    price: "Precio a consultar",
    details: ["Varios diseños", "Hechas a mano"],
  },
];
