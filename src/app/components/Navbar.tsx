import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide text-emerald-400">
          MINHAS <span className="text-sm font-normal text-gray-300 block">BROTHERS</span>
        </Link>
        <div className="space-x-6 text-sm font-semibold">
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>  
          <Link href="/products" className="hover:text-emerald-400 transition">Products</Link>
          <Link href="/about" className="hover:text-emerald-400 transition">About Us</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}