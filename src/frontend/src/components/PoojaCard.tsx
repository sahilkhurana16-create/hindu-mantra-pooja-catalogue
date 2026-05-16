import { useNavigate } from "@tanstack/react-router";
import { Clock, Package } from "lucide-react";
import type { Pooja } from "../backend";

interface PoojaCardProps {
  pooja: Pooja;
}

function MandalaDot() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-5 h-5 text-gold/50"
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="3" />
      <circle
        cx="10"
        cy="10"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
      />
    </svg>
  );
}

export default function PoojaCard({ pooja }: PoojaCardProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate({ to: `/poojas/${pooja.id}` })}
      className="devotional-card w-full text-left rounded-sm cursor-pointer transition-all duration-300 hover:shadow-devotional-hover active:scale-[0.99] overflow-hidden"
    >
      {/* Gold top accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-base font-semibold text-maroon leading-tight mb-0.5 truncate">
              {pooja.name}
            </h3>
            <p className="font-body text-xs text-muted-foreground">
              {pooja.deity}
            </p>
          </div>
          <MandalaDot />
        </div>

        {/* Significance preview */}
        <p className="font-body text-sm text-foreground/75 leading-relaxed line-clamp-2 mb-3">
          {pooja.significance}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-3" />

        {/* Meta row */}
        <div className="flex items-center justify-between gap-2">
          {/* Occasion badge */}
          <span className="text-xs font-body px-2 py-0.5 rounded-full bg-maroon/8 text-maroon border border-maroon/20 font-medium truncate max-w-[140px]">
            {pooja.occasion.split("/")[0].trim()}
          </span>

          <div className="flex items-center gap-3 text-muted-foreground">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <Clock size={11} />
              <span className="text-xs font-body">
                {Number(pooja.duration)}m
              </span>
            </div>

            {/* Items count */}
            <div className="flex items-center gap-1">
              <Package size={11} />
              <span className="text-xs font-body">
                {pooja.requiredItems.length} items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </button>
  );
}
