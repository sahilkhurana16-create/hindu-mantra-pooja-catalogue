import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import MantraCard from "../components/MantraCard";
import { useAllMantras } from "../hooks/useQueries";
import { seedMantras } from "../lib/seedData";

const ALL_CATEGORIES = [
  "All",
  "Vedic",
  "Daily Prayer",
  "Meditation",
  "Universal",
  "Devotional",
  "Protection",
  "Strength",
  "Bhakti",
  "Shaiva",
  "Panchakshara",
  "Liberation",
  "Healing",
  "Longevity",
  "Ganapatya",
  "Success",
  "Beginnings",
  "Wisdom",
  "Shakta",
  "Prosperity",
  "Wealth",
  "Abundance",
  "Education",
  "Arts",
  "Vaishnava",
  "Bhakti",
  "Jyotish",
  "Planetary",
  "Devi",
  "Power",
  "Health",
  "Energy",
  "Karma",
  "Tantra",
  "Victory",
  "Youth",
  "Morning Prayer",
];

// Build a popularity rank map from seed data for client-side sorting
const popularityMap = new Map<string, number>(
  seedMantras.map((m) => [m.name, m.popularityRank]),
);

export function MantrasPage() {
  const { data: mantras, isLoading, isError } = useAllMantras();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive available categories from data
  const availableCategories = useMemo(() => {
    if (!mantras) return ["All"];
    const cats = new Set<string>(["All"]);
    for (const m of mantras) {
      for (const c of m.categories) {
        cats.add(c);
      }
    }
    const ordered = ALL_CATEGORIES.filter((c) => cats.has(c));
    for (const c of cats) {
      if (!ordered.includes(c)) ordered.push(c);
    }
    return ordered;
  }, [mantras]);

  const filtered = useMemo(() => {
    if (!mantras) return [];
    const results = mantras.filter((m) => {
      const matchesSearch =
        search === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.deity.toLowerCase().includes(search.toLowerCase()) ||
        m.mantraText.includes(search);
      const matchesCategory =
        selectedCategory === "All" || m.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
    // Sort by popularity rank (lower rank = more popular = first)
    return results.sort((a, b) => {
      const rankA = popularityMap.get(a.name) ?? 999;
      const rankB = popularityMap.get(b.name) ?? 999;
      return rankA - rankB;
    });
  }, [mantras, search, selectedCategory]);

  return (
    <div className="flex flex-col min-h-full bg-ivory">
      {/* Page Header */}
      <div className="px-4 pt-5 pb-5 bg-maroon-gradient relative overflow-hidden">
        {/* Decorative background Om */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-devanagari text-7xl text-gold/10 select-none pointer-events-none">
          ॐ
        </div>
        <h2 className="font-heading text-2xl font-bold text-gold mb-0.5 relative z-10">
          Mantra Catalogue
        </h2>
        <p className="font-body text-xs text-gold/60 relative z-10">
          Sacred chants ordered by devotion
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

      {/* Category Filter Chips */}
      <div className="px-4 mb-4">
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {availableCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-maroon text-gold border border-gold/50 shadow-gold-sm"
                  : "bg-ivory-warm border border-gold/30 text-muted-foreground hover:border-maroon/40 hover:text-maroon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {!isLoading && (
        <div className="px-4 mb-3">
          <p className="text-xs font-body text-muted-foreground">
            {filtered.length} mantra{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      )}

      {/* Content */}
      <div className="px-4 space-y-3 pb-6">
        {isLoading &&
          [...Array(5)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders use index
            <div key={i} className="devotional-card rounded-sm p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-10 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>
          ))}

        {isError && (
          <div className="text-center py-12">
            <p className="font-devanagari text-4xl text-gold/40 mb-3">ॐ</p>
            <p className="text-sm font-body text-muted-foreground">
              Unable to load mantras. Please try again.
            </p>
          </div>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="font-devanagari text-4xl text-gold/40 mb-3">ॐ</p>
            <p className="text-sm font-body text-muted-foreground">
              No mantras found for your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs font-body text-maroon hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {!isLoading &&
          !isError &&
          filtered.map((mantra) => (
            <MantraCard key={mantra.id.toString()} mantra={mantra} />
          ))}
      </div>
    </div>
  );
}
