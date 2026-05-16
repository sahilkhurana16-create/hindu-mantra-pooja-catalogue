import { useCallback, useEffect, useRef, useState } from "react";

export type VoiceGender = "male" | "female";

export interface TTSState {
  isPlaying: boolean;
  isPaused: boolean;
  currentCharIndex: number;
  voiceGender: VoiceGender;
}

export interface TTSControls {
  play: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  toggleGender: () => void;
  setGender: (gender: VoiceGender) => void;
}

export function useTTS(): TTSState & TTSControls {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [voiceGender, setVoiceGender] = useState<VoiceGender>("female");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const textRef = useRef<string>("");

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getVoice = useCallback(
    (gender: VoiceGender): SpeechSynthesisVoice | null => {
      if (typeof window === "undefined" || !window.speechSynthesis) return null;
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return null;

      // Try to find a voice matching the gender
      const genderKeywords =
        gender === "female"
          ? [
              "female",
              "woman",
              "girl",
              "zira",
              "samantha",
              "victoria",
              "karen",
              "moira",
              "tessa",
              "veena",
              "fiona",
            ]
          : [
              "male",
              "man",
              "boy",
              "david",
              "mark",
              "daniel",
              "alex",
              "fred",
              "jorge",
              "diego",
            ];

      // First try to find an English voice matching gender
      const englishVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          genderKeywords.some((k) => v.name.toLowerCase().includes(k)),
      );
      if (englishVoice) return englishVoice;

      // Then try any voice matching gender
      const anyGenderVoice = voices.find((v) =>
        genderKeywords.some((k) => v.name.toLowerCase().includes(k)),
      );
      if (anyGenderVoice) return anyGenderVoice;

      // Fallback: use first English voice or first available
      const englishFallback = voices.find((v) => v.lang.startsWith("en"));
      return englishFallback || voices[0] || null;
    },
    [],
  );

  const play = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      // Cancel any existing speech
      window.speechSynthesis.cancel();
      setCurrentCharIndex(-1);

      textRef.current = text;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = voiceGender === "female" ? 1.2 : 0.85;
      utterance.volume = 1;

      // Try to set voice
      const setVoiceAndSpeak = () => {
        const voice = getVoice(voiceGender);
        if (voice) utterance.voice = voice;

        utterance.onstart = () => {
          setIsPlaying(true);
          setIsPaused(false);
        };

        utterance.onboundary = (event) => {
          if (event.name === "word") {
            setCurrentCharIndex(event.charIndex);
          }
        };

        utterance.onend = () => {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentCharIndex(-1);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentCharIndex(-1);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      };

      // Voices may not be loaded yet
      if (window.speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          setVoiceAndSpeak();
          window.speechSynthesis.onvoiceschanged = null;
        };
        // Fallback if onvoiceschanged doesn't fire
        setTimeout(setVoiceAndSpeak, 500);
      }
    },
    [voiceGender, getVoice],
  );

  const pause = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentCharIndex(-1);
  }, []);

  const toggleGender = useCallback(() => {
    setVoiceGender((prev) => (prev === "female" ? "male" : "female"));
  }, []);

  const setGender = useCallback((gender: VoiceGender) => {
    setVoiceGender(gender);
  }, []);

  return {
    isPlaying,
    isPaused,
    currentCharIndex,
    voiceGender,
    play,
    pause,
    resume,
    stop,
    toggleGender,
    setGender,
  };
}
