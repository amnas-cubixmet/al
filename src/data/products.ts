export type MainCategory =
  | "Conduit & Fittings"
  | "Boxes & Enclosures"
  | "Cable Management"
  | "Glands & Lugs"
  | "Circuit Protection"
  | "Wiring Accessories"
  | "Flexible Conduit"
  | "Tools & Accessories"
  | "Support Systems"
  | "Grounding";

export interface ProductVariant {
  id: number;
  code: string;
  title: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  mainCategory: MainCategory;
  mainCategoryAr?: string;
  image: string;
  description: string;
  descriptionAr?: string;
  variantCount: number;
  variants: ProductVariant[];
  featured?: boolean;
}

/**
 * AL MASAR catalogue reset.
 * Source: MASAR CATALOG 29.12.25
 * One product card / image per visual product family.
 * Repeated sizes/specifications are stored as variants.
 */
export const products: Product[] = [
  {
    id: "emt-conduit-pipe",
    slug: "emt-conduit-pipe",
    title: "EMT Conduit Pipe",
    category: "EMT Conduit Pipe",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-1.jpg",
    description:
      "Galvanized EMT conduit pipe for electrical installations, available in multiple sizes and specifications.",
    featured: true,
    variantCount: 9,
    variants: [
      { id: 1, code: "EMT-001", title: "EMT CONDUIT PIPE 1/2''" },
      { id: 2, code: "EMT-002", title: "EMT CONDUIT PIPE 3/4'' CHINA" },
      { id: 3, code: "EMT-003", title: "EMT CONDUIT PIPE 3/4'' ZINC TECH KSA" },
      { id: 4, code: "EMT-004", title: "EMT CONDUIT PIPE 1''" },
      { id: 5, code: "EMT-005", title: "EMT CONDUIT PIPE 1-1/4''" },
      { id: 6, code: "EMT-006", title: "EMT CONDUIT PIPE 1-1/2''" },
      { id: 7, code: "EMT-007", title: "EMT CONDUIT PIPE 2''" },
      { id: 8, code: "EMT-008", title: "EMT CONDUIT PIPE 2-1/2''" },
      { id: 9, code: "EMT-009", title: "EMT CONDUIT PIPE 3''" },
    ],
  },
  {
    id: "emt-bend",
    slug: "emt-bend",
    title: "EMT Bend",
    category: "EMT Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-10.jpg",
    description:
      "Galvanized EMT bend for clean conduit routing, available in multiple sizes.",
    featured: true,
    variantCount: 6,
    variants: [
      { id: 10, code: "EMT-010", title: "EMT BEND 1/2''" },
      { id: 11, code: "EMT-011", title: "EMT BEND 3/4''" },
      { id: 12, code: "EMT-012", title: "EMT BEND 1''" },
      { id: 13, code: "EMT-013", title: "EMT BEND 1-1/4''" },
      { id: 14, code: "EMT-014", title: "EMT BEND 1-1/2''" },
      { id: 15, code: "EMT-015", title: "EMT BEND 2''" },
    ],
  },
  {
    id: "emt-clamp-1-hole",
    slug: "emt-clamp-1-hole",
    title: "EMT Clamp 1 Hole",
    category: "EMT Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-16.jpg",
    description:
      "One-hole galvanized EMT clamp for secure surface mounting of conduit.",
    featured: true,
    variantCount: 9,
    variants: [
      { id: 16, code: "EMT-016", title: "EMT CLAMP 1 HOLE 1/2'' UL" },
      { id: 17, code: "EMT-017", title: "EMT CLAMP 1 HOLE 1/2'' CH" },
      { id: 18, code: "EMT-018", title: "EMT CLAMP 1 HOLE 3/4'' UL" },
      { id: 19, code: "EMT-019", title: "EMT CLAMP 1 HOLE 3/4'' CH" },
      { id: 20, code: "EMT-020", title: "EMT CLAMP 1 HOLE 1'' UL" },
      { id: 21, code: "EMT-021", title: "EMT CLAMP 1 HOLE 1'' CH" },
      { id: 22, code: "EMT-022", title: "EMT CLAMP 1 HOLE 1-1/4''" },
      { id: 23, code: "EMT-023", title: "EMT CLAMP 1 HOLE 1-1/2''" },
      { id: 24, code: "EMT-024", title: "EMT CLAMP 1 HOLE 2''" },
    ],
  },
  {
    id: "emt-clamp-2-hole",
    slug: "emt-clamp-2-hole",
    title: "EMT Clamp 2 Hole",
    category: "EMT Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-25.jpg",
    description:
      "Two-hole galvanized EMT clamp for firm conduit support and installation.",
    variantCount: 7,
    variants: [
      { id: 25, code: "EMT-025", title: "EMT CLAMP 2 HOLE 1/2'' UL" },
      { id: 26, code: "EMT-026", title: "EMT CLAMP 2 HOLE 1/2'' CH" },
      { id: 27, code: "EMT-027", title: "EMT CLAMP 2 HOLE 3/4''" },
      { id: 28, code: "EMT-028", title: "EMT CLAMP 2 HOLE 1''" },
      { id: 29, code: "EMT-029", title: "EMT CLAMP 2 HOLE 1-1/4''" },
      { id: 30, code: "EMT-030", title: "EMT CLAMP 2 HOLE 1-1/2''" },
      { id: 31, code: "EMT-031", title: "EMT CLAMP 2 HOLE 2''" },
    ],
  },
  {
    id: "rigid-clamp-1-hole",
    slug: "rigid-clamp-1-hole",
    title: "Rigid Clamp 1 Hole",
    category: "Rigid Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-32.jpg",
    description:
      "One-hole rigid conduit clamp for heavy-duty conduit support.",
    variantCount: 2,
    variants: [
      { id: 32, code: "EMT-032", title: "RIGID CLAMP 1 HOLE 3/4''" },
      { id: 33, code: "EMT-033", title: "RIGID CLAMP 1 HOLE 1''" },
    ],
  },
  {
    id: "rigid-clamp-2-hole",
    slug: "rigid-clamp-2-hole",
    title: "Rigid Clamp 2 Hole",
    category: "Rigid Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-34.jpg",
    description:
      "Two-hole rigid conduit clamp for strong and stable surface mounting.",
    variantCount: 4,
    variants: [
      { id: 34, code: "EMT-034", title: "RIGID CLAMP 2 HOLE 3/4''" },
      { id: 35, code: "EMT-035", title: "RIGID CLAMP 2 HOLE 1''" },
      { id: 36, code: "EMT-036", title: "RIGID CLAMP 2 HOLE 2''" },
      { id: 37, code: "EMT-037", title: "RIGID CLAMP 2 HOLE 2-1/2''" },
    ],
  },
  {
    id: "rigid-connector-hub-type",
    slug: "rigid-connector-hub-type",
    title: "Rigid Connector Hub Type",
    category: "Rigid Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-38.jpg",
    description:
      "Hub-type rigid connector for threaded conduit connections.",
    variantCount: 1,
    variants: [
      { id: 38, code: "EMT-038", title: "RIGID CONNECTOR 3/4'' HUB TYPE" },
    ],
  },
  {
    id: "rigid-connector-screw-type",
    slug: "rigid-connector-screw-type",
    title: "Rigid Connector Screw Type",
    category: "Rigid Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-39.jpg",
    description:
      "Screw-type rigid connector for secure conduit termination and connection.",
    featured: true,
    variantCount: 6,
    variants: [
      { id: 39, code: "EMT-039", title: "RIGID CONNECTOR 1/2'' SCREW TYPE" },
      { id: 40, code: "EMT-040", title: "RIGID CONNECTOR 3/4'' SCREW TYPE" },
      { id: 41, code: "EMT-041", title: "RIGID CONNECTOR 1'' SCREW TYPE" },
      { id: 42, code: "EMT-042", title: "RIGID CONNECTOR 1-1/4'' SCREW TYPE" },
      { id: 43, code: "EMT-043", title: "RIGID CONNECTOR 1-1/2'' SCREW TYPE" },
      { id: 44, code: "EMT-044", title: "RIGID CONNECTOR 2'' SCREW TYPE" },
    ],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
