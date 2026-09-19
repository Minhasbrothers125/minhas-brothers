import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Minhas Brothers</h3>
          <p className="text-sm">
            Premium exporters of high-quality pulses and Pink Himalayan refined salt from Karachi, Pakistan to international markets worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Global Export Locations</h4>
          <p className="text-sm">Shipping to USA, Russia, KSA, and major trade destinations across the globe.</p>
          <p className="text-sm text-white-800 mt-4">Office No,106 1st Floor Abdullah Square New Challi Karachi PAKISTAN</p>
        </div>
      </div>
      <div className="text-center text-xs text-white-600 mt-8 pt-4 border-t border-slate-800">
        © {new Date().getFullYear()} Minhas Brothers. All Rights Reserved.
      </div>
    </footer>
  );
}