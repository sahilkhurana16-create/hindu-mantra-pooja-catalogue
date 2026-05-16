import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Mantra, Pooja } from "../backend";
import { seedMantras, seedPoojas } from "../lib/seedData";
import { useActor } from "./useActor";

// ─── Static data arrays (popularity-ranked) ──────────────────────────────────

const allMantras: Mantra[] = [...seedMantras]
  .sort((a, b) => a.popularityRank - b.popularityRank)
  .map((m, index) => ({
    id: BigInt(index),
    name: m.name,
    deity: m.deity,
    language: m.language,
    mantraText: m.mantraText,
    transliteration: m.transliteration,
    meaning: m.meaning,
    benefits: m.benefits,
    categories: m.categories,
  }));

const allPoojas: Pooja[] = [...seedPoojas]
  .sort((a, b) => a.popularityRank - b.popularityRank)
  .map((p, index) => ({
    id: BigInt(index),
    name: p.name,
    deity: p.deity,
    occasion: p.occasion,
    requiredItems: p.requiredItems,
    procedure: p.procedure,
    duration: BigInt(p.duration),
    significance: p.significance,
  }));

// ─── Mantra Queries ───────────────────────────────────────────────────────────

export function useAllMantras() {
  const data = useMemo(() => allMantras, []);
  return { data, isLoading: false, isError: false };
}

export function useMantra(id: bigint | null) {
  const data = useMemo(
    () => (id !== null ? (allMantras[Number(id)] ?? null) : null),
    [id],
  );
  return {
    data: data ?? undefined,
    isLoading: false,
    isError: data === null && id !== null,
  };
}

export function useMantrasByCategory(category: string | null) {
  const data = useMemo(
    () =>
      category
        ? allMantras.filter((m) => m.categories.includes(category))
        : allMantras,
    [category],
  );
  return { data, isLoading: false, isError: false };
}

// ─── Pooja Queries ────────────────────────────────────────────────────────────

export function useAllPoojas() {
  const data = useMemo(() => allPoojas, []);
  return { data, isLoading: false, isError: false };
}

export function usePooja(id: bigint | null) {
  const data = useMemo(
    () => (id !== null ? (allPoojas[Number(id)] ?? null) : null),
    [id],
  );
  return {
    data: data ?? undefined,
    isLoading: false,
    isError: data === null && id !== null,
  };
}

export function usePoojasByOccasion(occasion: string | null) {
  const data = useMemo(
    () =>
      occasion
        ? allPoojas.filter((p) => p.occasion.includes(occasion))
        : allPoojas,
    [occasion],
  );
  return { data, isLoading: false, isError: false };
}

// ─── Seed Mutations ───────────────────────────────────────────────────────────

export function useAddMantra() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      deity: string;
      language: string;
      mantraText: string;
      transliteration: string;
      meaning: string;
      benefits: string;
      categories: string[];
    }) => {
      if (!actor) throw new Error("No actor");
      return actor.addMantra(
        params.name,
        params.deity,
        params.language,
        params.mantraText,
        params.transliteration,
        params.meaning,
        params.benefits,
        params.categories,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mantras"] });
    },
  });
}

export function useAddPooja() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      deity: string;
      occasion: string;
      requiredItems: string[];
      procedure: string[];
      duration: bigint;
      significance: string;
    }) => {
      if (!actor) throw new Error("No actor");
      return actor.addPooja(
        params.name,
        params.deity,
        params.occasion,
        params.requiredItems,
        params.procedure,
        params.duration,
        params.significance,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["poojas"] });
    },
  });
}
