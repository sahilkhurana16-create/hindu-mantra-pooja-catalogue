import { useNavigate } from "@tanstack/react-router";
import type { Mantra } from "../backend";

interface MantraCardProps {
  mantra: Mantra;
}

function LotusAccent() {
  return (
    <svg
      viewBox="0 0 40 20"
      className="w-8 h-4 text-gold/40"
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
    >
      <ellipse cx="20" cy="15" rx="4" ry="8" transform="rotate(-30 20 15)" />
      <ellipse cx="20" cy="15" rx="4" ry="8" />
      <ellipse cx="20" cy="15" rx="4" ry="8" transform="rotate(30 20 15)" />
      <circle cx="20" cy="12" r="2" />
    </svg>
  );
}

export default function MantraCard({ mantra }: MantraCardProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate({ to: `/mantras/${mantra.id}` })}
      className="devotional-card w-full text-left rounded-sm cursor-pointer transition-all duration-300 hover:shadow-devotional-hover active:scale-[0.99] overflow-hidden"
    >
      {/* Gold top accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="p-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-base font-semibold text-maroon leading-tight mb-0.5 truncate">
              {mantra.name}
            </h3>
            <p className="font-body text-xs text-muted-foreground">
              {mantra.deity}
            </p>
          </div>

          {/* Language badge */}
          <span className="shrink-0 text-xs font-body px-2 py-0.5 rounded-sm bg-maroon/8 text-maroon border border-maroon/20 font-medium">
            {mantra.language}
          </span>
        </div>

        {/* Devanagari preview */}
        {mantra.mantraText && (
          <div className="mb-3 p-2.5 bg-ivory-warm rounded-sm border border-gold/20">
            <p className="font-devanagari text-sm text-maroon/80 leading-relaxed line-clamp-2">
              {mantra.mantraText.slice(0, 80)}
              {mantra.mantraText.length > 80 ? "..." : ""}
            </p>
          </div>
        )}

        {/* Divider with lotus */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <LotusAccent />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5">
          {mantra.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs font-body px-2 py-0.5 rounded-full bg-saffron/10 text-saffron border border-saffron/25 font-medium"
            >
              {cat}
            </span>
          ))}
          {mantra.categories.length > 3 && (
            <span className="text-xs font-body px-2 py-0.5 rounded-full bg-gold/10 text-gold-deep border border-gold/25">
              +{mantra.categories.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </button>
  );
}
