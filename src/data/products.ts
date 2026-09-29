/**
 * AL MASAR full product catalogue data.
 * Variant titles were reset from the official MASAR catalogue (SR.NO. 1–749).
 * Product grouping, images, Arabic labels and descriptions are preserved from the supplied products file.
 */

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
 * Wholesale catalogue: one product card + one image.
 * Repeated sizes/specifications are kept under variants.
 */
export const products: Product[] = [
  {
    id: "conduit-pipe",
    slug: "conduit-pipe",
    title: "Conduit Pipe",
    titleAr: "أنبوب كهربائي EMT",
    category: "Conduit Pipe",
    categoryAr: "أنبوب كهربائي",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-1.jpg",
    description: "Conduit Pipe for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "أنبوب كهربائي عالي الجودة للتوريد والتجهيز بأحجام ومواصفات متعددة.",
    featured: true,
    variantCount: 9,
    variants: [
      {
        id: 1,
        code: "EMT-001",
        title: "EMT CONDUIT PIPE 1/2''",
      },
      {
        id: 2,
        code: "EMT-002",
        title: "EMT CONDUIT PIPE 3/4'' CHINA",
      },
      {
        id: 3,
        code: "EMT-003",
        title: "EMT CONDUIT PIPE 3/4'' ZINC TECH KSA",
      },
      {
        id: 4,
        code: "EMT-004",
        title: "EMT CONDUIT PIPE 1''",
      },
      {
        id: 5,
        code: "EMT-005",
        title: "EMT CONDUIT PIPE 1-1/4''",
      },
      {
        id: 6,
        code: "EMT-006",
        title: "EMT CONDUIT PIPE 1-1/2''",
      },
      {
        id: 7,
        code: "EMT-007",
        title: "EMT CONDUIT PIPE 2''",
      },
      {
        id: 8,
        code: "EMT-008",
        title: "EMT CONDUIT PIPE 2-1/2''",
      },
      {
        id: 9,
        code: "EMT-009",
        title: "EMT CONDUIT PIPE 3''",
      },
    ],
  },
  {
    id: "emt-bend",
    slug: "emt-bend",
    title: "EMT Bend",
    titleAr: "كوع أنبوب EMT",
    category: "EMT Bend",
    categoryAr: "كوع أنبوب",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-10.jpg",
    description: "EMT Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "كوع أنبوب EMT عالي الجودة متوفر بمقاسات متعددة للمشاريع.",
    featured: true,
    variantCount: 6,
    variants: [
      {
        id: 10,
        code: "EMT-010",
        title: "EMT BEND 1/2''",
      },
      {
        id: 11,
        code: "EMT-011",
        title: "EMT BEND 3/4''",
      },
      {
        id: 12,
        code: "EMT-012",
        title: "EMT BEND 1''",
      },
      {
        id: 13,
        code: "EMT-013",
        title: "EMT BEND 1-1/4''",
      },
      {
        id: 14,
        code: "EMT-014",
        title: "EMT BEND 1-1/2''",
      },
      {
        id: 15,
        code: "EMT-015",
        title: "EMT BEND 2''",
      },
    ],
  },
  {
    id: "clamp",
    slug: "clamp",
    title: "Clamp",
    titleAr: "قفيز وتثبيت الأنابيب",
    category: "Clamp",
    categoryAr: "قفيز تثبيت",
    mainCategory: "Support Systems",
    image: "/images/products/product-16.jpg",
    description: "Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "مرابط وقفيز تثبيت عالي التحمل بمقاسات مختلفة لتثبيت الكابلات والأنابيب.",
    featured: true,
    variantCount: 16,
    variants: [
      {
        id: 16,
        code: "EMT-016",
        title: "EMT CLAMP 1 HOLE 1/2'' UL",
      },
      {
        id: 17,
        code: "EMT-017",
        title: "EMT CLAMP 1 HOLE 1/2'' CH",
      },
      {
        id: 18,
        code: "EMT-018",
        title: "EMT CLAMP 1 HOLE 3/4'' UL",
      },
      {
        id: 19,
        code: "EMT-019",
        title: "EMT CLAMP 1 HOLE 3/4'' CH",
      },
      {
        id: 20,
        code: "EMT-020",
        title: "EMT CLAMP 1 HOLE 1'' UL",
      },
      {
        id: 21,
        code: "EMT-021",
        title: "EMT CLAMP 1 HOLE 1'' CH",
      },
      {
        id: 22,
        code: "EMT-022",
        title: "EMT CLAMP 1 HOLE 1-1/4''",
      },
      {
        id: 23,
        code: "EMT-023",
        title: "EMT CLAMP 1 HOLE 1-1/2''",
      },
      {
        id: 24,
        code: "EMT-024",
        title: "EMT CLAMP 1 HOLE 2''",
      },
      {
        id: 25,
        code: "EMT-025",
        title: "EMT CLAMP 2 HOLE 1/2'' UL",
      },
      {
        id: 26,
        code: "EMT-026",
        title: "EMT CLAMP 2 HOLE 1/2'' CH",
      },
      {
        id: 27,
        code: "EMT-027",
        title: "EMT CLAMP 2 HOLE 3/4''",
      },
      {
        id: 28,
        code: "EMT-028",
        title: "EMT CLAMP 2 HOLE 1''",
      },
      {
        id: 29,
        code: "EMT-029",
        title: "EMT CLAMP 2 HOLE 1-1/4''",
      },
      {
        id: 30,
        code: "EMT-030",
        title: "EMT CLAMP 2 HOLE 1-1/2''",
      },
      {
        id: 31,
        code: "EMT-031",
        title: "EMT CLAMP 2 HOLE 2''",
      },
    ],
  },
  {
    id: "rigid-clamp",
    slug: "rigid-clamp",
    title: "Rigid Clamp",
    category: "Rigid Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-32.jpg",
    description: "Rigid Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 14,
    variants: [
      {
        id: 32,
        code: "EMT-032",
        title: "RIGID CLAMP 1 HOLE 3/4''",
      },
      {
        id: 33,
        code: "EMT-033",
        title: "RIGID CLAMP 1 HOLE 1''",
      },
      {
        id: 34,
        code: "EMT-034",
        title: "RIGID CLAMP 2 HOLE 3/4''",
      },
      {
        id: 35,
        code: "EMT-035",
        title: "RIGID CLAMP 2 HOLE 1''",
      },
      {
        id: 36,
        code: "EMT-036",
        title: "RIGID CLAMP 2 HOLE 2''",
      },
      {
        id: 37,
        code: "EMT-037",
        title: "RIGID CLAMP 2 HOLE 2-1/2''",
      },
      {
        id: 130,
        code: "EMT-130",
        title: "RIGID C-CHANNEL CLAMP 3/4''",
      },
      {
        id: 131,
        code: "EMT-131",
        title: "RIGID C-CHANNEL CLAMP 1''",
      },
      {
        id: 132,
        code: "EMT-132",
        title: "RIGID C-CHANNEL CLAMP 2''",
      },
      {
        id: 133,
        code: "EMT-133",
        title: "RIGID C-CHANNEL CLAMP 2-1/2''",
      },
      {
        id: 134,
        code: "EMT-134",
        title: "RIGID CHANNEL CLAMP 3''",
      },
      {
        id: 135,
        code: "EMT-135",
        title: "RIGID CHANNEL CLAMP 4''",
      },
      {
        id: 154,
        code: "EMT-154",
        title: "RIGID BASE CLAMP 2 HOLE 3/4''",
      },
      {
        id: 155,
        code: "EMT-155",
        title: "RIGID BASE CLAMP 2 HOLE 1''",
      },
    ],
  },
  {
    id: "rigid-connector",
    slug: "rigid-connector",
    title: "Rigid Connector",
    category: "Rigid Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-38.jpg",
    description: "Rigid Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 38,
        code: "EMT-038",
        title: "RIGID CONNECTOR 3/4'' HUB TYPE",
      },
      {
        id: 39,
        code: "EMT-039",
        title: "RIGID CONNECTOR 1/2'' SCREW TYPE",
      },
      {
        id: 40,
        code: "EMT-040",
        title: "RIGID CONNECTOR 3/4'' SCREW TYPE",
      },
      {
        id: 41,
        code: "EMT-041",
        title: "RIGID CONNECTOR 1'' SCREW TYPE",
      },
      {
        id: 42,
        code: "EMT-042",
        title: "RIGID CONNECTOR 1-1/4'' SCREW TYPE",
      },
      {
        id: 43,
        code: "EMT-043",
        title: "RIGID CONNECTOR 1-1/2'' SCREW TYPE",
      },
      {
        id: 44,
        code: "EMT-044",
        title: "RIGID CONNECTOR 2'' SCREW TYPE",
      },
    ],
  },
  {
    id: "rigid-coupling",
    slug: "rigid-coupling",
    title: "Rigid Coupling",
    category: "Rigid Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-45.jpg",
    description: "Rigid Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 45,
        code: "EMT-045",
        title: "RIGID COUPLING 3/4'' SCREW TYPE",
      },
      {
        id: 46,
        code: "EMT-046",
        title: "RIGID COUPLING 1'' SCREW TYPE",
      },
      {
        id: 187,
        code: "EMT-187",
        title: "RIGID COUPLING 1/2''",
      },
      {
        id: 188,
        code: "EMT-188",
        title: "RIGID COUPLING 3/4''",
      },
      {
        id: 189,
        code: "EMT-189",
        title: "RIGID COUPLING 1''",
      },
      {
        id: 190,
        code: "EMT-190",
        title: "RIGID COUPLING 1-1/2''",
      },
      {
        id: 191,
        code: "EMT-191",
        title: "RIGID COUPLING 2''",
      },
      {
        id: 192,
        code: "EMT-192",
        title: "RIGID COUPLING 2-1/2''",
      },
    ],
  },
  {
    id: "reducer",
    slug: "reducer",
    title: "Reducer",
    category: "Reducer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-47.jpg",
    description: "Reducer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 47,
        code: "EMT-047",
        title: "REDUCER 3/4'' X 1/2''",
      },
      {
        id: 48,
        code: "EMT-048",
        title: "REDUCER 1'' X 3/4''",
      },
      {
        id: 49,
        code: "EMT-049",
        title: "REDUCER 1'' X 1/2''",
      },
    ],
  },
  {
    id: "emt-box",
    slug: "emt-box",
    title: "EMT Box",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-50.jpg",
    description: "EMT Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 16,
    variants: [
      {
        id: 50,
        code: "EMT-050",
        title: "EMT BOX 10X10 - 3/4'' HOLE",
      },
      {
        id: 51,
        code: "EMT-051",
        title: "EMT BOX 10X10 - 1/2'' & 3/4'' HOLE 52151",
      },
      {
        id: 52,
        code: "EMT-052",
        title: "EMT BOX 10X10-3/4\" HOLE 1.6 MM WITH GROUNDING SCREW ITCC MODEL",
      },
      {
        id: 55,
        code: "EMT-055",
        title: "EMT BOX 10X10 CM DEEP 1\" HOLE 52171-1 STEEL CITY MODEL",
      },
      {
        id: 56,
        code: "EMT-056",
        title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE 52171-3/4 STEEL CITY MODEL",
      },
      {
        id: 57,
        code: "EMT-057",
        title: "EMT BOX 10X10 CM DEEP 1\" HOLE ITCC MODEL 52171-1",
      },
      {
        id: 58,
        code: "EMT-058",
        title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE ITCC MODEL 52171-3/4",
      },
      {
        id: 59,
        code: "EMT-059",
        title: "EMT BOX 5X10-3/4\" HOLE",
      },
      {
        id: 60,
        code: "EMT-060",
        title: "EMT BOX 5X10-3/4\" HOLE ITCC/STEEL CITY QUALITY WITH GROUNDING 1.6MM",
      },
      {
        id: 80,
        code: "EMT-080",
        title: "EMT BOX 15X15X10",
      },
      {
        id: 81,
        code: "EMT-081",
        title: "EMT BOX 20X20X5",
      },
      {
        id: 82,
        code: "EMT-082",
        title: "EMT BOX 20X20X10",
      },
      {
        id: 83,
        code: "EMT-083",
        title: "EMT BOX 25X25X10",
      },
      {
        id: 84,
        code: "EMT-084",
        title: "EMT BOX 30X30X5",
      },
      {
        id: 85,
        code: "EMT-085",
        title: "EMT BOX 30X30X10",
      },
      {
        id: 86,
        code: "EMT-086",
        title: "EMT BOX 40X40X10",
      },
    ],
  },
  {
    id: "octogonal-box",
    slug: "octogonal-box",
    title: "Octogonal Box",
    category: "Octogonal Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-53.jpg",
    description: "Octogonal Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 53,
        code: "EMT-053",
        title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE",
      },
      {
        id: 54,
        code: "EMT-054",
        title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE 1.5 MM THICKNESS ITCC MODEL",
      },
    ],
  },
  {
    id: "ring-box",
    slug: "ring-box",
    title: "Ring Box",
    category: "Ring Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-61.jpg",
    description: "Ring Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 61,
        code: "EMT-061",
        title: "RING BOX 7X7X3.5 CM HOLE",
      },
      {
        id: 62,
        code: "EMT-062",
        title: "RING BOX 7X14X3.5 CM HOLE",
      },
      {
        id: 63,
        code: "EMT-063",
        title: "RING BOX 9X9X1.6 CM HOLE",
      },
      {
        id: 64,
        code: "EMT-064",
        title: "RING BOX 10X10 - 3/4'' HOLE",
      },
    ],
  },
  {
    id: "water-proof-box",
    slug: "water-proof-box",
    title: "Water Proof Box",
    titleAr: "صندوق حماية مقاوم للمياه",
    category: "Water Proof Box",
    categoryAr: "صندوق مقاوم للمياه",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-65.jpg",
    description: "Water Proof Box for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "صندوق تجميع وحماية مقاوم للمياه والاتربة ومصمم للظروف الجوية العالية.",
    featured: true,
    variantCount: 12,
    variants: [
      {
        id: 65,
        code: "EMT-065",
        title: "W/P BOX 5 HOLE 10X10 - 3/4''",
      },
      {
        id: 66,
        code: "EMT-066",
        title: "W/P BOX 3 HOLE 10X10 - 3/4''",
      },
      {
        id: 67,
        code: "EMT-067",
        title: "W/P BOX 5X10 CM 3/4\" HOLE 3 HOLE 1G75-3",
      },
      {
        id: 68,
        code: "EMT-068",
        title: "W/P BOX 5X10 CM 1\" HOLE 3 HOLE 1G100-3",
      },
      {
        id: 69,
        code: "EMT-069",
        title: "W/P DEEP BOX 5X10 CM 3/4\" HOLE 3 HOLE 1DG75-3",
      },
      {
        id: 70,
        code: "EMT-070",
        title: "W/P DEEP BOX 5X10 CM 1\" HOLE 3 HOLE 1DG100-3",
      },
      {
        id: 71,
        code: "EMT-071",
        title: "W/P BOX 10X10 CM 3/4\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G75-5X",
      },
      {
        id: 72,
        code: "EMT-072",
        title: "W/P BOX 10X10 CM 1\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G100-5X",
      },
      {
        id: 73,
        code: "EMT-073",
        title: "W/P DEEP BOX 10X10 CM 3/4\" 5 HOLE 2DG75-5",
      },
      {
        id: 74,
        code: "EMT-074",
        title: "W/P DEEP BOX 10X10 CM 1\" 5 HOLE 2DG100-5",
      },
      {
        id: 75,
        code: "EMT-075",
        title: "W/P DEEP BOX 10X10 CM 1\" 7 HOLE 2DG100-7",
      },
      {
        id: 76,
        code: "EMT-076",
        title: "W/P ROUND BOX 10X10 CM 3/4\" HOLE",
      },
    ],
  },
  {
    id: "water-proof-cover",
    slug: "water-proof-cover",
    title: "Water Proof Cover",
    category: "Water Proof Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-77.jpg",
    description: "Water Proof Cover for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 77,
        code: "EMT-077",
        title: "W/P ROUND BOX COVER 10X10 CM UL",
      },
      {
        id: 78,
        code: "EMT-078",
        title: "WATER PROOF COVER GREY 5X10 CM UL",
      },
      {
        id: 79,
        code: "EMT-079",
        title: "WATER PROOF COVER GREY 10X10 CM UL",
      },
    ],
  },
  {
    id: "c-channel",
    slug: "c-channel",
    title: "C-channel",
    category: "C-Channel",
    mainCategory: "Support Systems",
    image: "/images/products/product-87.jpg",
    description: "C-channel for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 87,
        code: "EMT-087",
        title: "C-CHANNEL 41X41X1.2 MM",
      },
      {
        id: 88,
        code: "EMT-088",
        title: "C-CHANNEL 41X21X1.2 MM",
      },
      {
        id: 89,
        code: "EMT-089",
        title: "C-CHANNEL 41X41X1.5 MM",
      },
      {
        id: 90,
        code: "EMT-090",
        title: "C-CHANNEL 41X21X1.5 MM",
      },
      {
        id: 91,
        code: "EMT-091",
        title: "C-CHANNEL 41X41X2 MM",
      },
      {
        id: 92,
        code: "EMT-092",
        title: "C-CHANNEL 41X21X2 MM",
      },
    ],
  },
  {
    id: "channel-clamp",
    slug: "channel-clamp",
    title: "Channel Clamp",
    titleAr: "مرابط قناة التثبيت",
    category: "Channel Clamp",
    categoryAr: "مرابط قناة التثبيت",
    mainCategory: "Support Systems",
    image: "/images/products/product-93.jpg",
    description: "Channel Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "مرابط قناة تثبيت عالية القوة لربط ودعم الأنابيب والكابلات.",
    featured: true,
    variantCount: 6,
    variants: [
      {
        id: 93,
        code: "EMT-093",
        title: "EMT CHANNEL CLAMP 1/2''",
      },
      {
        id: 94,
        code: "EMT-094",
        title: "EMT CHANNEL CLAMP 3/4''",
      },
      {
        id: 95,
        code: "EMT-095",
        title: "EMT CHANNEL CLAMP 1''",
      },
      {
        id: 96,
        code: "EMT-096",
        title: "EMT CHANNEL CLAMP 1-1/4''",
      },
      {
        id: 97,
        code: "EMT-097",
        title: "EMT CHANNEL CLAMP 1-1/2''",
      },
      {
        id: 98,
        code: "EMT-098",
        title: "EMT CHANNEL CLAMP 2''",
      },
    ],
  },
  {
    id: "thread-rod",
    slug: "thread-rod",
    title: "Thread Rod",
    category: "Thread Rod",
    mainCategory: "Support Systems",
    image: "/images/products/product-99.jpg",
    description: "Thread Rod for wholesale electrical supply, available in multiple sizes and specifications.",
    featured: true,
    variantCount: 3,
    variants: [
      {
        id: 99,
        code: "EMT-099",
        title: "THREAD ROD 8 MM X 3 MTR",
      },
      {
        id: 100,
        code: "EMT-100",
        title: "THREAD ROD 10 MM X 3 MTR",
      },
      {
        id: 101,
        code: "EMT-101",
        title: "THREAD ROD 12 MM X 3 MTR",
      },
    ],
  },
  {
    id: "beam-clamp",
    slug: "beam-clamp",
    title: "Beam Clamp",
    category: "Beam Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-102.jpg",
    description: "Beam Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 102,
        code: "EMT-102",
        title: "BEAM CLAMP 8''",
      },
      {
        id: 103,
        code: "EMT-103",
        title: "BEAM CLAMP 10''",
      },
      {
        id: 104,
        code: "EMT-104",
        title: "BEAM CLAMP 12''",
      },
    ],
  },
  {
    id: "knock-out-seal",
    slug: "knock-out-seal",
    title: "Knock Out Seal",
    category: "Knock Out Seal",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-105.jpg",
    description: "Knock Out Seal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 105,
        code: "EMT-105",
        title: "KNOCK OUT SEAL 1/2''",
      },
      {
        id: 106,
        code: "EMT-106",
        title: "KNOCK OUT SEAL 3/4''",
      },
      {
        id: 107,
        code: "EMT-107",
        title: "KNOCK OUT SEAL 1''",
      },
    ],
  },
  {
    id: "insulated-bushing",
    slug: "insulated-bushing",
    title: "Insulated Bushing",
    category: "Insulated Bushing",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-108.jpg",
    description: "Insulated Bushing for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 108,
        code: "EMT-108",
        title: "INSULATED BUSHING 1/2''",
      },
      {
        id: 109,
        code: "EMT-109",
        title: "INSULATED BUSHING 3/4''",
      },
      {
        id: 110,
        code: "EMT-110",
        title: "INSULATED BUSHING 1''",
      },
      {
        id: 111,
        code: "EMT-111",
        title: "INSULATED BUSHING 1-1/4''",
      },
      {
        id: 112,
        code: "EMT-112",
        title: "INSULATED BUSHING 1-1/2''",
      },
      {
        id: 113,
        code: "EMT-113",
        title: "INSULATED BUSHING 2''",
      },
    ],
  },
  {
    id: "liquid-tight-connector",
    slug: "liquid-tight-connector",
    title: "Liquid Tight Connector",
    category: "Liquid Tight Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-114.jpg",
    description: "Liquid Tight Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 11,
    variants: [
      {
        id: 114,
        code: "EMT-114",
        title: "LIQUID TIGHT CONNECTOR 1/2''",
      },
      {
        id: 115,
        code: "EMT-115",
        title: "LIQUID TIGHT CONNECTOR 3/4''",
      },
      {
        id: 116,
        code: "EMT-116",
        title: "LIQUID TIGHT CONNECTOR 1''",
      },
      {
        id: 117,
        code: "EMT-117",
        title: "LIQUID TIGHT CONNECTOR 1-1/4''",
      },
      {
        id: 118,
        code: "EMT-118",
        title: "LIQUID TIGHT CONNECTOR 1-1/2''",
      },
      {
        id: 119,
        code: "EMT-119",
        title: "LIQUID TIGHT CONNECTOR 2''",
      },
      {
        id: 120,
        code: "EMT-120",
        title: "LIQUID TIGHT CONNECTOR 2-1/2''",
      },
      {
        id: 121,
        code: "EMT-121",
        title: "LIQUID TIGHT CONNECTOR 3''",
      },
      {
        id: 122,
        code: "EMT-122",
        title: "LIQUID TIGHT CONNECTOR 4''",
      },
      {
        id: 180,
        code: "EMT-180",
        title: "LIQUID TIGHT ANGLE CONNECTOR 1/2''",
      },
      {
        id: 181,
        code: "EMT-181",
        title: "LIQUID TIGHT ANGLE CONNECTOR 3/4''",
      },
    ],
  },
  {
    id: "flexible-coupling",
    slug: "flexible-coupling",
    title: "Flexible Coupling",
    category: "Flexible Coupling",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-123.jpg",
    description: "Flexible Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 123,
        code: "EMT-123",
        title: "LIQUID TIGHT FLEXIBLE COUPLING 3/4\" UL",
      },
      {
        id: 124,
        code: "EMT-124",
        title: "LIQUID TIGHT FLEXIBLE COUPLING 1\" UL",
      },
    ],
  },
  {
    id: "combination-coupling",
    slug: "combination-coupling",
    title: "Combination Coupling",
    category: "Combination Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-125.jpg",
    description: "Combination Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 125,
        code: "EMT-125",
        title: "EMT COMBINATION COUPLING 3/4''",
      },
      {
        id: 126,
        code: "EMT-126",
        title: "EMT COMBINATION COUPLING 1''",
      },
    ],
  },
  {
    id: "copper-coupling",
    slug: "copper-coupling",
    title: "Copper Coupling",
    category: "Copper Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-127.jpg",
    description: "High quality COPPER CORNER COUPLING EMT TO EMT 3/4\\\" UL CCC-075 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 127,
        code: "EMT-127",
        title: "COPPER CORNER COUPLING EMT TO EMT 3/4\" UL CCC-075",
      },
    ],
  },
  {
    id: "hanger-clamp",
    slug: "hanger-clamp",
    title: "Hanger Clamp",
    category: "Hanger Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-128.jpg",
    description: "Hanger Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 128,
        code: "EMT-128",
        title: "EMT HANGER CLAMP 3/4''",
      },
      {
        id: 129,
        code: "EMT-129",
        title: "EMT HANGER CLAMP 1''",
      },
    ],
  },
  {
    id: "pull-elbow",
    slug: "pull-elbow",
    title: "Pull Elbow",
    category: "Pull Elbow",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-136.jpg",
    description: "Pull Elbow for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 136,
        code: "EMT-136",
        title: "RIGID PULL ELBOW 3/4''",
      },
      {
        id: 137,
        code: "EMT-137",
        title: "RIGID PULL ELBOW 1''",
      },
      {
        id: 138,
        code: "EMT-138",
        title: "EMT PULL ELBOW 1/2''",
      },
      {
        id: 139,
        code: "EMT-139",
        title: "EMT PULL ELBOW 3/4''",
      },
      {
        id: 140,
        code: "EMT-140",
        title: "EMT PULL ELBOW 1''",
      },
    ],
  },
  {
    id: "emt-bender",
    slug: "emt-bender",
    title: "EMT Bender",
    category: "EMT Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-141.jpg",
    description: "EMT Bender for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 141,
        code: "EMT-141",
        title: "EMT BENDER 1/2'' WITH HANDLE",
      },
      {
        id: 142,
        code: "EMT-142",
        title: "EMT BENDER 3/4'' WITH HANDLE",
      },
      {
        id: 143,
        code: "EMT-143",
        title: "EMT BENDER 1'' WITH HANDLE",
      },
      {
        id: 144,
        code: "EMT-144",
        title: "EMT BENDER 3/4'' WITH HANDLE BLACK",
      },
    ],
  },
  {
    id: "rigid-bend",
    slug: "rigid-bend",
    title: "Rigid Bend",
    category: "Rigid Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-145.jpg",
    description: "Rigid Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 145,
        code: "EMT-145",
        title: "RIGID BEND 3/4''",
      },
      {
        id: 146,
        code: "EMT-146",
        title: "RIGID BEND 1''",
      },
      {
        id: 147,
        code: "EMT-147",
        title: "RIGID BEND 2''",
      },
      {
        id: 148,
        code: "EMT-148",
        title: "RIGID BEND 2-1/2''",
      },
    ],
  },
  {
    id: "end-cap",
    slug: "end-cap",
    title: "End Cap",
    category: "End Cap",
    mainCategory: "Support Systems",
    image: "/images/products/product-149.jpg",
    description: "End Cap for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 149,
        code: "EMT-149",
        title: "END CAP 41X21",
      },
      {
        id: 150,
        code: "EMT-150",
        title: "END CAP 41X41",
      },
    ],
  },
  {
    id: "pvc-bender",
    slug: "pvc-bender",
    title: "PVC Bender",
    category: "PVC Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-151.jpg",
    description: "PVC Bender for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 151,
        code: "EMT-151",
        title: "PVC SPRING BENDER 20MM",
      },
      {
        id: 152,
        code: "EMT-152",
        title: "PVC SPRING BENDER 25MM",
      },
      {
        id: 153,
        code: "EMT-153",
        title: "PVC SPRING BENDER 32MM",
      },
    ],
  },
  {
    id: "pvc-box",
    slug: "pvc-box",
    title: "PVC Box",
    category: "PVC Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-156.jpg",
    description: "High quality PVC BOX 7X7 DEEP for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 156,
        code: "EMT-156",
        title: "PVC BOX 7X7 DEEP",
      },
    ],
  },
  {
    id: "pulling-wire",
    slug: "pulling-wire",
    title: "Pulling Wire",
    category: "Pulling Wire",
    mainCategory: "Cable Management",
    image: "/images/products/product-157.jpg",
    description: "Pulling Wire for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 157,
        code: "EMT-157",
        title: "PULLING WIRE MCS 30MM",
      },
      {
        id: 158,
        code: "EMT-158",
        title: "PULLING WIRE MCS 60MM",
      },
      {
        id: 159,
        code: "EMT-159",
        title: "PULLING WIRE MCS 80MM",
      },
    ],
  },
  {
    id: "pvc-adaptor",
    slug: "pvc-adaptor",
    title: "PVC Adaptor",
    category: "PVC Adaptor",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-160.jpg",
    description: "PVC Adaptor for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 160,
        code: "EMT-160",
        title: "PVC ADAPTOR FA 20MM",
      },
      {
        id: 161,
        code: "EMT-161",
        title: "PVC ADAPTOR FA 25MM",
      },
      {
        id: 162,
        code: "EMT-162",
        title: "PVC ADAPTOR FAFA 20MM",
      },
      {
        id: 163,
        code: "EMT-163",
        title: "PVC ADAPTOR FAFA 25MM",
      },
      {
        id: 168,
        code: "EMT-168",
        title: "PVC ADAPTOR 20MM",
      },
      {
        id: 169,
        code: "EMT-169",
        title: "PVC ADAPTOR 25MM",
      },
      {
        id: 170,
        code: "EMT-170",
        title: "PVC ADAPTOR 32MM",
      },
      {
        id: 171,
        code: "EMT-171",
        title: "PVC ADAPTOR 50MM",
      },
    ],
  },
  {
    id: "pvc-coupling",
    slug: "pvc-coupling",
    title: "PVC Coupling",
    category: "PVC Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-164.jpg",
    description: "PVC Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 164,
        code: "EMT-164",
        title: "PVC COUPLING 20MM",
      },
      {
        id: 165,
        code: "EMT-165",
        title: "PVC COUPLING 25MM",
      },
      {
        id: 166,
        code: "EMT-166",
        title: "PVC COUPLING 32MM",
      },
      {
        id: 167,
        code: "EMT-167",
        title: "PVC COUPLING 50MM",
      },
      {
        id: 172,
        code: "EMT-172",
        title: "PVC COUPLING 20 MM WHITE",
      },
      {
        id: 173,
        code: "EMT-173",
        title: "PVC COUPLING 25 MM WHITE",
      },
    ],
  },
  {
    id: "pvc-bend",
    slug: "pvc-bend",
    title: "PVC Bend",
    category: "PVC Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-174.jpg",
    description: "PVC Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 174,
        code: "EMT-174",
        title: "PVC LONG BEND 20 MM BLACK",
      },
      {
        id: 175,
        code: "EMT-175",
        title: "PVC BEND 25 MM BLACK",
      },
      {
        id: 176,
        code: "EMT-176",
        title: "PVC BEND 32 MM BLACK",
      },
      {
        id: 177,
        code: "EMT-177",
        title: "PVC BEND 50 MM BLACK",
      },
    ],
  },
  {
    id: "pvc-saddle",
    slug: "pvc-saddle",
    title: "PVC Saddle",
    category: "PVC Saddle",
    mainCategory: "Support Systems",
    image: "/images/products/product-178.jpg",
    description: "High quality PVC SADLLE WITH BASE 25 MM BLACK for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 178,
        code: "EMT-178",
        title: "PVC SADLLE WITH BASE 25 MM BLACK",
      },
    ],
  },
  {
    id: "sub-duct-coupling",
    slug: "sub-duct-coupling",
    title: "Sub Duct Coupling",
    category: "Sub Duct Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-179.jpg",
    description: "High quality SUB DUCT COUPLING 32 MM FOR FR3 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 179,
        code: "EMT-179",
        title: "SUB DUCT COUPLING 32 MM FOR FR3",
      },
    ],
  },
  {
    id: "hole-closer",
    slug: "hole-closer",
    title: "Hole Closer",
    category: "Hole Closer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-182.jpg",
    description: "Hole Closer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 182,
        code: "EMT-182",
        title: "HOLE CLOSER 1/2''",
      },
      {
        id: 183,
        code: "EMT-183",
        title: "HOLE CLOSER 3/4''",
      },
      {
        id: 184,
        code: "EMT-184",
        title: "HOLE CLOSER 1''",
      },
    ],
  },
  {
    id: "flexible-connector",
    slug: "flexible-connector",
    title: "Flexible Connector",
    category: "Flexible Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-185.jpg",
    description: "Flexible Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 185,
        code: "EMT-185",
        title: "STEEL FLEXIBLE ANGLE CONNECTOR 1/2''",
      },
      {
        id: 186,
        code: "EMT-186",
        title: "STEEL FLEXIBLE ANGLE CONNECTOR 3/4''",
      },
      {
        id: 355,
        code: "EMT-355",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1/2''",
      },
      {
        id: 356,
        code: "EMT-356",
        title: "EMT STEEL FLEXIBLE CONNECTOR 3/4''",
      },
      {
        id: 357,
        code: "EMT-357",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1''",
      },
      {
        id: 358,
        code: "EMT-358",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1-1/2''",
      },
      {
        id: 359,
        code: "EMT-359",
        title: "EMT STEEL FLEXIBLE CONNECTOR 2''",
      },
      {
        id: 360,
        code: "EMT-360",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1/2'' UL ITCC QUALITY",
      },
      {
        id: 361,
        code: "EMT-361",
        title: "EMT STEEL FLEXIBLE CONNECTOR 3/4'' UL ITCC QUALITY",
      },
    ],
  },
  {
    id: "compression-connector",
    slug: "compression-connector",
    title: "Compression Connector",
    category: "Compression Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-193.jpg",
    description: "Compression Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 193,
        code: "EMT-193",
        title: "EMT COMPRESSION CONNECTOR 3/4''",
      },
      {
        id: 194,
        code: "EMT-194",
        title: "EMT COMPRESSION CONNECTOR 1''",
      },
      {
        id: 195,
        code: "EMT-195",
        title: "EMT COMPRESSION CONNECTOR 2''",
      },
    ],
  },
  {
    id: "compression-coupling",
    slug: "compression-coupling",
    title: "Compression Coupling",
    category: "Compression Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-196.jpg",
    description: "Compression Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 196,
        code: "EMT-196",
        title: "EMT COMPRESSION COUPLING 3/4''",
      },
      {
        id: 197,
        code: "EMT-197",
        title: "EMT COMPRESSION COUPLING 1''",
      },
      {
        id: 198,
        code: "EMT-198",
        title: "EMT COMPRESSION COUPLING 2''",
      },
    ],
  },
  {
    id: "enlarger",
    slug: "enlarger",
    title: "Enlarger",
    category: "Enlarger",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-199.jpg",
    description: "Enlarger for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 199,
        code: "EMT-199",
        title: "ENLARGER 1/2'' - 3/4''",
      },
      {
        id: 200,
        code: "EMT-200",
        title: "ENLARGER 1/2'' - 1''",
      },
      {
        id: 201,
        code: "EMT-201",
        title: "ENLARGER 3/4'' - 1''",
      },
    ],
  },
  {
    id: "emt-cover",
    slug: "emt-cover",
    title: "EMT Cover",
    category: "EMT Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-202.jpg",
    description: "EMT Cover for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 202,
        code: "EMT-202",
        title: "EMT COVER 10X10-3/4\" HOLE 1.6 MM ITCC QUALITY",
      },
      {
        id: 203,
        code: "EMT-203",
        title: "EMT COVER 10X10-3/4\" HOLE",
      },
      {
        id: 204,
        code: "EMT-204",
        title: "EMT COVER 9X9-3/4\" HOLE",
      },
      {
        id: 205,
        code: "EMT-205",
        title: "EMT COVER 7X7 - 1/2'' HOLE",
      },
      {
        id: 206,
        code: "EMT-206",
        title: "EMT COVER 7X7 - 3/4'' HOLE",
      },
    ],
  },
  {
    id: "plastic-gland",
    slug: "plastic-gland",
    title: "Plastic Gland",
    category: "Plastic Gland",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-207.jpg",
    description: "Plastic Gland for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 207,
        code: "EMT-207",
        title: "PLASTIC GLAND M16",
      },
      {
        id: 208,
        code: "EMT-208",
        title: "PLASTIC GLAND M20",
      },
      {
        id: 209,
        code: "EMT-209",
        title: "PLASTIC GLAND M25",
      },
      {
        id: 210,
        code: "EMT-210",
        title: "PLASTIC GLAND M32",
      },
    ],
  },
  {
    id: "insulator",
    slug: "insulator",
    title: "Insulator",
    category: "Insulator",
    mainCategory: "Grounding",
    image: "/images/products/product-211.jpg",
    description: "Insulator for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 211,
        code: "EMT-211",
        title: "INSULATOR 25MM",
      },
      {
        id: 212,
        code: "EMT-212",
        title: "INSULATOR 35MM",
      },
      {
        id: 213,
        code: "EMT-213",
        title: "INSULATOR 51MM",
      },
    ],
  },
  {
    id: "steel-cable-tie",
    slug: "steel-cable-tie",
    title: "Steel Cable Tie",
    category: "Steel Cable Tie",
    mainCategory: "Cable Management",
    image: "/images/products/product-214.jpg",
    description: "Steel Cable Tie for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 214,
        code: "EMT-214",
        title: "STEEL CABLE TIE 150MM",
      },
      {
        id: 215,
        code: "EMT-215",
        title: "STEEL CABLE TIE 200MM",
      },
      {
        id: 216,
        code: "EMT-216",
        title: "STEEL CABLE TIE 300MM",
      },
      {
        id: 217,
        code: "EMT-217",
        title: "STEEL CABLE TIE 500MM",
      },
      {
        id: 218,
        code: "EMT-218",
        title: "STEEL CABLE PVC COATED PSSCT 150X4.6 MM",
      },
      {
        id: 219,
        code: "EMT-219",
        title: "STEEL CABLE PVC COATED PSSCT 200X4.6 MM",
      },
      {
        id: 220,
        code: "EMT-220",
        title: "STEEL CABLE PVC COATED PSSCT 300X4.6 MM",
      },
    ],
  },
  {
    id: "cable-marker",
    slug: "cable-marker",
    title: "Cable Marker",
    category: "Cable Marker",
    mainCategory: "Cable Management",
    image: "/images/products/product-221.jpg",
    description: "Cable Marker for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 12,
    variants: [
      {
        id: 221,
        code: "EMT-221",
        title: "CABLE MARKER MS-65 MM BLACK",
      },
      {
        id: 222,
        code: "EMT-222",
        title: "CABLE MARKER MS-100 MM BLACK",
      },
      {
        id: 223,
        code: "EMT-223",
        title: "CABLE MARKER MS-65 MM WHITE",
      },
      {
        id: 224,
        code: "EMT-224",
        title: "CABLE MARKER MS-100 MM WHITE",
      },
      {
        id: 253,
        code: "EMT-253",
        title: "CABLE MARKER ECA-0 MIX (0-9)",
      },
      {
        id: 254,
        code: "EMT-254",
        title: "CABLE MARKER ECA-1 MIX (0-9)",
      },
      {
        id: 255,
        code: "EMT-255",
        title: "CABLE MARKER ECA-2 MIX (0-9)",
      },
      {
        id: 256,
        code: "EMT-256",
        title: "CABLE MARKER ECA-3 MIX (0-9)",
      },
      {
        id: 257,
        code: "EMT-257",
        title: "CABLE MARKER ECA-0 MIX (A-Z)",
      },
      {
        id: 258,
        code: "EMT-258",
        title: "CABLE MARKER ECA-1 MIX (A-Z)",
      },
      {
        id: 259,
        code: "EMT-259",
        title: "CABLE MARKER ECA-2 MIX (A-Z)",
      },
      {
        id: 260,
        code: "EMT-260",
        title: "CABLE MARKER ECA-3 MIX (A-Z)",
      },
    ],
  },
  {
    id: "tie-mount",
    slug: "tie-mount",
    title: "Tie Mount",
    category: "Tie Mount",
    mainCategory: "Cable Management",
    image: "/images/products/product-225.jpg",
    description: "Tie Mount for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 225,
        code: "EMT-225",
        title: "TIE MOUNT TM-25 MM",
      },
      {
        id: 226,
        code: "EMT-226",
        title: "TIE MOUNT TM-30 MM",
      },
      {
        id: 546,
        code: "EMT-546",
        title: "CAT - 6 CABLE BELDEN COPY 9565",
      },
      {
        id: 547,
        code: "EMT-547",
        title: "FIRE ALARM CABLE 16 AWG",
      },
    ],
  },
  {
    id: "plastic-connector",
    slug: "plastic-connector",
    title: "Plastic Connector",
    category: "Plastic Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-227.jpg",
    description: "Plastic Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 227,
        code: "EMT-227",
        title: "PLASTIC CONNECTOR PC-10 MM",
      },
      {
        id: 228,
        code: "EMT-228",
        title: "PLASTIC CONNECTOR PC-16 MM",
      },
      {
        id: 229,
        code: "EMT-229",
        title: "PLASTIC CONNECTOR PC-25 MM",
      },
    ],
  },
  {
    id: "plastic-strip-connector",
    slug: "plastic-strip-connector",
    title: "Plastic Strip Connector",
    category: "Plastic Strip Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-230.jpg",
    description: "Plastic Strip Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 230,
        code: "EMT-230",
        title: "H type PLASTIC STRIP CONNECTOR 6MM WHITE HIGH QUALITY",
      },
      {
        id: 231,
        code: "EMT-231",
        title: "H type PLASTIC STRIP CONNECTOR 10MM WHITE HIGH QUALITY",
      },
      {
        id: 232,
        code: "EMT-232",
        title: "H type PLASTIC STRIP CONNECTOR 16MM WHITE HIGH QUALITY",
      },
      {
        id: 233,
        code: "EMT-233",
        title: "H type PLASTIC STRIP CONNECTOR 25MM WHITE HIGH QUALITY",
      },
      {
        id: 234,
        code: "EMT-234",
        title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK",
      },
      {
        id: 235,
        code: "EMT-235",
        title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK HIGH QUALITY",
      },
    ],
  },
  {
    id: "group-holder",
    slug: "group-holder",
    title: "Group Holder",
    category: "Group Holder",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-236.jpg",
    description: "Group Holder for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 236,
        code: "EMT-236",
        title: "GROUP HOLDER UBE/D",
      },
      {
        id: 237,
        code: "EMT-237",
        title: "GROUP HOLDER UBE/D N",
      },
    ],
  },
  {
    id: "end-stopper",
    slug: "end-stopper",
    title: "End Stopper",
    category: "End Stopper",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-238.jpg",
    description: "High quality END STOPPER E/JUK for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 238,
        code: "EMT-238",
        title: "END STOPPER E/JUK",
      },
    ],
  },
  {
    id: "jumber-link",
    slug: "jumber-link",
    title: "Jumber Link",
    category: "Jumber Link",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-239.jpg",
    description: "Jumber Link for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 239,
        code: "EMT-239",
        title: "JUMBER LINK FLAT TYPE EB10-6",
      },
      {
        id: 240,
        code: "EMT-240",
        title: "JUMBER LINK FLAT TYPE FBS 10- 6",
      },
    ],
  },
  {
    id: "wire-connector",
    slug: "wire-connector",
    title: "Wire Connector",
    category: "Wire Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-241.jpg",
    description: "Wire Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 241,
        code: "EMT-241",
        title: "WIRE CONNECTOR N102 (100PCS)",
      },
      {
        id: 242,
        code: "EMT-242",
        title: "WIRE CONNECTOR N103 (100PCS)",
      },
      {
        id: 243,
        code: "EMT-243",
        title: "WIRE CONNECTOR N104 (100PCS)",
      },
      {
        id: 244,
        code: "EMT-244",
        title: "WIRE CONNECTOR N102-2 (100PCS)",
      },
      {
        id: 245,
        code: "EMT-245",
        title: "WIRE CONNECTOR N103-2 (100PCS)",
      },
      {
        id: 246,
        code: "EMT-246",
        title: "WIRE CONNECTOR N103-3 (100PCS)",
      },
    ],
  },
  {
    id: "wire-nut",
    slug: "wire-nut",
    title: "Wire Nut",
    category: "Wire Nut",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-247.jpg",
    description: "Wire Nut for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 247,
        code: "EMT-247",
        title: "WIRE NUT 6.7 MM GREY S-P1 [Bag 100pcs]",
      },
      {
        id: 248,
        code: "EMT-248",
        title: "WIRE NUT 7.4 MM BLUE S-P2 [Bag 100pcs]",
      },
      {
        id: 249,
        code: "EMT-249",
        title: "WIRE NUT 9.9 MM ORANGE S-P3 [Bag 100pcs]",
      },
      {
        id: 250,
        code: "EMT-250",
        title: "WIRE NUT 11 MM YELLOW S-P4 [Bag 100pcs]",
      },
      {
        id: 251,
        code: "EMT-251",
        title: "WIRE NUT 10.5 MM GREY S-P15 [Bag 100pcs]",
      },
      {
        id: 252,
        code: "EMT-252",
        title: "WIRE NUT 12.8 MM BLUE S-P17 [Bag 100pcs]",
      },
    ],
  },
  {
    id: "spiral",
    slug: "spiral",
    title: "Spiral",
    category: "Spiral",
    mainCategory: "Cable Management",
    image: "/images/products/product-261.jpg",
    description: "Spiral for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 261,
        code: "EMT-261",
        title: "SPIRAL - 3MM",
      },
      {
        id: 262,
        code: "EMT-262",
        title: "SPIRAL - 6MM",
      },
      {
        id: 263,
        code: "EMT-263",
        title: "SPIRAL - 8MM",
      },
      {
        id: 264,
        code: "EMT-264",
        title: "SPIRAL - 10MM",
      },
      {
        id: 265,
        code: "EMT-265",
        title: "SPIRAL - 12MM",
      },
      {
        id: 266,
        code: "EMT-266",
        title: "SPIRAL - 15MM",
      },
      {
        id: 267,
        code: "EMT-267",
        title: "SPIRAL - 19MM",
      },
      {
        id: 268,
        code: "EMT-268",
        title: "SPIRAL - 24MM",
      },
    ],
  },
  {
    id: "crimping-tool",
    slug: "crimping-tool",
    title: "Crimping Tool",
    category: "Crimping Tool",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-269.jpg",
    description: "Crimping Tool for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 269,
        code: "EMT-269",
        title: "TERMINAL LUGS CRIMPER 1.5MM - 6MM TH-03C",
      },
      {
        id: 270,
        code: "EMT-270",
        title: "TERMINAL LUGS CRIMPER 0.25MM - 6MM THC8 6-6",
      },
      {
        id: 271,
        code: "EMT-271",
        title: "TERMINAL LUGS CRIMPER 0.25MM - 10MM THC8 6-4",
      },
      {
        id: 272,
        code: "EMT-272",
        title: "BOOT LUGS CRIMPING TOOLS HSC8 6-6",
      },
      {
        id: 273,
        code: "EMT-273",
        title: "BOOT LUGS CRIMPING TOOLS WMC10 16-6",
      },
      {
        id: 274,
        code: "EMT-274",
        title: "BOOT LUGS CRIMPING TOOLS VSC9 10-6A HIGH QUALITY",
      },
      {
        id: 275,
        code: "EMT-275",
        title: "TERMINAL LUGS CRIMPING TOOLS HS-30J",
      },
      {
        id: 276,
        code: "EMT-276",
        title: "CABLE LUGS CRIMPING TOOLS (10-50MM) HX-50B",
      },
      {
        id: 277,
        code: "EMT-277",
        title: "CABLE LUGS CRIMPING TOOLS (10-120MM) HX-120B",
      },
      {
        id: 279,
        code: "EMT-279",
        title: "CAT-6 CABLE CRIMPING TOOL RJ-45",
      },
    ],
  },
  {
    id: "wire-stripper",
    slug: "wire-stripper",
    title: "Wire Stripper",
    category: "Wire Stripper",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-278.jpg",
    description: "High quality WIRE STRIPPER HS-D2 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 278,
        code: "EMT-278",
        title: "WIRE STRIPPER HS-D2",
      },
    ],
  },
  {
    id: "hydraulic-crimping-tool",
    slug: "hydraulic-crimping-tool",
    title: "Hydraulic Crimping Tool",
    category: "Hydraulic Crimping Tool",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-280.jpg",
    description: "High quality HYDRUALIC CRIMPING TOOLS 10-300 MM YQK-300 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 280,
        code: "EMT-280",
        title: "HYDRUALIC CRIMPING TOOLS 10-300 MM YQK-300",
      },
    ],
  },
  {
    id: "floor-box",
    slug: "floor-box",
    title: "Floor Box",
    category: "Floor Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-281.jpg",
    description: "Floor Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 281,
        code: "EMT-281",
        title: "STEEL FLOOR BOX 2 SOCKET ONE FOR ELECTRIC ONE FOR DATA",
      },
      {
        id: 282,
        code: "EMT-282",
        title: "STEEL FLOOR BOX 4 SOCKET TWO FOR ELECTRIC TWO FOR DATA",
      },
    ],
  },
  {
    id: "din-rail",
    slug: "din-rail",
    title: "DIN Rail",
    category: "DIN Rail",
    mainCategory: "Support Systems",
    image: "/images/products/product-283.jpg",
    description: "DIN Rail for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 283,
        code: "EMT-283",
        title: "DIN RAIL 0.8 MM",
      },
      {
        id: 284,
        code: "EMT-284",
        title: "DIN RAIL 1.0 MM",
      },
      {
        id: 628,
        code: "EMT-628",
        title: "WATERPROOF STEEL ENCLOUSER BOX 30X25X15 CM",
      },
    ],
  },
  {
    id: "shrink-tube",
    slug: "shrink-tube",
    title: "Shrink Tube",
    category: "Shrink Tube",
    mainCategory: "Cable Management",
    image: "/images/products/product-285.jpg",
    description: "Shrink Tube for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 21,
    variants: [
      {
        id: 285,
        code: "EMT-285",
        title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 286,
        code: "EMT-286",
        title: "SHRINK TUBE 6 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 287,
        code: "EMT-287",
        title: "SHRINK TUBE 10 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 288,
        code: "EMT-288",
        title: "SHRINK TUBE 12 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 289,
        code: "EMT-289",
        title: "SHRINK TUBE 16 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 290,
        code: "EMT-290",
        title: "SHRINK TUBE 20 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 291,
        code: "EMT-291",
        title: "SHRINK TUBE 25 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 292,
        code: "EMT-292",
        title: "SHRINK TUBE 30 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 293,
        code: "EMT-293",
        title: "SHRINK TUBE 40 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 294,
        code: "EMT-294",
        title: "SHRINK TUBE 50 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 295,
        code: "EMT-295",
        title: "SHRINK TUBE 70 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 296,
        code: "EMT-296",
        title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 297,
        code: "EMT-297",
        title: "SHRINK TUBE 6 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 298,
        code: "EMT-298",
        title: "SHRINK TUBE 10 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 299,
        code: "EMT-299",
        title: "SHRINK TUBE 12 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 300,
        code: "EMT-300",
        title: "SHRINK TUBE 16 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 301,
        code: "EMT-301",
        title: "SHRINK TUBE 20 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 302,
        code: "EMT-302",
        title: "SHRINK TUBE 25 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 303,
        code: "EMT-303",
        title: "SHRINK TUBE 30 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 304,
        code: "EMT-304",
        title: "SHRINK TUBE 40 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 305,
        code: "EMT-305",
        title: "SHRINK TUBE 50 MM - 25 MTR/ROLL Y/G",
      },
    ],
  },
  {
    id: "marking-tube",
    slug: "marking-tube",
    title: "Marking Tube",
    category: "Marking Tube",
    mainCategory: "Cable Management",
    image: "/images/products/product-306.jpg",
    description: "Marking Tube for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 15,
    variants: [
      {
        id: 306,
        code: "EMT-306",
        title: "FERROLING MARKING TUBE 3.5 MM WHITE 200 MTR",
      },
      {
        id: 307,
        code: "EMT-307",
        title: "FERROLING MARKING TUBE 3.5 MM RED 200 MTR",
      },
      {
        id: 308,
        code: "EMT-308",
        title: "FERROLING MARKING TUBE 3.5 MM YELLOW 200 MTR",
      },
      {
        id: 309,
        code: "EMT-309",
        title: "FERROLING MARKING TUBE 4 MM WHITE 200 MTR",
      },
      {
        id: 310,
        code: "EMT-310",
        title: "FERROLING MARKING TUBE 4 MM RED 200 MTR",
      },
      {
        id: 311,
        code: "EMT-311",
        title: "FERROLING MARKING TUBE 4 MM YELLOW 200 MTR",
      },
      {
        id: 312,
        code: "EMT-312",
        title: "FERROLING MARKING TUBE 4.5 MM WHITE 200 MTR",
      },
      {
        id: 313,
        code: "EMT-313",
        title: "FERROLING MARKING TUBE 4.5 MM RED 200 MTR",
      },
      {
        id: 314,
        code: "EMT-314",
        title: "FERROLING MARKING TUBE 4.5 MM YELLOW 200 MTR",
      },
      {
        id: 315,
        code: "EMT-315",
        title: "FERROLING MARKING TUBE 5.5 MM WHITE 100 MTR",
      },
      {
        id: 316,
        code: "EMT-316",
        title: "FERROLING MARKING TUBE 5.5 MM RED 100 MTR",
      },
      {
        id: 317,
        code: "EMT-317",
        title: "FERROLING MARKING TUBE 5.5 MM YELLOW 100 MTR",
      },
      {
        id: 318,
        code: "EMT-318",
        title: "FERROLING MARKING TUBE 6.2 MM WHITE 100 MTR",
      },
      {
        id: 319,
        code: "EMT-319",
        title: "FERROLING MARKING TUBE 6.2 MM RED 100 MTR",
      },
      {
        id: 320,
        code: "EMT-320",
        title: "FERROLING MARKING TUBE 6.2 MM YELLOW 100 MTR",
      },
    ],
  },
  {
    id: "earth-rod",
    slug: "earth-rod",
    title: "Earth Rod",
    category: "Earth Rod",
    mainCategory: "Grounding",
    image: "/images/products/product-321.jpg",
    description: "Earth Rod for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 321,
        code: "EMT-321",
        title: "EARTH ROD 16MM X 1.2 MTR",
      },
      {
        id: 322,
        code: "EMT-322",
        title: "EARTH ROD 16MM X 1.5 MTR",
      },
      {
        id: 323,
        code: "EMT-323",
        title: "EARTH ROD 19MM X 1.5 MTR",
      },
      {
        id: 324,
        code: "EMT-324",
        title: "EARTH ROD 19MM X 3 MTR",
      },
    ],
  },
  {
    id: "u-bolt-clamp",
    slug: "u-bolt-clamp",
    title: "U Bolt Clamp",
    category: "U Bolt Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-325.jpg",
    description: "High quality U BOLT CLAMP CR-705 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 325,
        code: "EMT-325",
        title: "U BOLT CLAMP CR-705",
      },
    ],
  },
  {
    id: "copper-clamp",
    slug: "copper-clamp",
    title: "Copper Clamp",
    category: "Copper Clamp",
    mainCategory: "Grounding",
    image: "/images/products/product-326.jpg",
    description: "Copper Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 326,
        code: "EMT-326",
        title: "COPPER CLAMP ONE HOLE CLIP 35 MM",
      },
      {
        id: 327,
        code: "EMT-327",
        title: "COPPER CLAMP ONE HOLE CLIP 50 MM",
      },
      {
        id: 328,
        code: "EMT-328",
        title: "COPPER CLAMP ONE HOLE CLIP 70 MM",
      },
      {
        id: 329,
        code: "EMT-329",
        title: "COPPER CLAMP ONE HOLE CLIP 120 MM",
      },
    ],
  },
  {
    id: "earth-plate",
    slug: "earth-plate",
    title: "Earth Plate",
    category: "Earth Plate",
    mainCategory: "Grounding",
    image: "/images/products/product-330.jpg",
    description: "High quality COPPER BONDED EARTH PLATE 50X50X3 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 330,
        code: "EMT-330",
        title: "COPPER BONDED EARTH PLATE 50X50X3",
      },
    ],
  },
  {
    id: "earth-rod-clamp",
    slug: "earth-rod-clamp",
    title: "Earth Rod Clamp",
    category: "Earth Rod Clamp",
    mainCategory: "Grounding",
    image: "/images/products/product-331.jpg",
    description: "Earth Rod Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 331,
        code: "EMT-331",
        title: "EARTH ROD CLAMP O TYPE 5/8'' - 16MM",
      },
      {
        id: 332,
        code: "EMT-332",
        title: "EARTH ROD CLAMP G TYPE 5/8'' - 16MM",
      },
      {
        id: 333,
        code: "EMT-333",
        title: "EARTH ROD CLAMP G TYPE 3/4'' - 19MM",
      },
    ],
  },
  {
    id: "brass-base",
    slug: "brass-base",
    title: "Brass Base",
    category: "Brass Base",
    mainCategory: "Grounding",
    image: "/images/products/product-334.jpg",
    description: "Brass Base for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 334,
        code: "EMT-334",
        title: "BRASS AIR BASE ROUND WITH COPPER PLATING 5/8\" SD-105",
      },
      {
        id: 335,
        code: "EMT-335",
        title: "BRASS MULTI POINT ROUND WITH COPPER PLATING 5/8\" RS-600 INDIA",
      },
    ],
  },
  {
    id: "neutral-link",
    slug: "neutral-link",
    title: "Neutral Link",
    category: "Neutral Link",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-336.jpg",
    description: "High quality NEUTRAL LINK 6 MM (SMALL SIZE) for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 336,
        code: "EMT-336",
        title: "NEUTRAL LINK 6 MM (SMALL SIZE)",
      },
    ],
  },
  {
    id: "emt-connector",
    slug: "emt-connector",
    title: "EMT Connector",
    category: "EMT Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-337.jpg",
    description: "EMT Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 337,
        code: "EMT-337",
        title: "EMT CONNECTOR W/UL MARK 1/2'' UL",
      },
      {
        id: 338,
        code: "EMT-338",
        title: "EMT CONNECTOR W/UL MARK 1/2'' CH",
      },
      {
        id: 339,
        code: "EMT-339",
        title: "EMT CONNECTOR W/UL MARK 3/4'' UL",
      },
      {
        id: 340,
        code: "EMT-340",
        title: "EMT CONNECTOR W/UL MARK 3/4'' CH",
      },
      {
        id: 341,
        code: "EMT-341",
        title: "EMT CONNECTOR W/UL MARK 1''",
      },
      {
        id: 342,
        code: "EMT-342",
        title: "EMT CONNECTOR W/UL MARK 1-1/4''",
      },
      {
        id: 343,
        code: "EMT-343",
        title: "EMT CONNECTOR W/UL MARK 2''",
      },
      {
        id: 344,
        code: "EMT-344",
        title: "EMT CONNECTOR W/UL MARK 2-1/2''",
      },
      {
        id: 345,
        code: "EMT-345",
        title: "EMT CONNECTOR W/UL MARK 3''",
      },
    ],
  },
  {
    id: "emt-coupling",
    slug: "emt-coupling",
    title: "EMT Coupling",
    category: "EMT Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-346.jpg",
    description: "EMT Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 346,
        code: "EMT-346",
        title: "EMT COUPLING W/UL MARK 1/2'' UL",
      },
      {
        id: 347,
        code: "EMT-347",
        title: "EMT COUPLING W/UL MARK 1/2'' CH",
      },
      {
        id: 348,
        code: "EMT-348",
        title: "EMT COUPLING W/UL MARK 3/4'' UL",
      },
      {
        id: 349,
        code: "EMT-349",
        title: "EMT COUPLING W/UL MARK 3/4'' CH",
      },
      {
        id: 350,
        code: "EMT-350",
        title: "EMT COUPLING W/UL MARK 1''",
      },
      {
        id: 351,
        code: "EMT-351",
        title: "EMT COUPLING W/UL MARK 1-1/2''",
      },
      {
        id: 352,
        code: "EMT-352",
        title: "EMT COUPLING W/UL MARK 2''",
      },
      {
        id: 353,
        code: "EMT-353",
        title: "EMT COUPLING W/UL MARK 2-1/2''",
      },
      {
        id: 354,
        code: "EMT-354",
        title: "EMT COUPLING W/UL MARK 3''",
      },
    ],
  },
  {
    id: "zinc-locknut",
    slug: "zinc-locknut",
    title: "Zinc Locknut",
    category: "Zinc Locknut",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-362.jpg",
    description: "Zinc Locknut for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 362,
        code: "EMT-362",
        title: "ZINC LOCKNUT 1/2''",
      },
      {
        id: 363,
        code: "EMT-363",
        title: "ZINC LOCKNUT 3/4''",
      },
      {
        id: 364,
        code: "EMT-364",
        title: "ZINC LOCKNUT 1''",
      },
      {
        id: 365,
        code: "EMT-365",
        title: "ZINC LOCKNUT 2''",
      },
    ],
  },
  {
    id: "chase-nipple",
    slug: "chase-nipple",
    title: "Chase Nipple",
    category: "Chase Nipple",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-366.jpg",
    description: "Chase Nipple for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 366,
        code: "EMT-366",
        title: "CHASE NIPPLE 3/4\" ZINC DIE CAST",
      },
      {
        id: 367,
        code: "EMT-367",
        title: "CHASE NIPPLE 1\" ZINC DIE CAST",
      },
    ],
  },
  {
    id: "mcb-breaker-box",
    slug: "mcb-breaker-box",
    title: "MCB Breaker Box",
    category: "MCB Breaker Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-368.jpg",
    description: "MCB Breaker Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 368,
        code: "EMT-368",
        title: "PVC MCB BREAKER BOX 5 WAY HT-2",
      },
      {
        id: 369,
        code: "EMT-369",
        title: "PVC MCB BREAKER BOX 5 WAY HT-5",
      },
      {
        id: 370,
        code: "EMT-370",
        title: "PVC MCB BREAKER BOX 8 WAY HT-8",
      },
      {
        id: 371,
        code: "EMT-371",
        title: "PVC MCB BREAKER BOX 12 WAY HT-12",
      },
    ],
  },
  {
    id: "angle-bracket",
    slug: "angle-bracket",
    title: "Angle Bracket",
    category: "Angle Bracket",
    mainCategory: "Support Systems",
    image: "/images/products/product-372.jpg",
    description: "Angle Bracket for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 372,
        code: "EMT-372",
        title: "ANGLE L TYPE 2 HOLE",
      },
      {
        id: 373,
        code: "EMT-373",
        title: "ANGLE L TYPE 4 HOLE",
      },
    ],
  },
  {
    id: "base-plate",
    slug: "base-plate",
    title: "Base Plate",
    category: "Base Plate",
    mainCategory: "Support Systems",
    image: "/images/products/product-374.jpg",
    description: "Base Plate for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 374,
        code: "EMT-374",
        title: "BASE PLATE 15X15 CM",
      },
      {
        id: 375,
        code: "EMT-375",
        title: "BASE PLATE 8X15 CM",
      },
    ],
  },
  {
    id: "cable-lugs",
    slug: "cable-lugs",
    title: "Cable Lugs",
    category: "Cable Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-376.jpg",
    description: "Cable Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 50,
    variants: [
      {
        id: 376,
        code: "EMT-376",
        title: "CABLE LUGS 6-6",
      },
      {
        id: 377,
        code: "EMT-377",
        title: "CABLE LUGS 6-8",
      },
      {
        id: 378,
        code: "EMT-378",
        title: "CABLE LUGS 6-10",
      },
      {
        id: 379,
        code: "EMT-379",
        title: "CABLE LUGS 10-6",
      },
      {
        id: 380,
        code: "EMT-380",
        title: "CABLE LUGS 10-8",
      },
      {
        id: 381,
        code: "EMT-381",
        title: "CABLE LUGS 10-10",
      },
      {
        id: 382,
        code: "EMT-382",
        title: "CABLE LUGS 16-8",
      },
      {
        id: 383,
        code: "EMT-383",
        title: "CABLE LUGS 16-10",
      },
      {
        id: 384,
        code: "EMT-384",
        title: "CABLE LUGS 16-12",
      },
      {
        id: 385,
        code: "EMT-385",
        title: "CABLE LUGS 25-8",
      },
      {
        id: 386,
        code: "EMT-386",
        title: "CABLE LUGS 25-10",
      },
      {
        id: 387,
        code: "EMT-387",
        title: "CABLE LUGS 25-12",
      },
      {
        id: 388,
        code: "EMT-388",
        title: "CABLE LUGS 35-8 (ECONOMIC)",
      },
      {
        id: 389,
        code: "EMT-389",
        title: "CABLE LUGS 35-10 (ECONOMIC)",
      },
      {
        id: 390,
        code: "EMT-390",
        title: "CABLE LUGS 35-12 (ECONOMIC)",
      },
      {
        id: 391,
        code: "EMT-391",
        title: "CABLE LUGS 50-8 (ECONOMIC)",
      },
      {
        id: 392,
        code: "EMT-392",
        title: "CABLE LUGS 50-10 (ECONOMIC)",
      },
      {
        id: 393,
        code: "EMT-393",
        title: "CABLE LUGS 50-12 (ECONOMIC)",
      },
      {
        id: 394,
        code: "EMT-394",
        title: "CABLE LUGS 70-8 (ECONOMIC)",
      },
      {
        id: 395,
        code: "EMT-395",
        title: "CABLE LUGS 70-10 (ECONOMIC)",
      },
      {
        id: 396,
        code: "EMT-396",
        title: "CABLE LUGS 70-12 (ECONOMIC)",
      },
      {
        id: 397,
        code: "EMT-397",
        title: "CABLE LUGS 95-8 (ECONOMIC)",
      },
      {
        id: 398,
        code: "EMT-398",
        title: "CABLE LUGS 95-10 (ECONOMIC)",
      },
      {
        id: 399,
        code: "EMT-399",
        title: "CABLE LUGS 95-12 (ECONOMIC)",
      },
      {
        id: 400,
        code: "EMT-400",
        title: "CABLE LUGS 120-8 (ECONOMIC)",
      },
      {
        id: 401,
        code: "EMT-401",
        title: "CABLE LUGS 120-10 (ECONOMIC)",
      },
      {
        id: 402,
        code: "EMT-402",
        title: "CABLE LUGS 120-12 (ECONOMIC)",
      },
      {
        id: 403,
        code: "EMT-403",
        title: "CABLE LUGS 150-10 (ECONOMIC)",
      },
      {
        id: 404,
        code: "EMT-404",
        title: "CABLE LUGS 150-12 (ECONOMIC)",
      },
      {
        id: 405,
        code: "EMT-405",
        title: "CABLE LUGS 185-10 (ECONOMIC)",
      },
      {
        id: 406,
        code: "EMT-406",
        title: "CABLE LUGS 185-12 (ECONOMIC)",
      },
      {
        id: 407,
        code: "EMT-407",
        title: "CABLE LUGS 240-10 (ECONOMIC)",
      },
      {
        id: 408,
        code: "EMT-408",
        title: "CABLE LUGS 240-12 (ECONOMIC)",
      },
      {
        id: 409,
        code: "EMT-409",
        title: "CABLE LUGS 240-14 (ECONOMIC)",
      },
      {
        id: 410,
        code: "EMT-410",
        title: "CABLE LUGS 240-16 (ECONOMIC)",
      },
      {
        id: 411,
        code: "EMT-411",
        title: "CABLE LUGS 300-10 (ECONOMIC)",
      },
      {
        id: 412,
        code: "EMT-412",
        title: "CABLE LUGS 300-12 (ECONOMIC)",
      },
      {
        id: 413,
        code: "EMT-413",
        title: "CABLE LUGS 300-14 (ECONOMIC)",
      },
      {
        id: 414,
        code: "EMT-414",
        title: "CABLE LUGS 300-16 (ECONOMIC)",
      },
      {
        id: 415,
        code: "EMT-415",
        title: "CABLE LUGS 630-12 (ECONOMIC)",
      },
      {
        id: 416,
        code: "EMT-416",
        title: "CABLE LUGS 630-14 (ECONOMIC)",
      },
      {
        id: 424,
        code: "EMT-424",
        title: "CABLE LUGS 240/12 (STANDARD)",
      },
      {
        id: 425,
        code: "EMT-425",
        title: "CABLE LUGS 300/12 (STANDARD)",
      },
      {
        id: 426,
        code: "EMT-426",
        title: "CABLE LUGS 16-10 MM 2 HOLE",
      },
      {
        id: 427,
        code: "EMT-427",
        title: "CABLE LUGS 25-10 MM 2 HOLE",
      },
      {
        id: 428,
        code: "EMT-428",
        title: "CABLE LUGS 35-10 MM 2 HOLE",
      },
      {
        id: 429,
        code: "EMT-429",
        title: "CABLE LUGS 50-10 MM 2 HOLE",
      },
      {
        id: 430,
        code: "EMT-430",
        title: "CABLE LUGS 70-10 MM 2 HOLE",
      },
      {
        id: 431,
        code: "EMT-431",
        title: "CABLE LUGS 95-10 MM 2 HOLE",
      },
      {
        id: 432,
        code: "EMT-432",
        title: "CABLE LUGS 120-12 MM 2 HOLE",
      },
    ],
  },
  {
    id: "pin-type-lugs",
    slug: "pin-type-lugs",
    title: "Pin Type Lugs",
    category: "Pin Type Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-417.jpg",
    description: "Pin Type Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 417,
        code: "EMT-417",
        title: "PIN TYPE LUGS 10 MM - FLAT TYPE",
      },
      {
        id: 418,
        code: "EMT-418",
        title: "PIN TYPE LUGS 16 MM - FLAT TYPE",
      },
      {
        id: 419,
        code: "EMT-419",
        title: "PIN TYPE LUGS 25 MM - FLAT TYPE",
      },
      {
        id: 420,
        code: "EMT-420",
        title: "PIN TYPE LUGS 35 MM - FLAT TYPE",
      },
      {
        id: 421,
        code: "EMT-421",
        title: "PIN TYPE LUGS 50 MM - FLAT TYPE",
      },
      {
        id: 422,
        code: "EMT-422",
        title: "PIN TYPE LUGS 70 MM - FLAT TYPE",
      },
      {
        id: 423,
        code: "EMT-423",
        title: "PIN TYPE LUGS 95 MM - FLAT TYPE",
      },
    ],
  },
  {
    id: "split-bolt",
    slug: "split-bolt",
    title: "Split Bolt",
    category: "Split Bolt",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-426.jpg",
    description: "Split Bolt for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 12,
    variants: [
      {
        id: 433,
        code: "EMT-433",
        title: "CABLE LUGS 150-12 MM 2 HOLE",
      },
      {
        id: 434,
        code: "EMT-434",
        title: "CABLE LUGS 185-12 MM 2 HOLE",
      },
      {
        id: 435,
        code: "EMT-435",
        title: "CABLE LUGS 240-12 MM 2 HOLE",
      },
      {
        id: 436,
        code: "EMT-436",
        title: "CABLE LUGS 300-12 MM 2 HOLE",
      },
      {
        id: 437,
        code: "EMT-437",
        title: "CABLE LUGS 240-12 MM 4 HOLE",
      },
      {
        id: 438,
        code: "EMT-438",
        title: "CABLE LUGS 300-12 MM 4 HOLE",
      },
      {
        id: 439,
        code: "EMT-439",
        title: "CABLE LUGS 400-14 MM 4 HOLE",
      },
      {
        id: 440,
        code: "EMT-440",
        title: "CABLE LUGS 500-14 MM 4 HOLE",
      },
      {
        id: 441,
        code: "EMT-441",
        title: "CABLE LUGS 630/14 MM 4 HOLE HOLE TO HOLE 45 MM NEMA PAD",
      },
      {
        id: 442,
        code: "EMT-442",
        title: "ALUMINIUM CABLE LUGS 70-12 MM TIN PLATING",
      },
      {
        id: 443,
        code: "EMT-443",
        title: "MCB BREAKER CABLE LUGS 35-6 MM",
      },
      {
        id: 444,
        code: "EMT-444",
        title: "MCB BREAKER CABLE LUGS 50-6 MM",
      },
    ],
  },
  {
    id: "aluminium-lugs",
    slug: "aluminium-lugs",
    title: "Aluminium Lugs",
    category: "Aluminium Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-443.jpg",
    description: "Aluminium Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 445,
        code: "EMT-445",
        title: "MCB BREAKER CABLE LUGS 50-8 MM",
      },
      {
        id: 446,
        code: "EMT-446",
        title: "MCB BREAKER CABLE LUGS 70-6 MM",
      },
      {
        id: 447,
        code: "EMT-447",
        title: "MCB BREAKER CABLE LUGS 70-8 MM",
      },
      {
        id: 448,
        code: "EMT-448",
        title: "MCB BREAKER CABLE LUGS 70-10 MM",
      },
      {
        id: 449,
        code: "EMT-449",
        title: "MCB BREAKER CABLE LUGS 95-8 MM",
      },
      {
        id: 450,
        code: "EMT-450",
        title: "MCB BREAKER CABLE LUGS 95-10 MM",
      },
      {
        id: 451,
        code: "EMT-451",
        title: "MCB BREAKER CABLE LUGS 120-8 MM",
      },
      {
        id: 452,
        code: "EMT-452",
        title: "MCB BREAKER CABLE LUGS 120-10 MM",
      },
      {
        id: 453,
        code: "EMT-453",
        title: "MCB BREAKER CABLE LUGS 185-10 MM",
      },
      {
        id: 454,
        code: "EMT-454",
        title: "MCB BREAKER CABLE LUGS 240-10 MM",
      },
    ],
  },
  {
    id: "bi-metal-lugs",
    slug: "bi-metal-lugs",
    title: "Bi Metal Lugs",
    category: "Bi Metal Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-443.jpg",
    description: "Bi Metal Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 455,
        code: "EMT-455",
        title: "MCB BREAKER CABLE LUGS 3000-10 MM",
      },
      {
        id: 456,
        code: "EMT-456",
        title: "BIMETALIC CABLE LUGS DTL-2-10-10",
      },
      {
        id: 457,
        code: "EMT-457",
        title: "BIMETALIC CABLE LUGS DTL-2-16-10",
      },
      {
        id: 458,
        code: "EMT-458",
        title: "BIMETALIC CABLE LUGS DTL-2-16-12",
      },
      {
        id: 459,
        code: "EMT-459",
        title: "BIMETALIC CABLE LUGS DTL-2-25-10",
      },
      {
        id: 460,
        code: "EMT-460",
        title: "BIMETALIC CABLE LUGS DTL-2-25-12",
      },
      {
        id: 461,
        code: "EMT-461",
        title: "BIMETALIC CABLE LUGS DTL-2-35-10",
      },
      {
        id: 462,
        code: "EMT-462",
        title: "BIMETALIC CABLE LUGS DTL-2-35-12",
      },
      {
        id: 463,
        code: "EMT-463",
        title: "BIMETALIC CABLE LUGS DTL-2-50-10",
      },
      {
        id: 464,
        code: "EMT-464",
        title: "BIMETALIC CABLE LUGS DTL-2-50-12",
      },
    ],
  },
  {
    id: "inline-connector",
    slug: "inline-connector",
    title: "Inline Connector",
    category: "Inline Connector",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-456.jpg",
    description: "Inline Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 20,
    variants: [
      {
        id: 465,
        code: "EMT-465",
        title: "BIMETALIC CABLE LUGS DTL-2-70-10",
      },
      {
        id: 466,
        code: "EMT-466",
        title: "BIMETALIC CABLE LUGS DTL-2-70-12",
      },
      {
        id: 467,
        code: "EMT-467",
        title: "BIMETALIC CABLE LUGS DTL-2-95-10",
      },
      {
        id: 468,
        code: "EMT-468",
        title: "BIMETALIC CABLE LUGS DTL-2-95-12",
      },
      {
        id: 469,
        code: "EMT-469",
        title: "BIMETALIC CABLE LUGS DTL-2-120-12",
      },
      {
        id: 470,
        code: "EMT-470",
        title: "BIMETALIC CABLE LUGS DTL-2-150-12",
      },
      {
        id: 471,
        code: "EMT-471",
        title: "BIMETALIC CABLE LUGS DTL-2-185-12",
      },
      {
        id: 472,
        code: "EMT-472",
        title: "BIMETALIC CABLE LUGS DTL-2-240-12",
      },
      {
        id: 473,
        code: "EMT-473",
        title: "BIMETALIC CABLE LUGS DTL-2-300-12",
      },
      {
        id: 474,
        code: "EMT-474",
        title: "BIMETALIC CABLE LUGS DTL-2-400-12",
      },
      {
        id: 475,
        code: "EMT-475",
        title: "BIMETALIC CABLE LUGS DTL-2-500-12",
      },
      {
        id: 476,
        code: "EMT-476",
        title: "BIMETALIC CABLE LUGS DTL-2-600-14",
      },
      {
        id: 477,
        code: "EMT-477",
        title: "COMPRESSION SLEEVE LUGS 10 MM HC-10L",
      },
      {
        id: 478,
        code: "EMT-478",
        title: "COMPRESSION SLEEVE LUGS 16 MM HC-16L",
      },
      {
        id: 479,
        code: "EMT-479",
        title: "COMPRESSION SLEEVE LUGS 25 MM HC-25L",
      },
      {
        id: 480,
        code: "EMT-480",
        title: "COMPRESSION SLEEVE LUGS 35 MM HC-35L",
      },
      {
        id: 481,
        code: "EMT-481",
        title: "COMPRESSION SLEEVE LUGS 50 MM HC-50L",
      },
      {
        id: 482,
        code: "EMT-482",
        title: "COMPRESSION SLEEVE LUGS 70 MM HC-70L",
      },
      {
        id: 483,
        code: "EMT-483",
        title: "COMPRESSION SLEEVE LUGS 95 MM HC-95L",
      },
      {
        id: 484,
        code: "EMT-484",
        title: "COMPRESSION SLEEVE LUGS 120 MM HC-120L",
      },
    ],
  },
  {
    id: "copper-ferrule",
    slug: "copper-ferrule",
    title: "Copper Ferrule",
    category: "Copper Ferrule",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-477.jpg",
    description: "Copper Ferrule for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 17,
    variants: [
      {
        id: 485,
        code: "EMT-485",
        title: "COMPRESSION SLEEVE LUGS 150 MM HC-150L",
      },
      {
        id: 486,
        code: "EMT-486",
        title: "COMPRESSION SLEEVE LUGS 185 MM HC-185L",
      },
      {
        id: 487,
        code: "EMT-487",
        title: "COMPRESSION SLEEVE LUGS 240 MM HC-240L",
      },
      {
        id: 488,
        code: "EMT-488",
        title: "COMPRESSION SLEEVE LUGS 300 MM HC-300L",
      },
      {
        id: 489,
        code: "EMT-489",
        title: "BRASS CABLE GLAND A2 - 20L",
      },
      {
        id: 490,
        code: "EMT-490",
        title: "BRASS CABLE GLAND A2 - 20S",
      },
      {
        id: 491,
        code: "EMT-491",
        title: "BRASS CABLE GLAND A2 - 25S",
      },
      {
        id: 492,
        code: "EMT-492",
        title: "BRASS CABLE GLAND A2 - 25L",
      },
      {
        id: 493,
        code: "EMT-493",
        title: "BRASS CABLE GLAND A2 - 32S",
      },
      {
        id: 494,
        code: "EMT-494",
        title: "BRASS CABLE GLAND A2 - 32L",
      },
      {
        id: 495,
        code: "EMT-495",
        title: "BRASS CABLE GLAND A2 - 40S",
      },
      {
        id: 496,
        code: "EMT-496",
        title: "BRASS CABLE GLAND A2 - 40L",
      },
      {
        id: 497,
        code: "EMT-497",
        title: "BRASS CABLE GLAND A2 - 50S",
      },
      {
        id: 498,
        code: "EMT-498",
        title: "BRASS CABLE GLAND A2 - 50L",
      },
      {
        id: 499,
        code: "EMT-499",
        title: "BRASS CABLE GLAND A2 - 63S",
      },
      {
        id: 500,
        code: "EMT-500",
        title: "BRASS CABLE GLAND A2 - 63L",
      },
      {
        id: 501,
        code: "EMT-501",
        title: "BRASS CABLE GLAND A2 - 75S",
      },
    ],
  },
  {
    id: "double-ferrule",
    slug: "double-ferrule",
    title: "Double Ferrule",
    category: "Double Ferrule",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-489.jpg",
    description: "Double Ferrule for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 502,
        code: "EMT-502",
        title: "BRASS CABLE GLAND A2 - 75L",
      },
      {
        id: 503,
        code: "EMT-503",
        title: "BRASS CABLE GLAND CW - 20L",
      },
      {
        id: 504,
        code: "EMT-504",
        title: "BRASS CABLE GLAND CW - 20S",
      },
      {
        id: 505,
        code: "EMT-505",
        title: "BRASS CABLE GLAND CW - 25L",
      },
      {
        id: 506,
        code: "EMT-506",
        title: "BRASS CABLE GLAND CW - 25S",
      },
      {
        id: 507,
        code: "EMT-507",
        title: "BRASS CABLE GLAND CW - 32L",
      },
    ],
  },
  {
    id: "pin-terminal",
    slug: "pin-terminal",
    title: "Pin Terminal",
    category: "Pin Terminal",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-503.jpg",
    description: "Pin Terminal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 508,
        code: "EMT-508",
        title: "BRASS CABLE GLAND CW - 32S",
      },
      {
        id: 509,
        code: "EMT-509",
        title: "BRASS CABLE GLAND CW - 40S",
      },
      {
        id: 510,
        code: "EMT-510",
        title: "BRASS CABLE GLAND CW - 40L",
      },
    ],
  },
  {
    id: "emt-compression-coupling",
    slug: "emt-compression-coupling",
    title: "EMT Compression Coupling",