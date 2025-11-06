import { Compass, Star, Clock } from "lucide-react";

const cards = [
  {
    title: "Shrine Recommended Today",
    desc: "A meaningful stop for your day",
    icon: Compass,
    color: "bg-emerald-50 text-emerald-700",
    image:
      "https://images.unsplash.com/photo-1582562124811-c09040d0f063?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Most Visited",
    desc: "Popular among visitors",
    icon: Star,
    color: "bg-amber-50 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1569429597303-354f0b7ec047?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Added This Week",
    desc: "Newly added content",
    icon: Clock,
    color: "bg-sky-50 text-sky-700",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function DynamicHighlights() {
  return (
    <section className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
        <p className="text-sm text-gray-600 mt-1">Fresh picks to explore today</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <article key={idx} className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] bg-gray-100 bg-center bg-cover" style={{ backgroundImage: `url(${c.image})` }} />
              <div className="p-4">
                <div className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${c.color}`}>
                  <c.icon className="h-4 w-4" /> {c.title}
                </div>
                <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
