"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CategoryType = "all" | "pulses" | "salt" | "rice";

interface ProductItem {
  id: string;
  name: string;
  category: "pulses" | "salt" | "rice";
  subCategory: string;
  desc: string;
  origin: string;
  purity: string;
  moisture?: string;
  packaging: string;
  badge?: string;
  specs: string[];
  image: string;
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const products: ProductItem[] = [
    // ==========================================
    // --- PINK HIMALAYAN SALT VARIETIES ---
    // ==========================================
    {
      id: "pink-salt-fine",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Himalayan Fine Salt (0.2mm - 0.8mm)",
      desc: "Extra-fine food grade Pink Himalayan rock salt. Rapidly dissolves and ideal for table shakers, direct culinary seasoning, and food manufacturing.",
      origin: "Khewra Salt Mine, Pakistan",
      purity: "98.5% - 99.5% NaCl",
      moisture: "0.2% Max",
      packaging: "25kg Kraft Paper Bags, 1kg Standup Pouches, Bulk Jumbo Bags",
      badge: "Best Seller",
      image: "/images/pink 1.jpg",
      specs: [
        "Grain Size: 0.2 - 0.8 mm (Fine Powder)",
        "84+ Essential Trace Minerals (Iron, Calcium, Potassium)",
        "ISO 22000 & HACCP Food-Grade Certified",
      ],
    },
    {
      id: "pink-salt-medium-coarse",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Himalayan Medium & Coarse Salt (1mm - 5mm)",
      desc: "Uniform light to dark pink crystals specifically calibrated for refillable salt grinders, meat curing, and spice blend formulations.",
      origin: "Khewra Salt Mine, Pakistan",
      purity: "98% - 99.2% NaCl",
      moisture: "0.3% Max",
      packaging: "25kg PP/Paper Bags, 1000kg Jumbo Bags",
      badge: "Popular Export",
      image: "/images/pink2.jpg",
      specs: [
        "Size Options: 1-2mm (Medium), 2-3mm (Coarse), 3-5mm (Extra Coarse)",
        "Rich deep-pink to light-rose color gradient",
        "Optically sorted for zero foreign debris",
      ],
    },
    {
      id: "pink-salt-lumps-granules",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Salt Chunks & Industrial Raw Granules (10mm - 50mm)",
      desc: "Large washed and crushed raw pink rock salt chunks suitable for industrial salt crushing mills, brine production, and spa therapy.",
      origin: "Salt Range, Pakistan",
      purity: "98% Min NaCl",
      packaging: "1000kg FIBC Jumbo Bags / Bulk Containers",
      image: "/images/pink3.jpg",
      specs: [
        "Size Options: 10-20mm, 20-50mm raw chunks",
        "100% natural, chemical-free raw extraction",
        "Ideal for repacking or processing facilities",
      ],
    },
    {
      id: "pink-salt-animal-licks",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Himalayan Animal Salt Licks (2kg - 5kg)",
      desc: "Solid hand-carved pink mineral rock salt blocks with center rope hole. Supplies essential minerals and hydration for horses, cattle, and livestock.",
      origin: "Salt Range, Pakistan",
      purity: "98.5% Min NaCl",
      packaging: "Master Cartons with Individual Hanging Ropes / Wooden Pallets",
      badge: "Agricultural Grade",
      image: "/images/pink4.jpg",
      specs: [
        "Weights: 2kg, 3kg, 4kg, 5kg or custom carved sizes",
        "Weather-resistant, hard-density natural stone",
        "Weatherproof shrink packaging per piece",
      ],
    },
    {
      id: "pink-salt-cooking-slabs",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Salt Cooking Planks & Slabs",
      desc: "Hand-crafted solid pink rock salt blocks for gourmet cooking, grilling, chilling sushi, and high-end restaurant food presentation.",
      origin: "Pakistan",
      purity: "99% Pure Natural Rock",
      packaging: "Individual Box Packing with Protective Foam Encapsulation",
      badge: "Gourmet Specialty",
      image: "/images/pink5.jpg",
      specs: [
        'Dimensions: 8"x4"x2", 8"x8"x2", 12"x8"x2" inches',
        "Heat resistant up to 500°F (260°C)",
        "Imparts subtle salty flavor and rich minerals directly into food",
      ],
    },
    {
      id: "pink-salt-spa-bath",
      category: "salt",
      subCategory: "Himalayan Pink Salt",
      name: "Pink Himalayan Bath & Detox Spa Salt",
      desc: "Pure mineral bath salts formulated for body scrubs, bath soaks, and thermal spa applications. Promotes skin rejuvenation and detoxification.",
      origin: "Pakistan",
      purity: "Pharmaceutical/Cosmetic Grade Raw",
      packaging: "10kg / 20kg Buckets, 25kg Bags, Private Label Jars",
      image: "/images/pink6.jpg",
      specs: [
        "Grain Range: Fine (0.5mm) or Coarse Bath Crystals (3-5mm)",
        "Unrefined, scent-free base ready for essential oil blending",
        "Deep tissue mineral absorption",
      ],
    },

    // ==========================================
    // --- OTHER INDUSTRIAL & REFINED SALTS ---
    // ==========================================
    {
      id: "industrial-refined-salt",
      category: "salt",
      subCategory: "Industrial Salt",
      name: "High-Purity Refined Industrial Vacuum Salt",
      desc: "Triple-refined pdv/vacuum salt formulated for water softening, chemical synthesis, textile dyeing, and food processing.",
      origin: "Sindh / Punjab, Pakistan",
      purity: "99.2% - 99.8% NaCl",
      packaging: "25kg / 50kg PP Bags, 1.25 MT Jumbo Tote Bags",
      image: "/images/pink7.jpg",
      specs: [
        "Low Calcium & Magnesium Impurities",
        "Insolubles: Less than 0.05%",
        "High Solubility Rate",
      ],
    },
    {
      id: "deicing-rock-salt",
      category: "salt",
      subCategory: "Industrial Salt",
      name: "Bulk De-Icing & Road Rock Salt",
      desc: "Coarse screening rock salt engineered for winter road maintenance and ice melting in North American and European markets.",
      origin: "Pakistan",
      purity: "95% - 97% NaCl",
      packaging: "Bulk Vessel / 1000kg FIBC Big Bags",
      image: "/images/pink8.jpg",
      specs: [
        "Grading: 0-6mm / 6-12mm",
        "Anti-caking agent (YFP) treated upon request",
        "Cost-effective bulk sea transport",
      ],
    },

    // ==========================================
    // --- PULSES & LEGUMES CATALOGUE ---
    // ==========================================
    {
      id: "kabuli-chana",
      category: "pulses",
      subCategory: "Chickpeas",
      name: "Kabuli Chickpeas (White Chickpeas)",
      desc: "Premium large-caliber white chickpeas, double-cleaned and machine-sorted for uniform size, color, and high rehydration yield.",
      origin: "Punjab & Sindh, Pakistan",
      purity: "99.5% Min",
      moisture: "12% Max",
      packaging: "25kg / 50kg PP Bags, 1000kg Jumbo Bags",
      badge: "High Demand",
      image: "/images/pink9.jpg",
      specs: [
        "Caliber Counts: 42-44, 44-46, 58-60, 75-80 mm",
        "Admixture: 0.5% Max",
        "Foreign Matter: 0.2% Max",
      ],
    },
    {
      id: "kala-chana",
      category: "pulses",
      subCategory: "Chickpeas",
      name: "Desi Chickpeas (Kala Chana)",
      desc: "Nutrient-rich brown/black chickpeas harvested from choice fertile soils, ideal for whole cooking or split (Chana Dal) milling.",
      origin: "Punjab, Pakistan",
      purity: "99% Min",
      moisture: "11.5% Max",
      packaging: "25kg / 50kg PP Bags",
      badge: "Export Standard",
      image: "/images/pink10.jpg",
      specs: [
        "Size: 5mm - 7mm",
        "Split/Broken: 1% Max",
        "Weeviled Grains: 0.5% Max",
      ],
    },
    {
      id: "masoor-dal",
      category: "pulses",
      subCategory: "Lentils",
      name: "Red Lentils (Masoor Dal - Split & Whole)",
      desc: "Vibrant red/orange split lentils, double Sortex color sorted, available polished or unpolished per buyer requirements.",
      origin: "Sindh, Pakistan",
      purity: "99.5% Min",
      moisture: "12% Max",
      packaging: "25kg / 50kg Woven PP Bags",
      badge: "Top Seller",
      image: "/images/pink11.jpg",
      specs: [
        "Unpolished / Water / Oil Polished Options",
        "Chalky/Damaged Grains: 1% Max",
        "Zero Foreign Organic Matter",
      ],
    },
    {
      id: "mung-beans",
      category: "pulses",
      subCategory: "Beans",
      name: "Green Mung Beans (Whole & Yellow Moong)",
      desc: "Shiny, uniform green mung beans and split yellow moong dal processed under hygienic standards for canning and direct distribution.",
      origin: "Punjab, Pakistan",
      purity: "99% Min",
      moisture: "11% Max",
      packaging: "25kg / 50kg PP Bags",
      image: "/images/pink12.jpg",
      specs: [
        "Size: 3.2mm+ / 3.5mm+",
        "Defective Grains: 0.5% Max",
        "Machine Cleaned & Sortex",
      ],
    },
    {
      id: "red-kidney-beans",
      category: "pulses",
      subCategory: "Beans",
      name: "Red Kidney Beans (Rajma)",
      desc: "Bold dark red kidney beans selected for smooth texture, high protein content, and uniform color grading.",
      origin: "Pakistan",
      purity: "99% Min",
      moisture: "12% Max",
      packaging: "25kg / 50kg PP Bags",
      image: "/images/pink13.jpg",
      specs: [
        "Size: 180-200 / 220-240 pcs per 100g",
        "Discolored Grains: 1% Max",
        "100% Machine Sorted",
      ],
    },

    // ==========================================
    // --- RICE CATALOGUE ---
    // ==========================================
    {
      id: "super-kernel-basmati",
      category: "rice",
      subCategory: "Basmati Rice",
      name: "Super Kernel Basmati Rice",
      desc: "Aromatic long-grain authentic Basmati rice grown in the fertile Punjab river valleys. Renowned for its distinct aroma, soft texture, and elongation upon cooking.",
      origin: "Punjab, Pakistan",
      purity: "98% Pure Basmati",
      moisture: "12.5% Max",
      packaging: "5kg, 10kg, 25kg Non-Woven / Jute / Cotton Bags",
      badge: "Premium Export",
      image: "/images/pink14.jpg",
      specs: [
        "Average Grain Length (AGL): 7.2mm+",
        "Elongation Ratio: Up to 2x after cooking",
        "100% Well Milled & Double Sortex Cleaned",
      ],
    },
    {
      id: "1121-kainat-basmati",
      category: "rice",
      subCategory: "Basmati Rice",
      name: "1121 Extra Long Grain Basmati Rice (Steam / Sella)",
      desc: "World-famous extra-long grain rice preferred for biryani and commercial catering. Remains non-sticky and retains firmness after cooking.",
      origin: "Punjab, Pakistan",
      purity: "99% Pure",
      moisture: "12% Max",
      packaging: "10kg / 25kg / 50kg PP & Non-Woven Bags",
      badge: "High Demand",
      image: "/images/pink15.jpg",
      specs: [
        "Average Grain Length (AGL): 8.35mm - 8.4mm",
        "Broken Grains: 1% Max",
        "Available in White Steam, Golden Sella & Parboiled",
      ],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* 1. Page Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-emerald-400 font-semibold tracking-widest text-xs uppercase bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Certified Bulk Export Catalogue
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Export Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We specialize in premium Basmati & Non-Basmati Rice, authentic Pink Himalayan Salt across all grades, and high-quality agricultural pulses.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Browse Catalogue</h2>
            <p className="text-xs text-gray-500">Filter product line by category</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition ${
                activeCategory === "all"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-slate-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              All Products ({products.length})
            </button>
            <button
              onClick={() => setActiveCategory("salt")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition ${
                activeCategory === "salt"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-slate-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Salt & Pink Salt ({products.filter((p) => p.category === "salt").length})
            </button>
            <button
              onClick={() => setActiveCategory("pulses")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition ${
                activeCategory === "pulses"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-slate-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Pulses & Legumes ({products.filter((p) => p.category === "pulses").length})
            </button>
            <button
              onClick={() => setActiveCategory("rice")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition ${
                activeCategory === "rice"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white text-slate-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Rice Range ({products.filter((p) => p.category === "rice").length})
            </button>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden hover:shadow-md transition"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded">
                      {item.subCategory}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-full shadow">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">{item.desc}</p>

                  {/* Technical Specifications Matrix */}
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 mb-6 text-xs">
                    <div className="flex justify-between border-b border-gray-200/80 pb-1.5">
                      <span className="font-semibold text-slate-500">Origin:</span>
                      <span className="text-slate-800 font-medium">{item.origin}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200/80 pb-1.5">
                      <span className="font-semibold text-slate-500">Purity Standard:</span>
                      <span className="text-slate-800 font-medium">{item.purity}</span>
                    </div>
                    {item.moisture && (
                      <div className="flex justify-between border-b border-gray-200/80 pb-1.5">
                        <span className="font-semibold text-slate-500">Moisture Level:</span>
                        <span className="text-slate-800 font-medium">{item.moisture}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-0.5">
                      <span className="font-semibold text-slate-500">Packaging:</span>
                      <span
                        className="text-slate-800 font-medium text-right max-w-[150px] truncate"
                        title={item.packaging}
                      >
                        {item.packaging}
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Key Quality Specs
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Link / Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                <Link
                  href="/contact"
                  className="inline-block text-xs font-bold text-emerald-700 hover:text-emerald-900 transition"
                >
                  Request Live Quote & Specs →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Export Packaging & Container Loading Options */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">
              Export Readiness
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Packaging & Containerization
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
              Multiple shipping configurations available to preserve product dryness, grain texture, and purity across ocean freight routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">25kg / 50kg PP & Kraft Bags</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                PE-lined bags offering water barrier protection for pink salt, rice, and pulses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">1,000kg Big Bags (Jumbo)</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Heavy-duty FIBC tote bags built for rapid industrial crane handling and repacking plants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl mb-3">🏷️</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">Private Label Branding</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                OEM retail packaging (stand-up pouches, non-woven rice bags, shaker jars) with customized buyer designs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl mb-3">🚢</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">Full Container Loads (FCL)</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                20ft (approx. 24–26 MT capacity) and 40ft container dispatch directly from Karachi Port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Inspection & Certificates */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
                Quality Guarantee
              </span>
              <h2 className="text-3xl font-extrabold mt-2 mb-4">Inspection & Certification</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                All export consignments are verified for purity, moisture compliance, and grain sizing through third-party laboratories.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span> Phytosanitary Certificates
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span> SGS / Intertek Inspection
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span> Certificate of Origin
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span> Fumigation Verification
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-lg font-bold text-emerald-400 mb-3">Request Physical Samples</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                We dispatch physical sample kits (salt grades, rice, or pulse samples) via courier (DHL/FedEx) to verified corporate buyers prior to order contract execution.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-3 rounded-lg transition"
              >
                Request Product Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action Banner */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-emerald-600 text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Need Specific Sizing or Custom OEM Packaging?
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-6 text-xs leading-relaxed">
            Contact our export team for FOB Karachi or CFR/CIF quotes directly to your port of destination.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-8 py-3.5 rounded-lg transition"
            >
              Request Container Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}