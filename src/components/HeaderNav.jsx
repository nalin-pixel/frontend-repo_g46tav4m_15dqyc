import { Menu, Search, MapPin } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">T</div>
            <div>
              <p className="text-lg font-semibold tracking-tight">TÜRBELER</p>
              <p className="text-xs text-gray-500">Encyclopedia & Travel Guide</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-emerald-700">About Us</a>
            <a href="#shrines" className="hover:text-emerald-700">Shrines</a>
            <a href="#prophets" className="hover:text-emerald-700">Prophets</a>
            <a href="#sahaba" className="hover:text-emerald-700">Sahaba-i Kiram</a>
            <a href="#saints" className="hover:text-emerald-700">Saints</a>
            <a href="#holy" className="hover:text-emerald-700">Holy Sites</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Search className="h-4 w-4" />
              Quick Search
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              <MapPin className="h-4 w-4" />
              Near Me
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
