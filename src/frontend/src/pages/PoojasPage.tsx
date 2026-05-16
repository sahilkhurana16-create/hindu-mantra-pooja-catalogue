import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import PoojaCard from "../components/PoojaCard";
import { useAllPoojas } from "../hooks/useQueries";
import { seedPoojas } from "../lib/seedData";

// Build a popularity rank map from seed data for client-side sorting
const popularityMap = new Map<string, number>(
  seedPoojas.map((p) => [p.name, p.popularityRank]),
);

export function PoojasPage() {
  const { data: poojas, isLoading, isError } = useAllPoojas();
  const [search, setSearch] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("All");

  const availableOccasions = useMemo(() => {
    if (!poojas) return ["All"];
    const occasions = new Set<string>(["All"]);
    for (const p of poojas) {
      // Use first part of occasion string for cleaner chips
      const primary = p.occasion.split("/")[0].trim();
      occasions.add(primary);
    }
    return Array.from(occasions);
  }, [poojas]);

  const filtered = useMemo(() => {
    if (!poojas) return [];
    const results = poojas.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.deity.toLowerCase().includes(search.toLowerCase()) ||
        p.occasion.toLowerCase().includes(search.toLowerCase());
      const matchesOccasion =
        selectedOccasion === "All" ||
        p.occasion.toLowerCase().includes(selectedOccasion.toLowerCase());
      return matchesSearch && matchesOccasion;
    });
    // Sort by popularity rank (lower rank = more popular = first)
    return results.sort((a, b) => {
      const rankA = popularityMap.get(a.name) ?? 999;
      const rankB = popularityMap.get(b.name) ?? 999;
      return rankA - rankB;
    });
  }, [poojas, search, selectedOccasion]);

  return (
    <div className="flex flex-col min-h-full bg-ivory">
      {/* Page Header */}
      <div className="px-4 pt-5 pb-5 bg-maroon-gradient relative overflow-hidden">
        {/* Decorative background flame */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-devanagari text-7xl text-gold/10 select-none pointer-events-none">
          🪔
        </div>
        <h2 className="font-heading text-2xl font-bold text-gold mb-0.5 relative z-10">
          Pooja Catalogue
        </h2>
        <p className="font-body text-xs text-gold/60 relative z-10">
          Step-by-step rituals & samagri guides
        </p>
        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Search */}
      <div className="px-4 pt-4 mb-3">
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or deity..."
            className="pl-9 pr-9 bg-ivory-warm border-gold/40 focus-visible:ring-gold/40 text-sm font-body rounded-sm"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Occasion Filter Chips */}
      <div className="px-4 mb-4">
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {availableOccasions.map((occ) => (
            <button
              type="button"
              key={occ}
              onClick={() => setSelectedOccasion(occ)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 ${
                selectedOccasion === occ
                  ? "bg-maroon text-gold border border-gold/50 shadow-gold-sm"
                  : "bg-ivory-warm border border-gold/30 text-muted-foreground hover:border-maroon/40 hover:text-maroon"
              }`}
            >
              {occ}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {!isLoading && (
        <div className="px-4 mb-3">
          <p className="text-xs font-body text-muted-foreground">
            {filtered.length} pooja{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      )}

      {/* Content */}
      <div className="px-4 space-y-3 pb-6">
        {isLoading &&
          [...Array(4)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders use index
            <div key={i} className="devotional-card rounded-sm p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-10 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          ))}

        {isError && (
          <div className="text-center py-12">
            <p className="font-devanagari text-4xl text-gold/40 mb-3">ॐ</p>
            <p className="text-sm font-body text-muted-foreground">
              Unable to load poojas. Please try again.
            </p>
          </div>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="font-devanagari text-4xl text-gold/40 mb-3">ॐ</p>
            <p className="text-sm font-body text-muted-foreground">
              No poojas found for your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedOccasion("All");
              }}
              className="mt-3 text-xs font-body text-maroon hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {!isLoading &&
          !isError &&
          filtered.map((pooja) => (
            <PoojaCard key={pooja.id.toString()} pooja={pooja} />
          ))}
      </div>
    </div>
  );
}
