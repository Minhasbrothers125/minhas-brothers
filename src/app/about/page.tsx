import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 1. Page Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-emerald-400 font-semibold tracking-widest text-xs uppercase bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Established B2B Commodity Exporter
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Minhas Brothers</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering Pakistan’s finest agricultural pulses and rich natural salt minerals to global markets with integrity, purity, and speed.
          </p>
        </div>
      </section>

      {/* 2. Company Overview & Introduction */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">
              Premier Agricultural & Mineral Export House Based in Pakistan.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Headquartered in Karachi, Pakistan, <strong>Minhas Brothers</strong>  is an international trading and export firm dedicated to connecting global B2B buyers with top-tier Pakistani commodities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We specialize in sourcing, processing, and exporting two of Pakistan's most prized natural resources: high-grade, nutrient-dense pulses (chickpeas, lentils, beans) and pure rock salt minerals (authentic Pink Himalayan salt and refined industrial salt).
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-700 border-t border-gray-200 pt-6">
              <div>
                <span className="text-emerald-600 font-bold block text-xl">Karachi, PK</span>
                <span className="text-xs text-gray-500 font-normal">Strategic Export Logistics Hub</span>
              </div>
              <div>
                <span className="text-emerald-600 font-bold block text-xl">100% Compliant</span>
                <span className="text-xs text-gray-500 font-normal">Phytosanitary & SGS Certified</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">At a Glance</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Company Name:</span>
                <span>Minhas Brothers</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Brand Name:</span>
                <span>Minhas</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Headquarters:</span>
                <span>Karachi, Sindh, Pakistan</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Product Focus:</span>
                <span>Pulses & Pink / Industrial Salt</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Key Trade Routes:</span>
                <span>USA, Russia, KSA & Worldwide</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Logistics Port:</span>
                <span>Karachi Port (KPT) / Port Qasim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-2xl mb-4">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To supply international markets with verified, high-grade agricultural produce and Himalayan salt products while maintaining absolute transparency, stringent quality control, competitive pricing, and punctual vessel dispatch schedules.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-2xl mb-4">
              🔭
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become a globally recognized benchmark for Pakistani B2B trade—building long-term commercial partnerships across North America, Eurasia, and the Middle East through reliable execution and uncompromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Corporate Values */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-14">
          <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Our Pillars</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Core Corporate Values</h2>
          <p className="text-gray-600 mt-2">Standards that guide every container we pack and ship worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="text-3xl mb-3">🏅</div>
            <h4 className="font-bold text-slate-800 mb-2">Unmatched Purity</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Double-cleaned and optical color-sorted pulses alongside 100% natural, unadulterated rock salt.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-bold text-slate-800 mb-2">Transparent Trade</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Honest grain grading, transparent market pricing, and consistent updates from contract execution to port arrival.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="text-3xl mb-3">📦</div>
            <h4 className="font-bold text-slate-800 mb-2">Flexible Packaging</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Tailored solutions from 25kg/50kg PP bags to heavy jumbo bags and private label buyer branding.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="text-3xl mb-3">🚢</div>
            <h4 className="font-bold text-slate-800 mb-2">Logistical Efficiency</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Direct access to Karachi shipping terminals guarantees minimal delays and optimal freight rates.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Our Sourcing & Supply Chain Story */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Origin & Sourcing</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Direct Sourcing From Source Regions</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We eliminate unnecessary intermediaries to maintain strict origin control and pass savings on to our global partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-amber-700 bg-amber-50 font-bold text-xs px-3 py-1 rounded-full uppercase">Agricultural Belts</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-4 mb-3">Pulses & Legumes Procurement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our pulses are sourced directly from premier farming belts in Punjab and Sindh, known for high-yield, nutrient-dense crops.
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Handpicked chickpeas (Kabuli & Desi / Kala Chana)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Carefully processed split red lentils (Masoor) & Mung beans</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Controlled moisture levels preventing mold during sea voyages</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-rose-700 bg-rose-50 font-bold text-xs px-3 py-1 rounded-full uppercase">Mineral Reserves</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-4 mb-3">Pink Himalayan & Salt Mines</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our rock salt is extracted from salt ranges in Northern Pakistan—home to pure, multi-mineral Pink Himalayan salt deposits.
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> 100% natural pink salt with essential rich minerals</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Processing for edible fine, coarse granulates, and raw salt blocks</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> High-purity refined industrial sodium chloride for global commercial applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Karachi Strategic Infrastructure Hub */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Port Proximity</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">
              Karachi: The Gateway for Rapid Maritime Export
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Karachi is the commercial capital and maritime heart of Pakistan. Being situated directly within Karachi provides Minhas Brothers an unmatched operational edge:
            </p>
            <div className="space-y-4 mt-6">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-800 text-sm">Dual Port Connection</h4>
                <p className="text-gray-600 text-xs mt-1">Seamless container movement to both Karachi Port Trust (KPT) and Port Muhammad Bin Qasim.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-800 text-sm">Rapid Customs Processing</h4>
                <p className="text-gray-600 text-xs mt-1">On-ground teams expedite clearance documentation and container stuffing directly under our supervision.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-800 text-sm">Major Shipping Line Partnerships</h4>
                <p className="text-gray-600 text-xs mt-1">Strong relations with Maersk, MSC, COSCO, and CMA CGM ensure secured container allocations and competitive ocean rates.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Packaging Capabilities</h3>
            <p className="text-gray-300 text-xs mb-6 leading-relaxed">
              We cater to diverse retail and wholesale buyer specifications with custom packaging configurations:
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-800 rounded border border-slate-700 flex justify-between">
                <span className="font-semibold text-white">Polypropylene (PP) Bags:</span>
                <span className="text-gray-300">25 kg / 50 kg</span>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700 flex justify-between">
                <span className="font-semibold text-white">Jumbo / Bulk Tote Bags:</span>
                <span className="text-gray-300">1,000 kg / 1.25 Metric Ton</span>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700 flex justify-between">
                <span className="font-semibold text-white">Kraft Paper / Retail Pouches:</span>
                <span className="text-gray-300">1 kg / 2 kg / 5 kg</span>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700 flex justify-between">
                <span className="font-semibold text-white">Private Label Branding:</span>
                <span className="text-gray-300">Custom Artwork & Bags</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality Assurance & Compliance */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-xs tracking-widest uppercase">Quality Standard</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">
                Strict Quality Control & Inspection
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                International buyers demand consistency and safety. At Minhas Brothers, every consignment undergoes rigorous quality checks before container sealing.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Moisture level verification to prevent degradation during transit.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Size calibration & optical color sorting for uniform grain distribution.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Phytosanitary inspection certification issued by government authorities.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> SGS or third-party laboratory testing available upon buyer request.
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Compliance & Trade Documentation</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                We handle complete export documentation to ensure hassle-free customs clearance at destination ports.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Bill of Lading (B/L)</div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Certificate of Origin</div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Phytosanitary Cert</div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Fumigation Certificate</div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Commercial Invoice</div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">Packing List</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Destination Network */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Global Footprint</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Key International Export Destinations</h2>
          <p className="text-gray-600 mt-2">Serving importers, wholesalers, and food processors in key trade corridors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">🇺🇸</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">United States (USA)</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Exporting food-grade Pink Himalayan Salt and premium pulse varieties to major distributors across East and West Coast ports.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">🇷🇺</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Russia & Eurasia</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Consistent container shipments of chickpeas, lentils, and industrial salt grades tailored for Eurasian wholesale markets.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">🇦🇪</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">United Arab Emirates (UAE)</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Fast transit sea shipments to Dubai and Sharjah ports for regional distribution and MENA market re-export.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Call To Action Banner */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-emerald-600 text-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Partner with Minhas Brothers Today</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            Looking for a dependable supplier of Pakistani pulses or Pink Himalayan salt? Reach out to our export division in Karachi for product specifications, live rates, and physical sample dispatches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-lg transition"
            >
              Get in Touch
            </Link>
            <Link 
              href="/products" 
              className="bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-8 py-3.5 rounded-lg transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}