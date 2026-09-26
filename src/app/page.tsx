import Link from 'next/link';
export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="text-emerald-400 font-semibold tracking-widest text-xs uppercase bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 rounded-full inline-block mb-4">
            Leading Exporter from Pakistan.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Connecting Pakistan’s Premium Agriculture & Salt to Global Markets
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            <strong>Minhas Brothers</strong>  is a premier B2B export house delivering top-grade pulses, Pink Himalayan salt, and refined industrial salt to trusted partners in the USA, Russia, KSA, and worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all text-center"
            >
              Explore Our Products
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 font-bold px-8 py-4 rounded-lg transition-all text-center"
            >
              Request Bulk Quote
            </Link>
          </div>

          {/* Quick Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-700/60 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">15+</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Export Destinations</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">100%</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Quality Inspected</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">Bulk</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Container Shipping</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">Karachi</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Port Strategic Hub</p>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Key Highlights */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Global Buyers Trust Minhas</h2>
          <p className="text-gray-600 mt-2">Uncompromised quality and seamless international trade logistics from Pakistan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">
              🌍
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Global Reach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Established freight network and port logistics enabling reliable container shipping across North America, Eurasia, and the Middle East.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">
              🌱
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Premium Pulses</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Directly sourced from fertile agricultural regions of Pakistan, expertly cleaned, double-polished, and color-sorted to meet strict buyer specifications.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">
              🧂
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Pure Himalayan Salt</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Direct access to authentic Pink Himalayan rock salt mines in Pakistan. Available in raw blocks, edible fine/coarse grains, and industrial grade.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Showcase */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Our Core Products</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">Export Product Portfolio</h2>
            <p className="text-gray-600 mt-2">We export premium quality commodities customized to international packaging requirements.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Category 1: Pulses */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Agro Commodities
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-4 mb-3">Pulses & Legumes</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Pakistan produces some of the finest quality chickpeas and lentils in South Asia. Our processing facilities ensure zero impurities and consistent grain sizes.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Chickpeas / Kabuli & Kala Chana (8mm, 9mm, 10mm)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Red Lentils (Masoor Dal - Whole & Split)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Yellow Split Peas & Mung Beans (Moong)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Moisture-controlled & pest-free bulk packing
                  </li>
                </ul>
              </div>
              <Link 
                href="/products" 
                className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-1 group text-sm"
              >
                View Pulses Specifications <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Category 2: Salt */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Natural Mineral Exporters
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-4 mb-3">Pink Himalayan & Industrial Salt</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Extracted directly from Pakistani salt ranges, our salt products range from gourmet culinary pink salt to high-purity refined industrial grade sodium chloride.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Edible Pink Himalayan Salt (Fine, Coarse & Granules)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Pink Salt Licks for Livestock & Agriculture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Refined Industrial Salt (De-icing, Water Treatment)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Decorative Himalayan Salt Lamps & Craft Blocks
                  </li>
                </ul>
              </div>
              <Link 
                href="/products" 
                className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-1 group text-sm"
              >
                View Salt Specifications <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Advantage Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">Karachi Advantage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Strategic Port Location for Rapid Shipping
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Operating directly out of <strong>Karachi, Pakistan</strong>—the country’s primary port city and maritime trade hub—Minhas Brothers enjoys direct access to major international shipping lines.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border-l-4 border-emerald-500 rounded-r-lg">
                <h4 className="font-bold text-slate-800 text-sm">Direct Port Access (Port Qasim & KPT)</h4>
                <p className="text-gray-600 text-xs mt-1">Faster container loading times and reduced transit delays for time-sensitive agricultural commodities.</p>
              </div>
              <div className="p-4 bg-gray-50 border-l-4 border-emerald-500 rounded-r-lg">
                <h4 className="font-bold text-slate-800 text-sm">Custom Bulk Packaging Options</h4>
                <p className="text-gray-600 text-xs mt-1">We offer 25kg, 50kg PP bags, jumbo tote bags, and buyer-branded private label packaging.</p>
              </div>
              <div className="p-4 bg-gray-50 border-l-4 border-emerald-500 rounded-r-lg">
                <h4 className="font-bold text-slate-800 text-sm">Rigorous Pre-Shipment Inspection</h4>
                <p className="text-gray-600 text-xs mt-1">SGS, Cotecna, or buyer-appointed third-party quality testing provided upon request.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Export Capability Summary</h3>
            <div className="space-y-6 text-sm text-gray-300">
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Minimum Order Quantity (MOQ):</span>
                <span>1 x 20ft FCL Container</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Port of Loading:</span>
                <span>Karachi Port / Port Qasim</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Shipping Terms Accepted:</span>
                <span>FOB, CFR, CIF</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Payment Options:</span>
                <span>L/C at sight, T/T</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="font-semibold text-white">Primary Markets:</span>
                <span>USA, Russia, UAE, Gulf Region</span>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/contact" 
                className="w-full block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-lg text-center transition"
              >
                Inquire For Shipping Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Global Destinations */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-emerald-400 font-semibold text-xs tracking-widest uppercase">Global Footprint</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">Exporting Destinations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Minhas Brothers serves B2B clients, wholesalers, food processors, and distributors across key global economic zones.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-xl text-left">
              <div className="text-3xl mb-3">USA</div>
              <h3 className="text-xl font-bold text-white mb-2">United States (USA)</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Supplying FDA-compliant Pink Himalayan Salt and specialty organic pulses directly to distributors and retail packagers across East and West coast ports.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-xl text-left">
              <div className="text-3xl mb-3">RU</div>
              <h3 className="text-xl font-bold text-white mb-2">Russian Federation</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Regular bulk shipments of pulse varieties, chickpeas, and industrial salt grades tailored for Russian food manufacturing and wholesale networks.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-xl text-left">
              <div className="text-3xl mb-3">KSA</div>
              <h3 className="text-xl font-bold text-white mb-2">Kingdom Of Saudi Arabia (KSA)</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Fast transit shipping to Riyadh and Jeddah free zones for local distribution and re-export across the broader Middle East and North Africa (MENA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Workflow */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-xs tracking-widest uppercase">How We Operate</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">4-Step Simple Export Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <span className="text-4xl font-extrabold text-emerald-100 absolute top-4 right-4">01</span>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Requirement</h3>
            <p className="text-black-600 text-xs leading-relaxed">
              Submit your required quantity, grain/salt specification, and preferred packaging type.
            </p>
          </div>

          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <span className="text-4xl font-extrabold text-emerald-100 absolute top-4 right-4">02</span>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Quotation & Samples</h3>
            <p className="text-black-600 text-xs leading-relaxed">
              We provide competitive FOB/CIF quotes and dispatch physical samples for quality approval.
            </p>
          </div>

          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <span className="text-4xl font-extrabold text-emerald-100 absolute top-4 right-4">03</span>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Processing & Packing</h3>
            <p className="text-black-600 text-xs leading-relaxed">
              Grains are color-sorted/cleaned or salt processed and packed into bags as per contracted terms.
            </p>
          </div>

          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <span className="text-4xl font-extrabold text-emerald-100 absolute top-4 right-4">04</span>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Clearance & Dispatch</h3>
            <p className="text-black-600 text-xs leading-relaxed">
              Customs clearance completed at Karachi Port and loaded onto international shipping lines.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Certifications & Quality Standard */}
      <section className="bg-emerald-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Quality & Compliance First</h2>
            <p className="text-emerald-200 text-sm max-w-2xl">
              All exports from Minhas Brothers adhere to strict phytosanitary guidelines, government export regulations, and international health standards.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider">
            <span className="bg-emerald-800/90 border border-emerald-700 px-4 py-2 rounded-md">Phytosanitary Certified</span>
            <span className="bg-emerald-800/90 border border-emerald-700 px-4 py-2 rounded-md">Halal Compliant</span>
            <span className="bg-emerald-800/90 border border-emerald-700 px-4 py-2 rounded-md">ISO Compliant Processing</span>
            <span className="bg-emerald-800/90 border border-emerald-700 px-4 py-2 rounded-md">SGS Inspection Ready</span>
          </div>
        </div>
      </section>

      {/* 8. Call To Action Banner */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Place a Bulk Import Order?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm">
            Partner with Minhas Brothers for reliable sourcing of Pakistani pulses and authentic salt products. Contact our sales office in Karachi today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold px-8 py-3.5 rounded-lg transition"
            >
              Contact Sales Team
            </Link>
            <Link 
              href="/products" 
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-3.5 rounded-lg transition"
            >
              View Full Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}