import { Mail, MapPin, User } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="mt-10 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">T</div>
            <p className="mt-3 text-sm text-gray-600">
              TÜRBELER is a simple, fast and accessible encyclopedia and guide to sacred shrines.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a href="#shrines" className="hover:text-emerald-700">Shrines</a></li>
              <li><a href="#routes" className="hover:text-emerald-700">Routes & Collections</a></li>
              <li><a href="#community" className="hover:text-emerald-700">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Community</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Memory Book</li>
              <li>Prayers & Wishes</li>
              <li>Check-ins</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Stay in the loop</h3>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-emerald-500" />
              <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">
                <Mail className="h-4 w-4" />
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TÜRBELER. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-700">Privacy</a>
            <a href="#terms" className="hover:text-gray-700">Terms</a>
            <a href="#contact" className="inline-flex items-center gap-1 hover:text-gray-700"><User className="h-3 w-3" /> Contact</a>
            <a href="#map" className="inline-flex items-center gap-1 hover:text-gray-700"><MapPin className="h-3 w-3" /> Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
