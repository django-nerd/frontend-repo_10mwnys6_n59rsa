import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "News", href: "#news" },
    { label: "Events", href: "#events" },
    { label: "Media", href: "#media" },
    { label: "Download", href: "#download" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg shadow-orange-500/20">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              FireStrikeX <span className="text-orange-400">Officials</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-200 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Play Free
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/90">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium shadow-lg"
              >
                Play Free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
