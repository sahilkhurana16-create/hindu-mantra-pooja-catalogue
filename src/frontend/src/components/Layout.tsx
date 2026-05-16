import { Outlet } from "@tanstack/react-router";
import { AmbientAudioProvider } from "../contexts/AmbientAudioContext";
import { useSeedData } from "../lib/useSeedData";
import BottomNav from "./BottomNav";

// Decorative Om SVG
function OmSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <text x="50" y="72" textAnchor="middle" fontSize="72" fontFamily="serif">
        ॐ
      </text>
    </svg>
  );
}

// Decorative mandala border element
function MandalaAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <g fill="currentColor" opacity="0.7">
        <circle cx="100" cy="10" r="3" />
        <circle cx="85" cy="10" r="2" />
        <circle cx="115" cy="10" r="2" />
        <circle cx="72" cy="10" r="1.5" />
        <circle cx="128" cy="10" r="1.5" />
        <line
          x1="0"
          y1="10"
          x2="65"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <line
          x1="135"
          y1="10"
          x2="200"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <polygon points="100,4 103,9 97,9" />
        <polygon points="100,16 103,11 97,11" />
      </g>
    </svg>
  );
}

function AppHeader() {
  return (
    <header className="sticky top-0 z-50 bg-maroon-gradient shadow-maroon">
      {/* Top gold border line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="px-4 py-3">
        {/* Main header content */}
        <div className="flex items-center justify-center gap-3">
          {/* Left decorative element */}
          <div className="hidden sm:flex items-center gap-2 text-gold opacity-60">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs">✦</span>
          </div>

          {/* Om icon */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shadow-gold-sm">
              <OmSymbol className="w-7 h-7 text-gold" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-gold tracking-wide leading-tight">
              Divya Sadhana
            </h1>
            <p className="font-ornate text-xs text-gold/70 tracking-widest uppercase">
              Sacred Mantras & Poojas
            </p>
          </div>

          {/* Right decorative element */}
          <div className="hidden sm:flex items-center gap-2 text-gold opacity-60">
            <span className="text-xs">✦</span>
            <div className="w-8 h-px bg-gold" />
          </div>
        </div>

        {/* Decorative mandala accent */}
        <MandalaAccent className="w-full max-w-xs mx-auto mt-1 text-gold/40" />
      </div>

      {/* Bottom gold border line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </header>
  );
}

function SeedInitializer() {
  useSeedData();
  return null;
}

export default function Layout() {
  return (
    <AmbientAudioProvider>
      <div className="min-h-screen flex flex-col bg-ivory">
        <AppHeader />
        <SeedInitializer />
        <main className="flex-1 pb-20">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </AmbientAudioProvider>
  );
}
