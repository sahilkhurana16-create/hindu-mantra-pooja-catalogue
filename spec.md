# Hindu Mantra & Pooja Catalogue

## Current State
A mobile-first spiritual app with:
- **Mantras page** — lists 22 mantras sorted by popularity, with search/category filters
- **Mantras detail page** — shows full text, transliteration, meaning, benefits
- **Poojas page** — lists 15 poojas sorted by popularity, with search/occasion filters
- **Poojas detail page** — shows significance, samagri checklist, step-by-step procedure
- **Rosary (Mala) page** — 108-bead japa counter with SVG visualization and reset
- **Layout** — premium maroon/gold header + bottom navigation
- **Audio** — `useTTS` hook (Web Speech API, male/female voice), `useAmbientAudio` hook (5 synthesized tracks via Web Audio API)
- **Data loading** — `useQueries.ts` fetches from backend canister; `useSeedData.ts` seeds the canister on first load; BUT the seeding is unreliable and the backend canister may be empty, causing blank mantras/poojas lists

## Requested Changes (Diff)

### Add
- **Static data source** — Mantras and Poojas data must load immediately from `seedData.ts` without requiring a backend canister call. Remove the dependency on actor/backend for listing and detail pages.
- **TTS audio player UI** — Each mantra and pooja detail page should have a visible audio player with: play/pause/stop buttons, male/female voice toggle, and ambient track selector + mute toggle
- **Volume button counter** — On the Rosary page, listen for `keydown` events with `ArrowUp`/`ArrowDown` or `VolumeUp`/`VolumeDown` hardware key codes to increment/decrement bead count (simulating physical volume button usage on mobile)

### Modify
- **`useAllMantras` / `useAllPoojas`** — Return static data from `seedData.ts` directly instead of (or as fallback when) actor is unavailable, so data is always visible instantly
- **`useMantra(id)` / `usePooja(id)`** — Resolve from `seedData.ts` using the item index (id maps to array index position) instead of canister call, so detail pages load instantly
- **MantraDetailPage** — Add audio player section (TTS + ambient audio controls)
- **PoojaDetailPage** — Add audio player section (TTS + ambient audio controls) reading the significance + procedure text

### Remove
- Nothing to remove; keep backend plumbing in place for future use but route UI through static data

## Implementation Plan
1. Modify `useQueries.ts`: `useAllMantras`, `useAllPoojas`, `useMantra`, `usePooja` — return data from `seedData.ts` immediately (no waiting for actor), so lists and detail pages render instantly with no loading skeleton
2. Add a `AudioPlayer` component (`src/components/AudioPlayer.tsx`) that wraps TTS + ambient audio controls in a compact, styled panel
3. Update `MantraDetailPage.tsx` — integrate `AudioPlayer` with the mantra text as the TTS source
4. Update `PoojaDetailPage.tsx` — integrate `AudioPlayer` with the significance + procedure text as the TTS source
5. Update `RosaryPage.tsx` — add `useEffect` for `keydown` events mapping volume/arrow keys to bead increment/decrement
