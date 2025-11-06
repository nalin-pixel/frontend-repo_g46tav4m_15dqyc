import { Play, MapPinned, Search, Library } from "lucide-react";

export default function HeroOnboarding() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Discover, learn and visit sacred shrines
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              An easy, mobile-first encyclopedia and travel guide to prophets, companions, saints and holy sites. Search broadly, see what’s near you, and plan your route with clear guidance.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 shadow-sm">
                <Search className="h-4 w-4 text-emerald-600" /> Smart search
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 shadow-sm">
                <MapPinned className="h-4 w-4 text-emerald-600" /> Near you
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 shadow-sm">
                <Library className="h-4 w-4 text-emerald-600" /> Rich content
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                <Play className="h-4 w-4" /> Watch 45s intro
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 rounded-xl bg-[url('https://images.unsplash.com/photo-1505247964246-1f0a90443c36?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-lg" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
