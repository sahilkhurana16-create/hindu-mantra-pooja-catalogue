import type React from "react";
import { createContext, useContext } from "react";
import {
  type AmbientAudioControls,
  type AmbientAudioState,
  type TrackName,
  useAmbientAudio,
} from "../hooks/useAmbientAudio";

type AmbientAudioContextType = AmbientAudioState & AmbientAudioControls;

const AmbientAudioContext = createContext<AmbientAudioContextType | null>(null);

export function AmbientAudioProvider({
  children,
}: { children: React.ReactNode }) {
  const ambientAudio = useAmbientAudio();
  return (
    <AmbientAudioContext.Provider value={ambientAudio}>
      {children}
    </AmbientAudioContext.Provider>
  );
}

export function useAmbientAudioContext(): AmbientAudioContextType {
  const ctx = useContext(AmbientAudioContext);
  if (!ctx)
    throw new Error(
      "useAmbientAudioContext must be used within AmbientAudioProvider",
    );
  return ctx;
}

export type { TrackName };
