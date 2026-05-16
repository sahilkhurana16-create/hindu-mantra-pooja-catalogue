import { useEffect, useRef } from "react";
import {
  useAddMantra,
  useAddPooja,
  useAllMantras,
  useAllPoojas,
} from "../hooks/useQueries";
import { seedMantras, seedPoojas } from "./seedData";

export function useSeedData() {
  const { data: mantras, isLoading: mantrasLoading } = useAllMantras();
  const { data: poojas, isLoading: poojasLoading } = useAllPoojas();
  const addMantra = useAddMantra();
  const addPooja = useAddPooja();
  const seeded = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional seed-once pattern
  useEffect(() => {
    if (mantrasLoading || poojasLoading || seeded.current) return;
    if ((mantras?.length ?? 0) > 0 || (poojas?.length ?? 0) > 0) {
      seeded.current = true;
      return;
    }

    seeded.current = true;

    const runSeed = async () => {
      const sortedMantras = [...seedMantras].sort(
        (a, b) => a.popularityRank - b.popularityRank,
      );
      const sortedPoojas = [...seedPoojas].sort(
        (a, b) => a.popularityRank - b.popularityRank,
      );

      for (const m of sortedMantras) {
        try {
          await addMantra.mutateAsync({
            name: m.name,
            deity: m.deity,
            language: m.language,
            mantraText: m.mantraText,
            transliteration: m.transliteration,
            meaning: m.meaning,
            benefits: m.benefits,
            categories: m.categories,
          });
        } catch {
          // ignore individual seed errors
        }
      }

      for (const p of sortedPoojas) {
        try {
          await addPooja.mutateAsync({
            name: p.name,
            deity: p.deity,
            occasion: p.occasion,
            requiredItems: p.requiredItems,
            procedure: p.procedure,
            duration: BigInt(p.duration),
            significance: p.significance,
          });
        } catch {
          // ignore individual seed errors
        }
      }
    };

    runSeed();
  }, [mantras, poojas, mantrasLoading, poojasLoading]);
}
