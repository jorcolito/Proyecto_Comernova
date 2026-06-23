import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Organizador Transparente para Refrigerador",
    slug: "organizador-transparente-refrigerador",
    description: "Ideal para mantener frutas, verduras y alimentos separados de forma elegante.",
    fullDescription:
      "Organizador transparente diseñado para optimizar el espacio dentro del refrigerador. Permite visualizar fácilmente los alimentos y mantener todo en orden.",
    measurements: "30 cm x 15 cm x 10 cm",
    price: 12.99,
    image: "/vite.svg",
    inStock: true,
  },
  {
    id: 2,
    name: "Canasta Organizadora Multiuso",
    slug: "canasta-organizadora-multiuso",
    description: "Perfecta para cocina, lavandería, baño o closet.",
    fullDescription:
      "Canasta organizadora multiuso con diseño práctico y moderno. Ideal para agrupar productos de limpieza, accesorios, ropa pequeña o artículos de cocina.",
    measurements: "35 cm x 25 cm x 18 cm",
    price: 16.5,
    image: "/vite.svg",
    inStock: true,
  },
  {
    id: 3,
    name: "Set de Contenedores Herméticos",
    slug: "set-contenedores-hermeticos",
    description: "Conserva alimentos secos de forma ordenada y estética.",
    fullDescription:
      "Set de contenedores herméticos para almacenar granos, cereales, frutos secos o snacks. Ayuda a mantener la despensa limpia, uniforme y visualmente agradable.",
    measurements: "Set de 4 piezas",
    price: 24.99,
    image: "/vite.svg",
    inStock: false,
  },
  {
    id: 4,
    name: "Organizador Giratorio",
    slug: "organizador-giratorio",
    description: "Una solución práctica para especias, cosméticos o productos pequeños.",
    fullDescription:
      "Organizador giratorio ideal para aprovechar espacios reducidos. Su diseño permite acceder fácilmente a productos de cocina, baño o tocador.",
    measurements: "Diámetro 28 cm x Alto 8 cm",
    price: 19.99,
    image: "/vite.svg",
    inStock: true,
  },
];