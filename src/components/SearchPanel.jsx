import { useState } from "react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

export default function SearchPanel() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [era, setEra] = useState("");

  return (
    <section id="search" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold text-gray-900">Search Shrines</h2>
        <p className="text-sm text-gray-600 mt-1">Start typing 2–3 letters to see suggestions. Filter by name, city, or era.</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_200px_200px_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name…"
              className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-md border border-gray-300 py-2 px-3 text-sm focus:ring-emerald-500">
            <option value="">All Cities</option>
            <option>Istanbul</option>
            <option>Konya</option>
            <option>Trabzon</option>
          </select>
          <select value={era} onChange={(e) => setEra(e.target.value)} className="rounded-md border border-gray-300 py-2 px-3 text-sm focus:ring-emerald-500">
            <option value="">All Eras</option>
            <option>Prophets</option>
            <option>Sahaba</option>
            <option>Saints</option>
          </select>
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_RESULTS.map((item) => (
            <article key={item.id} className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gray-100 bg-center bg-cover" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="h-4 w-4 text-emerald-600" /> {item.city}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const MOCK_RESULTS = [
  {
    id: 1,
    name: "Mevlana Museum",
    city: "Konya",
    description: "Resting place of Jalal ad-Din Rumi, a major pilgrimage site with rich spiritual heritage.",
    image:
      "https://images.unsplash.com/photo-1594623570835-4c1a6fbea079?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Eyüp Sultan",
    city: "Istanbul",
    description: "Mausoleum of Abu Ayyub al-Ansari, companion of the Prophet; a beloved site in Istanbul.",
    image:
      "https://images.unsplash.com/photo-1575722578680-564e6443fd80?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sumela Monastery",
    city: "Trabzon",
    description: "Historic monastery nestled into a cliff in the Pontic Mountains, a remarkable holy site.",
    image:
      "https://images.unsplash.com/photo-1605123437227-4f8367abbb5f?q=80&w=1600&auto=format&fit=crop",
  },
];
