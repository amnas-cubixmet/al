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
 * AL MASAR full wholesale catalogue.
 * Source: MASAR CATALOG 29.12.25 (SR.NO. 1-749).
 * One product card per product family; sizes/specifications stay as variants.
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
      "EMT Conduit Pipe from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "EMT Bend from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "EMT Clamp 1 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "EMT Clamp 2 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "Rigid Clamp 1 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "Rigid Clamp 2 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
      "Rigid Connector Hub Type from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    featured: true,
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
      "Rigid Connector Screw Type from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
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
  {
    id: "rigid-coupling-screw-type",
    slug: "rigid-coupling-screw-type",
    title: "Rigid Coupling Screw Type",
    category: "Rigid Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-45.jpg",
    description:
      "Rigid Coupling Screw Type from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    featured: true,
    variantCount: 2,
    variants: [
      { id: 45, code: "EMT-045", title: "RIGID COUPLING 3/4'' SCREW TYPE" },
      { id: 46, code: "EMT-046", title: "RIGID COUPLING 1'' SCREW TYPE" },
    ],
  },
  {
    id: "reducer",
    slug: "reducer",
    title: "Reducer",
    category: "Reducer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-47.jpg",
    description:
      "Reducer from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    featured: true,
    variantCount: 3,
    variants: [
      { id: 47, code: "EMT-047", title: "REDUCER 3/4'' X 1/2''" },
      { id: 48, code: "EMT-048", title: "REDUCER 1'' X 3/4''" },
      { id: 49, code: "EMT-049", title: "REDUCER 1'' X 1/2''" },
    ],
  },
  {
    id: "emt-box-10x10",
    slug: "emt-box-10x10",
    title: "EMT Box 10X10",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-50.jpg",
    description:
      "EMT Box 10X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 50, code: "EMT-050", title: "EMT BOX 10X10 - 3/4'' HOLE" },
      { id: 51, code: "EMT-051", title: "EMT BOX 10X10 - 1/2'' & 3/4'' HOLE 52151" },
      { id: 52, code: "EMT-052", title: "EMT BOX 10X10-3/4\" HOLE 1.6 MM WITH GROUNDING SCREW ITCC MODEL" },
    ],
  },
  {
    id: "emt-octogonal-box-9x9",
    slug: "emt-octogonal-box-9x9",
    title: "EMT Octogonal Box 9X9",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-53.jpg",
    description:
      "EMT Octogonal Box 9X9 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 53, code: "EMT-053", title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE" },
      { id: 54, code: "EMT-054", title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE 1.5 MM THICKNESS ITCC MODEL" },
    ],
  },
  {
    id: "emt-box-10x10-deep",
    slug: "emt-box-10x10-deep",
    title: "EMT Box 10X10 Deep",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-55.jpg",
    description:
      "EMT Box 10X10 Deep from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 55, code: "EMT-055", title: "EMT BOX 10X10 CM DEEP 1\" HOLE 52171-1 STEEL CITY MODEL" },
      { id: 56, code: "EMT-056", title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE 52171-3/4 STEEL CITY MODEL" },
      { id: 57, code: "EMT-057", title: "EMT BOX 10X10 CM DEEP 1\" HOLE ITCC MODEL 52171-1" },
      { id: 58, code: "EMT-058", title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE ITCC MODEL 52171-3/4" },
    ],
  },
  {
    id: "emt-box-5x10",
    slug: "emt-box-5x10",
    title: "EMT Box 5X10",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-59.jpg",
    description:
      "EMT Box 5X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 59, code: "EMT-059", title: "EMT BOX 5X10-3/4\" HOLE" },
      { id: 60, code: "EMT-060", title: "EMT BOX 5X10-3/4\" HOLE ITCC/STEEL CITY QUALITY WITH GROUNDING 1.6MM" },
    ],
  },
  {
    id: "ring-box",
    slug: "ring-box",
    title: "Ring Box",
    category: "Ring Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-61.jpg",
    description:
      "Ring Box from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 61, code: "EMT-061", title: "RING BOX 7X7X3.5 CM HOLE" },
      { id: 62, code: "EMT-062", title: "RING BOX 7X14X3.5 CM HOLE" },
      { id: 63, code: "EMT-063", title: "RING BOX 9X9X1.6 CM HOLE" },
      { id: 64, code: "EMT-064", title: "RING BOX 10X10 - 3/4'' HOLE" },
    ],
  },
  {
    id: "waterproof-box-10x10",
    slug: "waterproof-box-10x10",
    title: "Waterproof Box 10X10",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-65.jpg",
    description:
      "Waterproof Box 10X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 65, code: "EMT-065", title: "W/P BOX 5 HOLE 10X10 - 3/4''" },
      { id: 66, code: "EMT-066", title: "W/P BOX 3 HOLE 10X10 - 3/4''" },
    ],
  },
  {
    id: "waterproof-box-5x10",
    slug: "waterproof-box-5x10",
    title: "Waterproof Box 5X10",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-67.jpg",
    description:
      "Waterproof Box 5X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 67, code: "EMT-067", title: "W/P BOX 5X10 CM 3/4\" HOLE 3 HOLE 1G75-3" },
      { id: 68, code: "EMT-068", title: "W/P BOX 5X10 CM 1\" HOLE 3 HOLE 1G100-3" },
    ],
  },
  {
    id: "waterproof-deep-box-5x10",
    slug: "waterproof-deep-box-5x10",
    title: "Waterproof Deep Box 5X10",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-69.jpg",
    description:
      "Waterproof Deep Box 5X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 69, code: "EMT-069", title: "W/P DEEP BOX 5X10 CM 3/4\" HOLE 3 HOLE 1DG75-3" },
      { id: 70, code: "EMT-070", title: "W/P DEEP BOX 5X10 CM 1\" HOLE 3 HOLE 1DG100-3" },
    ],
  },
  {
    id: "waterproof-box-10x10-5-hole",
    slug: "waterproof-box-10x10-5-hole",
    title: "Waterproof Box 10X10 5 Hole",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-71.jpg",
    description:
      "Waterproof Box 10X10 5 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 71, code: "EMT-071", title: "W/P BOX 10X10 CM 3/4\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G75-5X" },
      { id: 72, code: "EMT-072", title: "W/P BOX 10X10 CM 1\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G100-5X" },
    ],
  },
  {
    id: "waterproof-deep-box-10x10",
    slug: "waterproof-deep-box-10x10",
    title: "Waterproof Deep Box 10X10",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-73.jpg",
    description:
      "Waterproof Deep Box 10X10 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 73, code: "EMT-073", title: "W/P DEEP BOX 10X10 CM 3/4\" 5 HOLE 2DG75-5" },
      { id: 74, code: "EMT-074", title: "W/P DEEP BOX 10X10 CM 1\" 5 HOLE 2DG100-5" },
      { id: 75, code: "EMT-075", title: "W/P DEEP BOX 10X10 CM 1\" 7 HOLE 2DG100-7" },
    ],
  },
  {
    id: "waterproof-round-box",
    slug: "waterproof-round-box",
    title: "Waterproof Round Box",
    category: "Waterproof Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-76.jpg",
    description:
      "Waterproof Round Box from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 76, code: "EMT-076", title: "W/P ROUND BOX 10X10 CM 3/4\" HOLE" },
    ],
  },
  {
    id: "waterproof-round-box-cover",
    slug: "waterproof-round-box-cover",
    title: "Waterproof Round Box Cover",
    category: "Waterproof Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-77.jpg",
    description:
      "Waterproof Round Box Cover from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 77, code: "EMT-077", title: "W/P ROUND BOX COVER 10X10 CM UL" },
    ],
  },
  {
    id: "waterproof-cover-grey",
    slug: "waterproof-cover-grey",
    title: "Waterproof Cover Grey",
    category: "Waterproof Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-78.jpg",
    description:
      "Waterproof Cover Grey from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 78, code: "EMT-078", title: "WATER PROOF COVER GREY 5X10 CM UL" },
      { id: 79, code: "EMT-079", title: "WATER PROOF COVER GREY 10X10 CM UL" },
    ],
  },
  {
    id: "emt-enclosure-box",
    slug: "emt-enclosure-box",
    title: "EMT Enclosure Box",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-80.jpg",
    description:
      "EMT Enclosure Box from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 7,
    variants: [
      { id: 80, code: "EMT-080", title: "EMT BOX 15X15X10" },
      { id: 81, code: "EMT-081", title: "EMT BOX 20X20X5" },
      { id: 82, code: "EMT-082", title: "EMT BOX 20X20X10" },
      { id: 83, code: "EMT-083", title: "EMT BOX 25X25X10" },
      { id: 84, code: "EMT-084", title: "EMT BOX 30X30X5" },
      { id: 85, code: "EMT-085", title: "EMT BOX 30X30X10" },
      { id: 86, code: "EMT-086", title: "EMT BOX 40X40X10" },
    ],
  },
  {
    id: "c-channel",
    slug: "c-channel",
    title: "C-Channel",
    category: "C-Channel",
    mainCategory: "Support Systems",
    image: "/images/products/product-87.jpg",
    description:
      "C-Channel from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 6,
    variants: [
      { id: 87, code: "EMT-087", title: "C-CHANNEL 41X41X1.2 MM" },
      { id: 88, code: "EMT-088", title: "C-CHANNEL 41X21X1.2 MM" },
      { id: 89, code: "EMT-089", title: "C-CHANNEL 41X41X1.5 MM" },
      { id: 90, code: "EMT-090", title: "C-CHANNEL 41X21X1.5 MM" },
      { id: 91, code: "EMT-091", title: "C-CHANNEL 41X41X2 MM" },
      { id: 92, code: "EMT-092", title: "C-CHANNEL 41X21X2 MM" },
    ],
  },
  {
    id: "emt-channel-clamp",
    slug: "emt-channel-clamp",
    title: "EMT Channel Clamp",
    category: "Channel Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-93.jpg",
    description:
      "EMT Channel Clamp from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 6,
    variants: [
      { id: 93, code: "EMT-093", title: "EMT CHANNEL CLAMP 1/2''" },
      { id: 94, code: "EMT-094", title: "EMT CHANNEL CLAMP 3/4''" },
      { id: 95, code: "EMT-095", title: "EMT CHANNEL CLAMP 1''" },
      { id: 96, code: "EMT-096", title: "EMT CHANNEL CLAMP 1-1/4''" },
      { id: 97, code: "EMT-097", title: "EMT CHANNEL CLAMP 1-1/2''" },
      { id: 98, code: "EMT-098", title: "EMT CHANNEL CLAMP 2''" },
    ],
  },
  {
    id: "thread-rod",
    slug: "thread-rod",
    title: "Thread Rod",
    category: "Thread Rod",
    mainCategory: "Support Systems",
    image: "/images/products/product-99.jpg",
    description:
      "Thread Rod from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 99, code: "EMT-099", title: "THREAD ROD 8 MM X 3 MTR" },
      { id: 100, code: "EMT-100", title: "THREAD ROD 10 MM X 3 MTR" },
      { id: 101, code: "EMT-101", title: "THREAD ROD 12 MM X 3 MTR" },
    ],
  },
  {
    id: "beam-clamp",
    slug: "beam-clamp",
    title: "Beam Clamp",
    category: "Beam Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-102.jpg",
    description:
      "Beam Clamp from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 102, code: "EMT-102", title: "BEAM CLAMP 8''" },
      { id: 103, code: "EMT-103", title: "BEAM CLAMP 10''" },
      { id: 104, code: "EMT-104", title: "BEAM CLAMP 12''" },
    ],
  },
  {
    id: "knock-out-seal",
    slug: "knock-out-seal",
    title: "Knock Out Seal",
    category: "Knock Out Seal",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-105.jpg",
    description:
      "Knock Out Seal from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 105, code: "EMT-105", title: "KNOCK OUT SEAL 1/2''" },
      { id: 106, code: "EMT-106", title: "KNOCK OUT SEAL 3/4''" },
      { id: 107, code: "EMT-107", title: "KNOCK OUT SEAL 1''" },
    ],
  },
  {
    id: "insulated-bushing",
    slug: "insulated-bushing",
    title: "Insulated Bushing",
    category: "Insulated Bushing",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-108.jpg",
    description:
      "Insulated Bushing from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 6,
    variants: [
      { id: 108, code: "EMT-108", title: "INSULATED BUSHING 1/2''" },
      { id: 109, code: "EMT-109", title: "INSULATED BUSHING 3/4''" },
      { id: 110, code: "EMT-110", title: "INSULATED BUSHING 1''" },
      { id: 111, code: "EMT-111", title: "INSULATED BUSHING 1-1/4''" },
      { id: 112, code: "EMT-112", title: "INSULATED BUSHING 1-1/2''" },
      { id: 113, code: "EMT-113", title: "INSULATED BUSHING 2''" },
    ],
  },
  {
    id: "liquid-tight-connector",
    slug: "liquid-tight-connector",
    title: "Liquid Tight Connector",
    category: "Liquid Tight Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-114.jpg",
    description:
      "Liquid Tight Connector from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 9,
    variants: [
      { id: 114, code: "EMT-114", title: "LIQUID TIGHT CONNECTOR 1/2''" },
      { id: 115, code: "EMT-115", title: "LIQUID TIGHT CONNECTOR 3/4''" },
      { id: 116, code: "EMT-116", title: "LIQUID TIGHT CONNECTOR 1''" },
      { id: 117, code: "EMT-117", title: "LIQUID TIGHT CONNECTOR 1-1/4''" },
      { id: 118, code: "EMT-118", title: "LIQUID TIGHT CONNECTOR 1-1/2''" },
      { id: 119, code: "EMT-119", title: "LIQUID TIGHT CONNECTOR 2''" },
      { id: 120, code: "EMT-120", title: "LIQUID TIGHT CONNECTOR 2-1/2''" },
      { id: 121, code: "EMT-121", title: "LIQUID TIGHT CONNECTOR 3''" },
      { id: 122, code: "EMT-122", title: "LIQUID TIGHT CONNECTOR 4''" },
    ],
  },
  {
    id: "liquid-tight-flexible-coupling",
    slug: "liquid-tight-flexible-coupling",
    title: "Liquid Tight Flexible Coupling",
    category: "Flexible Coupling",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-123.jpg",
    description:
      "Liquid Tight Flexible Coupling from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 123, code: "EMT-123", title: "LIQUID TIGHT FLEXIBLE COUPLING 3/4\" UL" },
      { id: 124, code: "EMT-124", title: "LIQUID TIGHT FLEXIBLE COUPLING 1\" UL" },
    ],
  },
  {
    id: "emt-combination-coupling",
    slug: "emt-combination-coupling",
    title: "EMT Combination Coupling",
    category: "EMT Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-125.jpg",
    description:
      "EMT Combination Coupling from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 125, code: "EMT-125", title: "EMT COMBINATION COUPLING 3/4''" },
      { id: 126, code: "EMT-126", title: "EMT COMBINATION COUPLING 1''" },
    ],
  },
  {
    id: "copper-corner-coupling-emt-to-emt",
    slug: "copper-corner-coupling-emt-to-emt",
    title: "Copper Corner Coupling EMT To EMT",
    category: "EMT Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-127.jpg",
    description:
      "Copper Corner Coupling EMT To EMT from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 127, code: "EMT-127", title: "COPPER CORNER COUPLING EMT TO EMT 3/4\" UL CCC-075" },
    ],
  },
  {
    id: "emt-hanger-clamp",
    slug: "emt-hanger-clamp",
    title: "EMT Hanger Clamp",
    category: "Hanger Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-128.jpg",
    description:
      "EMT Hanger Clamp from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 128, code: "EMT-128", title: "EMT HANGER CLAMP 3/4''" },
      { id: 129, code: "EMT-129", title: "EMT HANGER CLAMP 1''" },
    ],
  },
  {
    id: "rigid-c-channel-clamp",
    slug: "rigid-c-channel-clamp",
    title: "Rigid C-Channel Clamp",
    category: "Channel Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-130.jpg",
    description:
      "Rigid C-Channel Clamp from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 6,
    variants: [
      { id: 130, code: "EMT-130", title: "RIGID C-CHANNEL CLAMP 3/4''" },
      { id: 131, code: "EMT-131", title: "RIGID C-CHANNEL CLAMP 1''" },
      { id: 132, code: "EMT-132", title: "RIGID C-CHANNEL CLAMP 2''" },
      { id: 133, code: "EMT-133", title: "RIGID C-CHANNEL CLAMP 2-1/2''" },
      { id: 134, code: "EMT-134", title: "RIGID CHANNEL CLAMP 3''" },
      { id: 135, code: "EMT-135", title: "RIGID CHANNEL CLAMP 4''" },
    ],
  },
  {
    id: "rigid-pull-elbow",
    slug: "rigid-pull-elbow",
    title: "Rigid Pull Elbow",
    category: "Pull Elbow",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-136.jpg",
    description:
      "Rigid Pull Elbow from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 136, code: "EMT-136", title: "RIGID PULL ELBOW 3/4''" },
      { id: 137, code: "EMT-137", title: "RIGID PULL ELBOW 1''" },
    ],
  },
  {
    id: "emt-pull-elbow",
    slug: "emt-pull-elbow",
    title: "EMT Pull Elbow",
    category: "Pull Elbow",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-138.jpg",
    description:
      "EMT Pull Elbow from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 138, code: "EMT-138", title: "EMT PULL ELBOW 1/2''" },
      { id: 139, code: "EMT-139", title: "EMT PULL ELBOW 3/4''" },
      { id: 140, code: "EMT-140", title: "EMT PULL ELBOW 1''" },
    ],
  },
  {
    id: "emt-bender",
    slug: "emt-bender",
    title: "EMT Bender",
    category: "Conduit Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-141.jpg",
    description:
      "EMT Bender from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 141, code: "EMT-141", title: "EMT BENDER 1/2'' WITH HANDLE" },
      { id: 142, code: "EMT-142", title: "EMT BENDER 3/4'' WITH HANDLE" },
      { id: 143, code: "EMT-143", title: "EMT BENDER 1'' WITH HANDLE" },
      { id: 144, code: "EMT-144", title: "EMT BENDER 3/4'' WITH HANDLE BLACK" },
    ],
  },
  {
    id: "rigid-bend",
    slug: "rigid-bend",
    title: "Rigid Bend",
    category: "Rigid Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-145.jpg",
    description:
      "Rigid Bend from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 145, code: "EMT-145", title: "RIGID BEND 3/4''" },
      { id: 146, code: "EMT-146", title: "RIGID BEND 1''" },
      { id: 147, code: "EMT-147", title: "RIGID BEND 2''" },
      { id: 148, code: "EMT-148", title: "RIGID BEND 2-1/2''" },
    ],
  },
  {
    id: "c-channel-end-cap",
    slug: "c-channel-end-cap",
    title: "C-Channel End Cap",
    category: "End Cap",
    mainCategory: "Support Systems",
    image: "/images/products/product-149.jpg",
    description:
      "C-Channel End Cap from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 149, code: "EMT-149", title: "END CAP 41X21" },
      { id: 150, code: "EMT-150", title: "END CAP 41X41" },
    ],
  },
  {
    id: "pvc-spring-bender",
    slug: "pvc-spring-bender",
    title: "PVC Spring Bender",
    category: "PVC Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-151.jpg",
    description:
      "PVC Spring Bender from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 151, code: "EMT-151", title: "PVC SPRING BENDER 20MM" },
      { id: 152, code: "EMT-152", title: "PVC SPRING BENDER 25MM" },
      { id: 153, code: "EMT-153", title: "PVC SPRING BENDER 32MM" },
    ],
  },
  {
    id: "rigid-base-clamp-2-hole",
    slug: "rigid-base-clamp-2-hole",
    title: "Rigid Base Clamp 2 Hole",
    category: "Rigid Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-154.jpg",
    description:
      "Rigid Base Clamp 2 Hole from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 154, code: "EMT-154", title: "RIGID BASE CLAMP 2 HOLE 3/4''" },
      { id: 155, code: "EMT-155", title: "RIGID BASE CLAMP 2 HOLE 1''" },
    ],
  },
  {
    id: "pvc-box-7x7-deep",
    slug: "pvc-box-7x7-deep",
    title: "PVC Box 7X7 Deep",
    category: "PVC Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-156.jpg",
    description:
      "PVC Box 7X7 Deep from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 156, code: "EMT-156", title: "PVC BOX 7X7 DEEP" },
    ],
  },
  {
    id: "pulling-wire-mcs",
    slug: "pulling-wire-mcs",
    title: "Pulling Wire MCS",
    category: "Pulling Wire",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-157.jpg",
    description:
      "Pulling Wire MCS from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 157, code: "EMT-157", title: "PULLING WIRE MCS 30MM" },
      { id: 158, code: "EMT-158", title: "PULLING WIRE MCS 60MM" },
      { id: 159, code: "EMT-159", title: "PULLING WIRE MCS 80MM" },
    ],
  },
  {
    id: "pvc-adaptor-fa",
    slug: "pvc-adaptor-fa",
    title: "PVC Adaptor FA",
    category: "PVC Adaptor",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-160.jpg",
    description:
      "PVC Adaptor FA from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 160, code: "EMT-160", title: "PVC ADAPTOR FA 20MM" },
      { id: 161, code: "EMT-161", title: "PVC ADAPTOR FA 25MM" },
    ],
  },
  {
    id: "pvc-adaptor-fafa",
    slug: "pvc-adaptor-fafa",
    title: "PVC Adaptor FAFA",
    category: "PVC Adaptor",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-162.jpg",
    description:
      "PVC Adaptor FAFA from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 162, code: "EMT-162", title: "PVC ADAPTOR FAFA 20MM" },
      { id: 163, code: "EMT-163", title: "PVC ADAPTOR FAFA 25MM" },
    ],
  },
  {
    id: "pvc-coupling",
    slug: "pvc-coupling",
    title: "PVC Coupling",
    category: "PVC Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-164.jpg",
    description:
      "PVC Coupling from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 164, code: "EMT-164", title: "PVC COUPLING 20MM" },
      { id: 165, code: "EMT-165", title: "PVC COUPLING 25MM" },
      { id: 166, code: "EMT-166", title: "PVC COUPLING 32MM" },
      { id: 167, code: "EMT-167", title: "PVC COUPLING 50MM" },
    ],
  },
  {
    id: "pvc-adaptor",
    slug: "pvc-adaptor",
    title: "PVC Adaptor",
    category: "PVC Adaptor",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-168.jpg",
    description:
      "PVC Adaptor from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 168, code: "EMT-168", title: "PVC ADAPTOR 20MM" },
      { id: 169, code: "EMT-169", title: "PVC ADAPTOR 25MM" },
      { id: 170, code: "EMT-170", title: "PVC ADAPTOR 32MM" },
      { id: 171, code: "EMT-171", title: "PVC ADAPTOR 50MM" },
    ],
  },
  {
    id: "pvc-coupling-white",
    slug: "pvc-coupling-white",
    title: "PVC Coupling White",
    category: "PVC Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-172.jpg",
    description:
      "PVC Coupling White from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 172, code: "EMT-172", title: "PVC COUPLING 20 MM WHITE" },
      { id: 173, code: "EMT-173", title: "PVC COUPLING 25 MM WHITE" },
    ],
  },
  {
    id: "pvc-bend-black",
    slug: "pvc-bend-black",
    title: "PVC Bend Black",
    category: "PVC Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-174.jpg",
    description:
      "PVC Bend Black from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 4,
    variants: [
      { id: 174, code: "EMT-174", title: "PVC LONG BEND 20 MM BLACK" },
      { id: 175, code: "EMT-175", title: "PVC BEND 25 MM BLACK" },
      { id: 176, code: "EMT-176", title: "PVC BEND 32 MM BLACK" },
      { id: 177, code: "EMT-177", title: "PVC BEND 50 MM BLACK" },
    ],
  },
  {
    id: "pvc-saddle-with-base",
    slug: "pvc-saddle-with-base",
    title: "PVC Saddle With Base",
    category: "PVC Saddle",
    mainCategory: "Support Systems",
    image: "/images/products/product-178.jpg",
    description:
      "PVC Saddle With Base from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 178, code: "EMT-178", title: "PVC SADLLE WITH BASE 25 MM BLACK" },
    ],
  },
  {
    id: "sub-duct-coupling-fr3",
    slug: "sub-duct-coupling-fr3",
    title: "Sub Duct Coupling FR3",
    category: "Sub Duct Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-179.jpg",
    description:
      "Sub Duct Coupling FR3 from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 1,
    variants: [
      { id: 179, code: "EMT-179", title: "SUB DUCT COUPLING 32 MM FOR FR3" },
    ],
  },
  {
    id: "liquid-tight-angle-connector",
    slug: "liquid-tight-angle-connector",
    title: "Liquid Tight Angle Connector",
    category: "Liquid Tight Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-180.jpg",
    description:
      "Liquid Tight Angle Connector from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 180, code: "EMT-180", title: "LIQUID TIGHT ANGLE CONNECTOR 1/2''" },
      { id: 181, code: "EMT-181", title: "LIQUID TIGHT ANGLE CONNECTOR 3/4''" },
    ],
  },
  {
    id: "hole-closer",
    slug: "hole-closer",
    title: "Hole Closer",
    category: "Hole Closer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-182.jpg",
    description:
      "Hole Closer from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 182, code: "EMT-182", title: "HOLE CLOSER 1/2''" },
      { id: 183, code: "EMT-183", title: "HOLE CLOSER 3/4''" },
      { id: 184, code: "EMT-184", title: "HOLE CLOSER 1''" },
    ],
  },
  {
    id: "steel-flexible-angle-connector",
    slug: "steel-flexible-angle-connector",
    title: "Steel Flexible Angle Connector",
    category: "Flexible Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-185.jpg",
    description:
      "Steel Flexible Angle Connector from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 2,
    variants: [
      { id: 185, code: "EMT-185", title: "STEEL FLEXIBLE ANGLE CONNECTOR 1/2''" },
      { id: 186, code: "EMT-186", title: "STEEL FLEXIBLE ANGLE CONNECTOR 3/4''" },
    ],
  },
  {
    id: "rigid-coupling",
    slug: "rigid-coupling",
    title: "Rigid Coupling",
    category: "Rigid Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-187.jpg",
    description:
      "Rigid Coupling from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 6,
    variants: [
      { id: 187, code: "EMT-187", title: "RIGID COUPLING 1/2''" },
      { id: 188, code: "EMT-188", title: "RIGID COUPLING 3/4''" },
      { id: 189, code: "EMT-189", title: "RIGID COUPLING 1''" },
      { id: 190, code: "EMT-190", title: "RIGID COUPLING 1-1/2''" },
      { id: 191, code: "EMT-191", title: "RIGID COUPLING 2''" },
      { id: 192, code: "EMT-192", title: "RIGID COUPLING 2-1/2''" },
    ],
  },
  {
    id: "emt-compression-connector",
    slug: "emt-compression-connector",
    title: "EMT Compression Connector",
    category: "EMT Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-193.jpg",
    description:
      "EMT Compression Connector from the AL MASAR electrical materials catalogue, available in the listed sizes and specifications.",
    variantCount: 3,
    variants: [
      { id: 193, code: "EMT-193", title: "EMT COMPRESSION CONNECTOR 3/4''" },
      { id: 194, code: "EMT-194", title: "EMT COMPRESSION CONNECTOR 1''" },
      { id: 195, code: "EMT-195", title: "EMT COMPRESSION CONNECTOR 2''" },
    ],
  },
  {
    id: "emt-compression-coupling",
    slug: "emt-compression-coupling",
    title: "EMT Compression Coupling",